import type { JSX } from "react";
import { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "../stats.module.css";

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
    INR: { flag: "\u{1F1EE}\u{1F1F3}", country: "India", color: "#FF9933" },
    BRL: { flag: "\u{1F1E7}\u{1F1F7}", country: "Brasil", color: "#009C3B" },
    ARS: { flag: "\u{1F1E6}\u{1F1F7}", country: "Argentina", color: "#74ACDF" },
    IDR: { flag: "\u{1F1EE}\u{1F1E9}", country: "Indonesia", color: "#CE1126" },
    VES: { flag: "\u{1F1FB}\u{1F1EA}", country: "Venezuela", color: "#CF142B" },
    MXN: { flag: "\u{1F1F2}\u{1F1FD}", country: "México", color: "#006847" },
    USD: { flag: "\u{1F1FA}\u{1F1F8}", country: "EE.UU.", color: "#3C3B6E" },
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
                Datos obtenidos de{" "}
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
        flag: "\u{1F310}",
        country: decodedCurrency || "Desconocido",
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
                    <span className={styles.regionMetricLabel}>Disputas</span>
                </div>
                <div className={styles.regionMetric}>
                    <span className={styles.regionMetricValue}>{formatUSDC(circle.metrics.totalVolume)}</span>
                    <span className={styles.regionMetricLabel}>Volumen Mensual</span>
                </div>
                <div className={styles.regionMetric}>
                    <span className={styles.regionMetricValue}>{resolutionRate}%</span>
                    <span className={styles.regionMetricLabel}>Resolución</span>
                </div>
            </div>

            <div className={styles.progressBar}>
                <div className={styles.progressLabel}>
                    <span>Participación en Volumen</span>
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

export default function StatsPage(): JSX.Element {
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
                    "No se pudieron cargar las estadísticas en vivo. La red puede estar temporalmente no disponible."
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
            title="Estadísticas del Protocolo"
            description="Estadísticas en vivo on-chain del Protocolo P2P — operaciones totales, merchants activos, países y salud de la red."
        >
            <div className={styles.page}>
                {/* ── Hero ── */}
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <div className={styles.heroTag}>Datos On-Chain en Vivo</div>
                        <h1 className={styles.heroTitle}>Estadísticas del Protocolo</h1>
                        <p className={styles.heroSubtitle}>
                            Transparencia en tiempo real sobre el alcance global, volumen
                            y salud de la red del Protocolo P2P. Todos los datos coinciden con el Ops Dashboard en vivo.
                        </p>
                        {lastUpdated && (
                            <div className={styles.lastUpdated}>
                                <span className={styles.liveIndicator} />
                                <a
                                    href="https://ops.p2p.lol"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Ver Ops Dashboard completo →
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                <div className={styles.content}>
                    {/* ── Global Metrics ── */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Resumen Global</h2>
                        <p className={styles.sectionSubtitle}>
                            Métricas agregadas de todas las regiones activas del protocolo.
                        </p>

                        {loading ? (
                            <LoadingSkeleton />
                        ) : error ? (
                            <ErrorState message={error} />
                        ) : (
                            <div className={styles.statsGrid}>
                                <StatCard
                                    icon="🔄"
                                    label="Órdenes Mensuales"
                                    value={totalOrders}
                                    description="Órdenes completadas en todas las regiones (Mes actual)"
                                />
                                <StatCard
                                    icon="🏪"
                                    label="Merchants Activos"
                                    value={totalMerchants}
                                    description="Merchants verificados que proveen liquidez"
                                />
                                <StatCard
                                    icon="💰"
                                    label="Volumen Mensual"
                                    value={totalVolumeUSDC}
                                    displayValue={formatUSDC((totalVolumeUSDC * 1e6).toString())}
                                    description="Volumen total en todas las regiones este mes"
                                />
                                <StatCard
                                    icon="🌍"
                                    label="Países Activos"
                                    value={consolidatedCircles.length}
                                    description="Círculos de moneda regionales distintos"
                                />
                            </div>
                        )}
                    </section>

                    {/* ── What These Numbers Mean ── */}
                    {!loading && !error && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Qué Significan Estos Números</h2>
                            <div className={styles.explainerGrid}>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🔄</div>
                                    <h3 className={styles.explainerTitle}>Órdenes Mensuales</h3>
                                    <p className={styles.explainerText}>
                                        Cada orden representa a una persona real intercambiando moneda
                                        fiat por cripto (o viceversa) a través del protocolo. Estos
                                        números muestran el uso activo del mes calendario actual.
                                    </p>
                                </div>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🏪</div>
                                    <h3 className={styles.explainerTitle}>Merchants</h3>
                                    <p className={styles.explainerText}>
                                        Los merchants son los "proveedores de liquidez" del protocolo —
                                        mantienen USDC y lo intercambian por moneda local en ambos lados
                                        de una operación. Más merchants significa liquidación más rápida
                                        y mejores tasas para los usuarios.
                                    </p>
                                </div>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🌍</div>
                                    <h3 className={styles.explainerTitle}>Círculos por País</h3>
                                    <p className={styles.explainerText}>
                                        Cada país opera en su propio "Círculo" — un mercado aislado con
                                        reglas de moneda local, conjunto de merchants y precios propios.
                                        Este diseño permite que P2P se expanda a nuevos países sin
                                        afectar los mercados existentes.
                                    </p>
                                </div>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🛡️</div>
                                    <h3 className={styles.explainerTitle}>Total de Disputas</h3>
                                    <p className={styles.explainerText}>
                                        El número absoluto de operaciones que requirieron arbitraje del
                                        protocolo. Dados los miles de órdenes colocadas mensualmente,
                                        mantener un conteo de disputas cercano a cero es un testimonio
                                        de la seguridad del flujo del protocolo.
                                    </p>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* ── Regional Breakdown ── */}
                    {!loading && !error && sortedRegions.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Desglose Regional</h2>
                            <p className={styles.sectionSubtitle}>
                                Cada tarjeta muestra una instantánea en vivo de la actividad del protocolo en un país para el mes actual.
                                La barra de progreso muestra su participación en el volumen global total.
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

                    {/* ── Data Source ── */}
                    <section className={styles.sourceSection}>
                        <div className={styles.sourceCard}>
                            <div className={styles.sourceLeft}>
                                <div className={styles.sourceTitle}>Fuente de Datos y Transparencia</div>
                                <p className={styles.sourceText}>
                                    Todas las estadísticas de esta página se obtienen en vivo desde
                                    contratos inteligentes on-chain indexados por The Graph Protocol.
                                    Esto significa que los datos no pueden ser manipulados. Es una
                                    lectura directa de la blockchain.
                                </p>
                            </div>
                            <div className={styles.sourceLinks}>
                                <a
                                    href="https://ops.p2p.lol"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.sourceLink}
                                >
                                    Ver Ops Dashboard →
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}
