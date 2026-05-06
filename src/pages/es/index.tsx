import type { JSX } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import CursorGlow from "../../components/CursorGlow";

import styles from "../index.module.css";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Whitepaper y Documentación del Protocolo P2P"
    >
      <CursorGlow />
      <header className={clsx("hero", styles.heroBanner)}>
        <div className="container" style={{ position: "relative" }}>
          <h1 className="hero-title">
            El Futuro de la <br />
            Coordinación <span className={styles.highlight}>Descentralizada</span>
          </h1>
          <p className="hero-subtitle">
            Un protocolo para intercambios económicos, que preserva la privacidad,
            y sin tener que confiar ni custodiar con terceros.
            Cerrando la brecha entre fiat y cripto mediante
            una reputación basada en credibilidad.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/es/whitepaper/abstract"
            >
              Leer Documentación
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/p2pdotme/Documentation"
            >
              Ver en GitHub
            </Link>
          </div>
          <div className={styles.statsRow}>
            <Link
              className="button button--secondary button--lg"
              to="/es/stats"
            >
              Estadísticas del Protocolo
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}