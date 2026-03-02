import type { JSX } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CursorGlow from "../components/CursorGlow";

import styles from "./index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="The P2P Protocol Whitepaper and Documentation"
    >
      <CursorGlow />
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container" style={{ position: "relative" }}>
          <h1 className="hero-title">
            The Future of <br />
            <span className={styles.highlight}>Decentralized</span> Coordination
          </h1>
          <p className="hero-subtitle">
            A protocol for trustless, privacy-preserving, and custodial-free
            economic exchange. Bridging the gap between fiat and crypto with
            credibility-based reputation.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/whitepaper/abstract"
            >
              Read the Docs
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/p2pdotme/Documentation"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
