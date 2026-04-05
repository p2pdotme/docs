import type { JSX } from "react";
import { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "../../../src/pages/stats.module.css";

// ── Types ──────────────────────────────────────────────────────────────────

interface CircleMetrics {
    totalPlacedOrdersCount: string;
    totalMerchantsCount: string;
    totalVolume: string;
    raisedDisputesCount: string;
    resolvedDisputesCount: string;
}

interface Circle {
    name: string;
    currency: string;
    metrics: CircleMetrics;
}

interface MonthlyMetric {
    currency: string;
    completedBuyOrdersCount: string;
    completedSellOrdersCount: string;
    completedPayOrdersCount: string;
    totalVolume: string;
}

interface StatsData {
    circles: Circle[];
    currencyMetricsByMonths: MonthlyMetric[];
}

// ── Constants ─────────────────────────────────────────────────────────────

const GRAPH_ENDPOINT =
    "https://gateway.thegraph.com/api/6982cd62c2edc6da923d17f1d0d2e5fd/deployments/id/QmUaCUMDKih8nqm4A31XDQ592QCK3GSc3FTgEmQJapQwmx";

const GRAPH_QUERY = `
  query GetStats($month: String!) {
    circles {
      name
      currency
      metrics {
        totalPlacedOrdersCount
        totalMerchantsCount
        totalVolume
        raisedDisputesCount
        resolvedDisputesCount
      }
    }
    currencyMetricsByMonths(where: { month: $month }, first: 1000) {
      currency
      completedBuyOrdersCount
      completedSellOrdersCount
      completedPayOrdersCount
      totalVolume
    }
  }
`;

const CIRCLE_META: Record<string, { flag: string; country: string; color: string }> = {
    INR: { flag: "🇮🇳", country: "Índia", color: "#FF9933" },
    BRL: { flag: "🇧🇷", country: "Brasil", color: "#009C3B" },
    ARS: { flag: "🇦🇷", country: "Argentina", color: "#74ACDF" },
    IDR: { flag: "🇮🇩", country: "Indonésia", color: "#CE1126" },
    VES: { flag: "🇻🇪", country: "Venezuela", color: "#CF142B" },
    MXN: { flag: "🇲🇽", country: "México", color: "#006847" },
    USD: { flag: "🇺🇸", country: "EUA", color: "#3C3B6E" },
};

// ── Helpers ───────────────────────────────────────────────────────────────

function formatNumber(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
    if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
    return n.toLocaleString();
}

function formatUSDC(raw: string): string {
    const n = Number(raw) / 1e6;
    if (n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(2) + "M";
    if (n >= 1_000) return "$" + (n / 1_000).toFixed(1) + "K";
    return "$" + n.toFixed(2);
}

function decodeHexName(s: string): string {
    if (!s || !s.startsWith('0x')) return s;
    try {
        let hex = s.slice(2);
        let out = '';
        for (let i = 0; i < hex.length; i += 2) {
            const code = parseInt(hex.slice(i, i + 2), 16);
            if (code === 0) break;
            out += String.fromCharCode(code);
        }
        return out || s;
    } catch {
        return s;
    }
}

function useCounter(target: number, duration = 1200): number {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (target === 0) return;
        const steps = 40;
        const stepVal = target / steps;
        let current = 0;
        const interval = setInterval(() => {
            current += stepVal;
            if (current >= target) {
                setCount(target);
                clearInterval(interval);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(interval);
    }, [target, duration]);
    return count;
}

// ── Sub-components ────────────────────────────────────────────────────────

function LoadingSkeleton() {
    return (
        <div className={styles.skeletonGrid}>
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.skeletonCard} />
            ))}
        </div>
    );
}

function ErrorState({ message }: { message: string }) {
    return (
        <div className={styles.errorState}>
            <span className={styles.errorIcon}>⚠️</span>
            <p>{message}</p>
            <p className={styles.errorSub}>
                Dados provenientes de{" "}
                <a href="https://ops.p2p.lol" target="_blank" rel="noopener noreferrer">
                    ops.p2p.lol
                </a>
            </p>
        </div>
    );
}

interface StatCardProps {
    label: string;
    value: number;
    displayValue?: string;
    icon: string;
    description: string;
}

function StatCard({ label, value, displayValue, icon, description }: StatCardProps) {
    const animated = useCounter(value);
    return (
        <div className={styles.statCard}>
            <div className={styles.statIcon}>{icon}</div>
            <div className={styles.statValue}>
                {displayValue ?? formatNumber(animated)}
            </div>
            <div className={styles.statLabel}>{label}</div>
            <div className={styles.statDescription}>{description}</div>
        </div>
    );
}

interface RegionCardProps {
    circle: Circle;
    maxOrders: number;
}

function RegionCard({ circle, maxOrders }: RegionCardProps) {
    const decodedCurrency = decodeHexName(circle.currency);
    const meta = CIRCLE_META[decodedCurrency] ?? {
        flag: "🌐",
        country: decodedCurrency || "Desconhecido",
        color: "#493fee",
    };
    const orders = parseInt(circle.metrics.totalPlacedOrdersCount, 10) || 0;
    const disputes = parseInt(circle.metrics.raisedDisputesCount, 10) || 0;
    const resolved = parseInt(circle.metrics.resolvedDisputesCount, 10) || 0;
    const resolutionRate = disputes > 0 ? Math.min(100, Math.round((resolved / disputes) * 100)) : 100;
    const progressPct = maxOrders > 0 ? Math.round((orders / maxOrders) * 100) : 0;

    return (
        <div className={styles.regionCard}>
            <div className={styles.regionHeader}>
                <span className={styles.regionFlag}>{meta.flag}</span>
                <div>
                    <div className={styles.regionCountry}>{meta.country}</div>
                    <div className={styles.regionCurrency}>{decodedCurrency} · {circle.name}</div>
                </div>
                <div className={styles.regionBadge} style={{ background: meta.color + "22", color: meta.color, border: `1px solid ${meta.color}44` }}>
                    {decodedCurrency}
                </div>
            </div>

            <div className={styles.regionMetrics}>
                <div className={styles.regionMetric}>
                    <span className={styles.regionMetricValue}>{disputes}</span>
                    <span className={styles.regionMetricLabel}>Disputas Levantadas</span>
                </div>
                <div className={styles.regionMetric}>
                    <span className={styles.regionMetricValue}>{formatUSDC(circle.metrics.totalVolume)}</span>
                    <span className={styles.regionMetricLabel}>Volume Mensal</span>
                </div>
                <div className={styles.regionMetric}>
                    <span className={styles.regionMetricValue}>{resolutionRate}%</span>
                    <span className={styles.regionMetricLabel}>Resolução de Disputas</span>
                </div>
            </div>

            <div className={styles.progressBar}>
                <div className={styles.progressLabel}>
                    <span>Participação de Volume</span>
                    <span>{progressPct}%</span>
                </div>
                <div className={styles.progressTrack}>
                    <div
                        className={styles.progressFill}
                        style={{ width: `${progressPct}%`, background: meta.color }}
                    />
                </div>
            </div>
        </div>
    );
}

// ── Main Page ─────────────────────────────────────────────────────────────

export default function StatsPtPage(): JSX.Element {
    const [data, setData] = useState<StatsData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string>("");

    useEffect(() => {
        async function fetchStats() {
            try {
                const now = new Date();
                if (now.getDate() <= 2) {
                    now.setMonth(now.getMonth() - 1);
                }
                const month = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;

                const res = await fetch(GRAPH_ENDPOINT, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        query: GRAPH_QUERY,
                        variables: { month }
                    }),
                });
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json = await res.json();
                if (json.errors) throw new Error(json.errors[0].message);
                setData(json.data);
                setLastUpdated(new Date().toLocaleTimeString());
            } catch (err) {
                setError(
                    "Não foi possível carregar as estatísticas ao vivo. A rede pode estar temporariamente indisponível."
                );
            } finally {
                setLoading(false);
            }
        }
        fetchStats();
    }, []);

    const circles = data?.circles ?? [];
    const monthlyMetrics = data?.currencyMetricsByMonths ?? [];

    const currencyMap = circles.reduce((acc, circle) => {
        const currency = decodeHexName(circle.currency);
        if (!acc[currency]) {
            acc[currency] = {
                name: CIRCLE_META[currency]?.country || currency,
                currency: circle.currency,
                metrics: {
                    totalPlacedOrdersCount: "0",
                    totalMerchantsCount: "0",
                    totalVolume: "0",
                    raisedDisputesCount: "0",
                    resolvedDisputesCount: "0",
                },
            };
        }

        const m = acc[currency].metrics;
        const cm = circle.metrics;
        m.totalMerchantsCount = (parseInt(m.totalMerchantsCount, 10) + parseInt(cm.totalMerchantsCount || "0", 10)).toString();
        m.raisedDisputesCount = (parseInt(m.raisedDisputesCount, 10) + parseInt(cm.raisedDisputesCount || "0", 10)).toString();
        m.resolvedDisputesCount = (parseInt(m.resolvedDisputesCount, 10) + parseInt(cm.resolvedDisputesCount || "0", 10)).toString();

        return acc;
    }, {} as Record<string, Circle>);

    Object.keys(currencyMap).forEach(currency => {
        const monthly = monthlyMetrics.find(m => decodeHexName(m.currency) === currency);
        if (monthly) {
            const consolidated = currencyMap[currency];
            const m = consolidated.metrics;

            const ordersCount =
                parseInt(monthly.completedBuyOrdersCount || "0", 10) +
                parseInt(monthly.completedSellOrdersCount || "0", 10) +
                parseInt(monthly.completedPayOrdersCount || "0", 10);

            m.totalPlacedOrdersCount = ordersCount.toString();

            const rawVol = parseInt(monthly.totalVolume || "0", 10) * 2;
            m.totalVolume = rawVol.toString();
        } else {
            currencyMap[currency].metrics.totalPlacedOrdersCount = "0";
            currencyMap[currency].metrics.totalVolume = "0";
        }
    });

    const consolidatedCircles: Circle[] = Object.values(currencyMap);

    const totalOrders = consolidatedCircles.reduce((s: number, c: Circle) => s + (parseInt(c.metrics.totalPlacedOrdersCount, 10) || 0), 0);
    const totalMerchants = consolidatedCircles.reduce((s: number, c: Circle) => s + (parseInt(c.metrics.totalMerchantsCount, 10) || 0), 0);

    const totalVolumeUSDC = consolidatedCircles.reduce((s: number, c: Circle) => s + (parseInt(c.metrics.totalVolume, 10) / 1e6), 0);

    const maxOrders = Math.max(...consolidatedCircles.map((c: Circle) => parseInt(c.metrics.totalPlacedOrdersCount, 10) || 0), 1);

    const sortedRegions = consolidatedCircles.sort(
        (a: Circle, b: Circle) => (parseInt(b.metrics.totalPlacedOrdersCount, 10) || 0) - (parseInt(a.metrics.totalPlacedOrdersCount, 10) || 0)
    );

    return (
        <Layout
            title="Estatísticas do Protocolo"
            description="Estatísticas ao vivo na blockchain do Protocolo P2P — total de negociações, comerciantes ativos, países e saúde da rede."
        >
            <div className={styles.page}>
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <div className={styles.heroTag}>Dados Ao Vivo na Blockchain</div>
                        <h1 className={styles.heroTitle}>Estatísticas do Protocolo</h1>
                        <p className={styles.heroSubtitle}>
                            Transparência em tempo real sobre o alcance global do Protocolo P2P, volume
                            e saúde da rede. Todos os dados correspondem ao Painel de Operações ao vivo.
                        </p>
                        {lastUpdated && (
                            <div className={styles.lastUpdated}>
                                <span className={styles.liveIndicator} />
                                <a
                                    href="https://ops.p2p.lol"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver Painel de Operações Completo →
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Visão Geral Global</h2>
                        <p className={styles.sectionSubtitle}>
                            Métricas agregadas em todas as regiões ativas do protocolo.
                        </p>

                        {loading ? (
                            <LoadingSkeleton />
                        ) : error ? (
                            <ErrorState message={error} />
                        ) : (
                            <div className={styles.statsGrid}>
                                <StatCard
                                    icon="🔄"
                                    label="Pedidos Mensais"
                                    value={totalOrders}
                                    description="Pedidos completados em todas as regiões (Mês Atual)"
                                />
                                <StatCard
                                    icon="🏪"
                                    label="Comerciantes Ativos"
                                    value={totalMerchants}
                                    description="Comerciantes verificados fornecendo liquidez"
                                />
                                <StatCard
                                    icon="💰"
                                    label="Volume Mensal"
                                    value={totalVolumeUSDC}
                                    displayValue={formatUSDC((totalVolumeUSDC * 1e6).toString())}
                                    description="Volume total em todas as regiões este mês"
                                />
                                <StatCard
                                    icon="🌍"
                                    label="Países Ativos"
                                    value={consolidatedCircles.length}
                                    description="Círculos distintos de moeda regional"
                                />
                            </div>
                        )}
                    </section>

                    {!loading && !error && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>O Que Isto Significa</h2>
                            <div className={styles.explainerGrid}>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🔄</div>
                                    <h3 className={styles.explainerTitle}>Pedidos Mensais</h3>
                                    <p className={styles.explainerText}>
                                        Cada pedido representa uma pessoa real negociando moeda fiduciária por criptografia (ou vice-versa) através do protocolo.
                                    </p>
                                </div>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🏪</div>
                                    <h3 className={styles.explainerTitle}>Comerciantes</h3>
                                    <p className={styles.explainerText}>
                                        Comerciantes são os "provedores de liquidez" do protocolo — eles mantêm USDC e o trocam por moeda local em ambos os lados.
                                    </p>
                                </div>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🌍</div>
                                    <h3 className={styles.explainerTitle}>Círculos de País</h3>
                                    <p className={styles.explainerText}>
                                        Cada país opera em seu próprio "Círculo" — um mercado isolado com regras de moeda local, conjuntos de comerciantes e preços.
                                    </p>
                                </div>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🛡️</div>
                                    <h3 className={styles.explainerTitle}>Total de Disputas</h3>
                                    <p className={styles.explainerText}>
                                        O número absoluto de negociações que exigiram arbitragem do protocolo. Manter uma contagem de disputas praticamente nula é importante.
                                    </p>
                                </div>
                            </div>
                        </section>
                    )}

                    {!loading && !error && sortedRegions.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Detalhamento Regional</h2>
                            <p className={styles.sectionSubtitle}>
                                Cada card mostra um snapshot ao vivo da atividade do protocolo de um país para o mês atual.
                            </p>
                            <div className={styles.regionsGrid}>
                                {sortedRegions.map((circle) => (
                                    <RegionCard
                                        key={`${circle.currency}`}
                                        circle={circle}
                                        maxOrders={maxOrders}
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    <section className={styles.sourceSection}>
                        <div className={styles.sourceCard}>
                            <div className={styles.sourceLeft}>
                                <div className={styles.sourceTitle}>Fonte de Dados e Transparência</div>
                                <p className={styles.sourceText}>
                                    Todas as estatísticas nesta página são buscadas ao vivo de contratos inteligentes na blockchain indexados pelo The Graph Protocol.
                                </p>
                            </div>
                            <div className={styles.sourceLinks}>
                                <a
                                    href="https://ops.p2p.lol"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.sourceLink}
                                >
                                    Ver Painel de Operações →
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
