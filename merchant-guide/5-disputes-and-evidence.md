---
id: 5-disputes-and-evidence
sidebar_position: 5
title: "5. Disputes and Evidence"
slug: disputes-and-evidence
---

If a dispute is raised, follow these steps.

1. Review order context and timestamps.
2. Submit supporting evidence in-app (including ZK/TLS-backed proofs where available).
3. Follow settlement updates and resulting order state transitions.

Disputes are settled on-chain by authorized admins under protocol fault rules and dispute windows.

```mermaid
flowchart TD
    order[OrderInProgress] --> issue[IssueDetected]
    issue --> dispute[DisputeRaised]
    dispute --> evidence[SubmitEvidence]
    evidence --> settle[AdminSettlementOnChain]
    settle --> outcome[FinalOutcome]
```

---