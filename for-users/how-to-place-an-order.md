---
id: how-to-place-an-order
sidebar_position: 3
title: "How to Place an Order"
slug: how-to-place-an-order
---

1. Open the app and select `BUY`, `SELL`, or `PAY`.
2. Enter amount and required recipient/payment details.
3. Submit order and wait for merchant assignment.
4. Follow app prompts for transfer and confirmation.

```mermaid
flowchart LR
    start[StartInClientApp] --> choose[ChooseOrderType]
    choose --> submit[SubmitOrder]
    submit --> assign[MerchantAssigned]
    assign --> transfer[CompleteTransferStep]
    transfer --> finish[OrderFinalState]
```

---