import type { JSX } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CursorGlow from "../../../src/components/CursorGlow";

import styles from "../../../src/pages/index.module.css";

export default function HomePt(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="O Protocolo P2P - Whitepaper e Documentação"
    >
      <CursorGlow />
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container" style={{ position: "relative" }}>
          <h1 className="hero-title">
            O Futuro da Coordenação <br />
            <span className={styles.highlight}>Descentralizada</span> 
          </h1>
          <p className="hero-subtitle">
            Um protocolo para câmbio que preserva a privacidade e dispensa custódia de terceiros. 
            Conectando o sistema financeiro tradicional ao universo cripto por meio de um sistema de reputação baseado em credibilidade.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/pt/whitepaper/abstract"
            >
              Ler a Documentação
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/p2pdotme/Documentation"
            >
              Ver no GitHub
            </Link>
          </div>
          <div className={styles.statsRow}>
            <Link
              className="button button--secondary button--lg"
              to="/pt/stats"
            >
              Estatísticas do Protocolo
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
