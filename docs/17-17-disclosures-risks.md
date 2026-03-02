---
id: 17-17-disclosures-risks
sidebar_position: 17
title: "17. Disclosures & Risks"
slug: disclosures-risks
---

While the protocol is designed with safety and resilience in mind, users should understand the inherent risks of participating in decentralized finance.

**Regulatory uncertainty** remains a factor in the evolving crypto landscape. Jurisdictional shifts in how regulators classify or restrict peer-to-peer transactions may limit protocol features or geographic coverage over time. The protocol aims to remain compliant through programmable policy parameters, but cannot guarantee future regulatory treatment.

**Liquidity conditions** affect the user experience. During periods of low merchant activity or thin order books, spreads may widen and matching times may increase. The Proof-of-Credibility system incentivizes reliable liquidity provision, but market conditions remain outside the protocol's direct control.

**Oracle dependencies** introduce potential points of failure. Price feeds sourced from external oracles could experience outages or manipulation attempts. The protocol mitigates this through deviation guards, staleness checks, multiple source aggregation, and circuit breakers that pause trading when anomalies are detected.

**Payment rail characteristics** vary significantly. Some rails support instant, irreversible transfers while others are prone to chargebacks or reversals. The protocol addresses this through risk classification, requiring stronger proofs, higher bonds, and longer settlement windows for higher-risk rails.

**Smart contract risk** cannot be entirely eliminated. Despite rigorous audits, formal verification efforts, and ongoing bug bounty programs, the possibility of undiscovered vulnerabilities remains. Users should only transact amounts they can afford to have at risk.

---