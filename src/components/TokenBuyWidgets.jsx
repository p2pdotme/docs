import { useState, useEffect } from 'react';

export const CONTRACT = 'P2PXup1ZvMpCDkJn3PQxtBYgxeCSfH39SFeurGSmeta';

export function LivePrice() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const load = async () => {
    try {
      const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${CONTRACT}`);
      const json = await res.json();
      const pair = json?.pairs?.[0];
      if (pair) {
        setData({
          price: parseFloat(pair.priceUsd).toFixed(6),
          change: parseFloat(pair.priceChange?.h24).toFixed(2),
          mcap: pair.marketCap ? `$${(pair.marketCap / 1e6).toFixed(2)}M` : '—',
          volume: pair.volume?.h24 ? `$${(pair.volume.h24 / 1e3).toFixed(1)}K` : '—',
          liquidity: pair.liquidity?.usd ? `$${(pair.liquidity.usd / 1e3).toFixed(1)}K` : '—',
        });
      } else setError(true);
    } catch { setError(true); }
  };

  useEffect(() => { load(); const t = setInterval(load, 30000); return () => clearInterval(t); }, []);

  const pos = data?.change >= 0;

  return (
    <>
      <div className="htb-price-card">
        <div>
          <p className="htb-price-label">Live Price - $P2P</p>
          <p className="htb-price-value">{error ? 'Unavailable' : data ? `$${data.price}` : 'Loading...'}</p>
          <p className="htb-price-sub">Updates every 30s · via DexScreener</p>
        </div>
        {data && !error && (
          <div style={{textAlign: 'right'}}>
            <p className="htb-price-label">24h Change</p>
            <p className="htb-price-value" style={{color: pos ? '#22c55e' : '#ef4444', fontSize: '20px'}}>
              {pos ? '+' : ''}{data.change}%
            </p>
          </div>
        )}
      </div>
      {data && !error && (
        <div className="htb-stats-row">
          <div className="htb-stat-card">
            <p className="htb-stat-label">Market Cap</p>
            <p className="htb-stat-value">{data.mcap}</p>
          </div>
          <div className="htb-stat-card">
            <p className="htb-stat-label">24h Volume</p>
            <p className="htb-stat-value">{data.volume}</p>
          </div>
          <div className="htb-stat-card">
            <p className="htb-stat-label">Liquidity</p>
            <p className="htb-stat-value">{data.liquidity}</p>
          </div>
        </div>
      )}
    </>
  );
}

export function CopyAddress() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="htb-contract">
      <div>
        <p className="htb-contract-label">Contract Address (Solana)</p>
        <p className="htb-contract-address">{CONTRACT}</p>
      </div>
      <button className="htb-copy-btn" onClick={copy}>{copied ? '✓ Copied' : 'Copy'}</button>
    </div>
  );
}