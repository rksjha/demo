# SHIVACOIN System Architecture and DFD

Date: 12 May 2026

## 1. Architecture Principles

- Loyalty ledger first, blockchain optional later.
- Every coin movement must be auditable.
- No reward without verified business event.
- Encashment and transfer must be gated by KYC, limits and compliance review.
- Public website should generate leads; portal should manage verified activity.
- Admin workflows should be scalable across services, sectors, partners and campaigns.

## 2. High-Level Components

| Layer | Components |
| --- | --- |
| Public layer | Marketing website, reward calculator, inquiry capture, white paper, compliance disclosures |
| Identity layer | Client registration, organization profile, KYC, roles, consent |
| Business layer | Service catalog, eligible spend, invoice ingestion, payment status, partner offers |
| Reward layer | Rule engine, coin issuance, pending/active balances, redemption, reversal, expiry |
| Liquidity layer | Transfer, encashment, partner settlement, payout controls |
| Admin layer | User management, KYC review, reward approval, campaign rules, dispute handling |
| Data layer | PostgreSQL ledger, document store, audit log, reporting warehouse |
| Integration layer | Websites, CRM, accounting, payment gateway, notification provider, partner APIs |
| Future chain layer | Smart contract, wallet, custody, bridge, chain indexer, AML monitoring |

## 3. Recommended MVP Stack

| Need | Recommendation |
| --- | --- |
| Frontend | Next.js or React-based responsive web app |
| Backend | Node.js/NestJS or Django/FastAPI |
| Database | PostgreSQL with immutable ledger tables |
| Admin | Role-based admin console |
| Auth | Email/mobile OTP plus passwordless option |
| Files | Object storage for KYC and documents |
| Notifications | Email, SMS, WhatsApp provider |
| Hosting | Vercel/Cloudflare for frontend; managed backend and database |
| Analytics | Product analytics plus finance ledger reports |

## 4. Context Diagram

```mermaid
flowchart LR
    Client["Client / MSME / Farmer / Dealer"]
    Partner["Partner Merchant"]
    Admin["SCG Admin / Finance / Compliance"]
    Website["SHIVACOIN Website"]
    Portal["Client Portal"]
    Engine["Reward and Ledger Engine"]
    Payments["Payment / Accounting Systems"]
    KYC["KYC / Document Verification"]
    Notify["Email / SMS / WhatsApp"]
    Payout["Bank / Payout Provider"]
    Future["Future Wallet / Token Network"]

    Client --> Website
    Website --> Portal
    Client --> Portal
    Partner --> Portal
    Admin --> Portal
    Portal --> Engine
    Payments --> Engine
    Portal --> KYC
    Engine --> Notify
    Engine --> Payout
    Engine -. future .-> Future
```

## 5. Level 0 DFD

```mermaid
flowchart TB
    U["External Entity: User"]
    A["External Entity: Admin"]
    P["External Entity: Partner"]
    PG["External Entity: Payment Gateway / Accounting"]
    BANK["External Entity: Bank / Payout"]

    P1(("1. Register and Verify Profile"))
    P2(("2. Capture Eligible Spend"))
    P3(("3. Calculate and Issue Coins"))
    P4(("4. Redeem / Transfer / Encash"))
    P5(("5. Report and Audit"))

    D1[("D1 User Profiles")]
    D2[("D2 Invoices and Payments")]
    D3[("D3 Coin Ledger")]
    D4[("D4 Reward Rules")]
    D5[("D5 KYC Documents")]
    D6[("D6 Audit Logs")]
    D7[("D7 Partner Offers")]

    U --> P1
    P1 --> D1
    P1 --> D5
    A --> P1

    PG --> P2
    U --> P2
    P2 --> D2

    D1 --> P3
    D2 --> P3
    D4 --> P3
    P3 --> D3
    P3 --> D6

    U --> P4
    P --> P4
    A --> P4
    D3 --> P4
    D7 --> P4
    P4 --> BANK
    P4 --> D3
    P4 --> D6

    A --> P5
    D1 --> P5
    D2 --> P5
    D3 --> P5
    D6 --> P5
```

## 6. Level 1 DFD - Reward Issuance

```mermaid
flowchart TB
    Invoice["Invoice / Payment Event"]
    Profile["Verified Profile"]
    Rule["Reward Rule Engine"]
    Fraud["Fraud and Duplicate Checks"]
    Pending["Pending Coin Balance"]
    Active["Active Coin Balance"]
    Audit["Audit Log"]
    Notify["Notification"]
    AdminReview["Admin Review Queue"]

    Invoice --> Rule
    Profile --> Rule
    Rule --> Fraud
    Fraud -->|Pass| Pending
    Fraud -->|Exception| AdminReview
    AdminReview -->|Approve| Pending
    AdminReview -->|Reject| Audit
    Pending -->|Payment settled and lock period complete| Active
    Pending --> Audit
    Active --> Audit
    Active --> Notify
```

## 7. Level 1 DFD - Redemption and Encashment

```mermaid
flowchart TB
    User["Verified User"]
    Balance["Coin Balance"]
    Catalog["Service / Partner Catalog"]
    Request["Redemption or Encashment Request"]
    Policy["Policy, Limit and KYC Check"]
    Approval["Admin / Auto Approval"]
    Settlement["Service Credit / Partner Settlement / Bank Payout"]
    Reversal["Failed or Reversed Transaction"]
    Ledger["Coin Ledger"]
    Audit["Audit Log"]

    User --> Request
    Balance --> Request
    Catalog --> Request
    Request --> Policy
    Policy -->|Allowed| Approval
    Policy -->|Blocked| Reversal
    Approval --> Settlement
    Settlement --> Ledger
    Reversal --> Ledger
    Ledger --> Audit
```

## 8. Core Data Model

### users

- id
- name
- email
- mobile
- user_type
- status
- created_at

### organizations

- id
- legal_name
- gstin
- pan
- sector
- address
- verification_status

### profiles

- user_id
- organization_id
- role
- onboarding_source
- consent_status

### invoices

- id
- organization_id
- invoice_number
- invoice_date
- gross_amount
- eligible_amount
- payment_status
- source_system

### reward_rules

- id
- rule_name
- spend_threshold
- reward_value
- eligible_categories
- start_date
- end_date
- status

### ledger_entries

- id
- account_id
- entry_type
- amount
- status
- reference_type
- reference_id
- running_balance
- created_at
- created_by

### redemptions

- id
- account_id
- redemption_type
- requested_amount
- approved_amount
- status
- settlement_reference

### audit_logs

- id
- actor_id
- action
- entity_type
- entity_id
- before_hash
- after_hash
- created_at

## 9. Ledger Rules

- Use append-only ledger entries; do not overwrite historical balances.
- Store running balance for speed but verify through ledger reconciliation.
- Use idempotency keys for invoice/payment events.
- Separate pending, active, locked, redeemed, expired and reversed balances.
- Require maker-checker approval for manual adjustments and encashment.

## 10. Security and Compliance Controls

- Role-based access control.
- MFA for admins.
- Encryption at rest and in transit.
- KYC document access controls.
- Immutable audit logs.
- Suspicious activity rules.
- Rate limits and bot protection.
- Payout approval limits.
- Data retention and consent management.
- Periodic ledger reconciliation.

## 11. Deployment Environments

| Environment | Purpose |
| --- | --- |
| Development | Feature work and internal testing |
| Staging | UAT, content approval, compliance checks |
| Production | Live website and verified transactions |
| Reporting replica | Analytics and finance reporting without production write risk |

## 12. Future Blockchain Architecture

```mermaid
flowchart LR
    Ledger["Internal Rewards Ledger"]
    Bridge["Token Bridge Service"]
    Compliance["KYC / AML / Limits"]
    Contract["Smart Contract"]
    Wallet["User Wallet"]
    Indexer["Chain Indexer"]
    Treasury["Treasury Wallet"]

    Ledger --> Compliance
    Compliance --> Bridge
    Bridge --> Contract
    Contract --> Wallet
    Contract --> Treasury
    Contract --> Indexer
    Indexer --> Ledger
```

Tokenization should not be implemented until the business has legal clearance, an audited smart contract, treasury controls and AML monitoring.

