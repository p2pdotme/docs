---
id: disputes
sidebar_position: 8
title: "Disputes"
slug: disputes
---

If a dispute is raised, follow these steps.

1. Review order context and timestamps.
2. Submit supporting evidence in-app.
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

*Jury-based escalation tiers and governance-vote finality for disputes are planned for a future release.*

---