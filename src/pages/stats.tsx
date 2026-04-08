import type { JSX } from "react";
import { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "./stats.module.css";

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

// Country/currency metadata for display
const CIRCLE_META: Record<string, { flag: string; country: string; color: string }> = {
    INR: { country: "India", color: "#FF9933", flag: "https://flagpedia.net/data/flags/icon/36x27/in.webp" },
    BRL: { country: "Brazil", color: "#009C3B", flag: "https://flagpedia.net/data/flags/icon/36x27/br.webp" },
    ARS: { country: "Argentina", color: "#74ACDF", flag: "https://flagpedia.net/data/flags/icon/36x27/ar.webp" },
    IDR: { country: "Indonesia", color: "#CE1126", flag: "https://flagpedia.net/data/flags/icon/36x27/id.webp" },
    VEN: { country: "Venezuela", color: "#C6C914", flag: "https://flagpedia.net/data/flags/icon/36x27/ve.webp" },
    MEX: { country: "Mexico", color: "#006847", flag: "https://flagpedia.net/data/flags/icon/36x27/mx.webp" },
    NGN: { country: "Nigeria", color: "#008751", flag: "https://flagpedia.net/data/flags/icon/36x27/ng.webp" },
    USD: { country: "USA", color: "#F72754", flag: "https://flagpedia.net/data/flags/icon/36x27/us.webp" },
    EUR: { country: "Europe", color: "#0044CE", flag: "https://images.emojiterra.com/google/noto-emoji/unicode-17.0/color/svg/1f1ea-1f1fa.svg" },
};

// ── Helpers ───────────────────────────────────────────────────────────────

function formatNumber(n: number): string {
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
    if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
    return n.toLocaleString();
}

function formatUSDC(raw: string): string {
    // raw is a big-int string in wei (18 decimals for USDC on The Graph)
    const n = Number(raw) / 1e6; // USDC uses 6 decimals
    if (n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(2) + "M";
    if (n >= 1_000) return "$" + (n / 1_000).toFixed(1) + "K";
    return "$" + n.toFixed(2);
}

// Decode hex-encoded strings (The Graph sometimes returns hex names)
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

// Animated counter hook
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
                Data sourced from{" "}
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
        country: decodedCurrency || "Unknown",
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
                <img className={styles.regionFlag} src={meta.flag} alt={meta.country} />
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
                    <span className={styles.regionMetricLabel}>Disputes Raised</span>
                </div>
                <div className={styles.regionMetric}>
                    <span className={styles.regionMetricValue}>{formatUSDC(circle.metrics.totalVolume)}</span>
                    <span className={styles.regionMetricLabel}>Monthly Volume</span>
                </div>
                <div className={styles.regionMetric}>
                    <span className={styles.regionMetricValue}>{resolutionRate}%</span>
                    <span className={styles.regionMetricLabel}>Dispute Resolution</span>
                </div>
            </div>

            {/* Progress bar relative to highest-volume region */}
            <div className={styles.progressBar}>
                <div className={styles.progressLabel}>
                    <span>Volume Share</span>
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
                // Fall back to previous month if it's the 1st or 2nd day to avoid an empty stats page
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
                    "Could not load live stats. The network may be temporarily unavailable."
                );
            } finally {
                setLoading(false);
            }
        }
        fetchStats();
    }, []);

    // ── Monthly Consolidation ──
    const circles = data?.circles ?? [];
    const monthlyMetrics = data?.currencyMetricsByMonths ?? [];

    // 1. Group by currency and get all-time totals (for merchants/disputes)
    const currencyMap = circles.reduce((acc, circle) => {
        const currency = decodeHexName(circle.currency);
        if (!acc[currency]) {
            acc[currency] = {
                name: CIRCLE_META[currency]?.country || currency,
                currency: circle.currency, // storing raw hex here
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

    // 2. Overlay monthly data (matching Ops Dashboard logic)
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

            // Volume from The Graph is single-sided; multiply x2 for full 2-sided economic volume
            const rawVol = parseInt(monthly.totalVolume || "0", 10) * 2;
            m.totalVolume = rawVol.toString();
        } else {
            // If no monthly data found for this currency, set orders to 0
            currencyMap[currency].metrics.totalPlacedOrdersCount = "0";
            currencyMap[currency].metrics.totalVolume = "0";
        }
    });

    const consolidatedCircles: Circle[] = Object.values(currencyMap);

    // Aggregated Globals (Based on Monthly)
    const totalOrders = consolidatedCircles.reduce((s: number, c: Circle) => s + (parseInt(c.metrics.totalPlacedOrdersCount, 10) || 0), 0);
    const totalMerchants = consolidatedCircles.reduce((s: number, c: Circle) => s + (parseInt(c.metrics.totalMerchantsCount, 10) || 0), 0);

    // Total volume aggregation
    const totalVolumeUSDC = consolidatedCircles.reduce((s: number, c: Circle) => s + (parseInt(c.metrics.totalVolume, 10) / 1e6), 0);

    const maxOrders = Math.max(...consolidatedCircles.map((c: Circle) => parseInt(c.metrics.totalPlacedOrdersCount, 10) || 0), 1);

    const sortedRegions = consolidatedCircles.sort(
        (a: Circle, b: Circle) => (parseInt(b.metrics.totalPlacedOrdersCount, 10) || 0) - (parseInt(a.metrics.totalPlacedOrdersCount, 10) || 0)
    );

    return (
        <Layout
            title="Protocol Stats"
            description="Live on-chain statistics for the P2P Protocol — total trades, active merchants, countries, and network health."
        >
            <div className={styles.page}>
                {/* ── Hero ── */}
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <div className={styles.heroTag}>Live On-Chain Data</div>
                        <h1 className={styles.heroTitle}>Protocol Stats</h1>
                        <p className={styles.heroSubtitle}>
                            Real-time transparency into the P2P Protocol's global reach, volume
                            and network health. All data matches the live Ops Dashboard.
                        </p>
                        {lastUpdated && (
                            <div className={styles.lastUpdated}>
                                <span className={styles.liveIndicator} />
                                <a
                                    href="https://ops.p2p.lol"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View full Ops Dashboard →
                                </a>
                            </div>
                        )}
                    </div>
                </section>

                <div className={styles.content}>
                    {/* ── Global Metrics ── */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Global Overview</h2>
                        <p className={styles.sectionSubtitle}>
                            Aggregated metrics across all active protocol regions.
                        </p>

                        {loading ? (
                            <LoadingSkeleton />
                        ) : error ? (
                            <ErrorState message={error} />
                        ) : (
                            <div className={styles.statsGrid}>
                                <StatCard
                                    icon="🔄"
                                    label="Monthly Orders"
                                    value={totalOrders}
                                    description="Completed orders across all regions (Current Month)"
                                />
                                <StatCard
                                    icon="🏪"
                                    label="Active Merchants"
                                    value={totalMerchants}
                                    description="Verified merchants providing liquidity"
                                />
                                <StatCard
                                    icon="💰"
                                    label="Monthly Volume"
                                    value={totalVolumeUSDC}
                                    displayValue={formatUSDC((totalVolumeUSDC * 1e6).toString())}
                                    description="Total volume across all regions this month"
                                />
                                <StatCard
                                    icon="🌍"
                                    label="Countries Active"
                                    value={consolidatedCircles.length}
                                    description="Distinct regional currency circles"
                                />
                            </div>
                        )}
                    </section>

                    {/* ── What These Numbers Mean ── */}
                    {!loading && !error && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>What This Means</h2>
                            <div className={styles.explainerGrid}>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🔄</div>
                                    <h3 className={styles.explainerTitle}>Monthly Orders</h3>
                                    <p className={styles.explainerText}>
                                        Every order represents a real person trading fiat currency for
                                        crypto (or vice versa) through the protocol. These numbers show
                                        active usage for the current calendar month.
                                    </p>
                                </div>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🏪</div>
                                    <h3 className={styles.explainerTitle}>Merchants</h3>
                                    <p className={styles.explainerText}>
                                        Merchants are the "liquidity providers" of the protocol — they
                                        hold USDC and exchange it for local currency on both sides of a
                                        trade. More merchants means faster settlement and better rates
                                        for users.
                                    </p>
                                </div>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🌍</div>
                                    <h3 className={styles.explainerTitle}>Country Circles</h3>
                                    <p className={styles.explainerText}>
                                        Each country operates in its own "Circle" — an isolated market
                                        with local currency rules, merchant sets, and pricing. This
                                        design allows P2P to expand to new countries without disrupting
                                        existing markets.
                                    </p>
                                </div>
                                <div className={styles.explainerCard}>
                                    <div className={styles.explainerIcon}>🛡️</div>
                                    <h3 className={styles.explainerTitle}>Total Disputes</h3>
                                    <p className={styles.explainerText}>
                                        The absolute number of trades that required protocol arbitration.
                                        Given the thousands of orders placed monthly, maintaining a near-zero
                                        dispute count is a testament to the safety of the protocol flow.
                                    </p>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* ── Regional Breakdown ── */}
                    {!loading && !error && sortedRegions.length > 0 && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Regional Breakdown</h2>
                            <p className={styles.sectionSubtitle}>
                                Each card shows a live snapshot of one country's protocol activity for the current month.
                                The progress bar shows its share of total global volume.
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
                                <div className={styles.sourceTitle}>Data Source & Transparency</div>
                                <p className={styles.sourceText}>
                                    All statistics on this page are fetched live from on-chain smart
                                    contracts indexed by The Graph Protocol. This means the data
                                    cannot be manipulated. It is a direct read of the blockchain.
                                </p>
                            </div>
                            <div className={styles.sourceLinks}>
                                <a
                                    href="https://ops.p2p.lol"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.sourceLink}
                                >
                                    View Ops Dashboard →
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
}