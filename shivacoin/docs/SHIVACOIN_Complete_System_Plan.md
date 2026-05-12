# SHIVACOIN Rewards Platform - Complete System Plan

Prepared for SCG / Shiva Group  
Date: 12 May 2026  
Working product name: **SHIVACOIN**

## 1. Executive Intent

SHIVACOIN should be designed as a premium client rewards and engagement platform for the SCG ecosystem. Any client, MSME, farmer, dealer, consultant, partner or service buyer can create a verified profile, transact with eligible SCG entities, earn reward coins, and later use those coins within approved redemption, marketplace, partner, or encashment workflows.

The safest launch path is:

1. Start as a **closed-loop loyalty rewards ledger**.
2. Add partner redemption and internal marketplace utility.
3. Add controlled transferability between verified users.
4. Consider regulated tokenization only after legal, tax, AML, KYC, FIU-IND and payment compliance review.

This avoids presenting SHIVACOIN as an unregulated investment product while still preserving a path toward future token-market utility.

## 2. Reward Rule

Base reward policy:

- For every **Rs 1,000 eligible spend**, the client receives **SHIVACOIN worth Rs 1**.
- Effective base reward rate: **0.10% of eligible spend**.
- Coins should be posted only after invoice confirmation, payment realization, cancellation window expiry, and fraud checks.
- Reward value should initially be treated as loyalty value, not a guaranteed financial return.

Future upside language:

- The statement “potential to become 20X to 100X in 2-5 years” must be framed as an aspirational scenario, not a promise.
- Public material should say: “Future market value, if any, will depend on adoption, utility, regulatory permissions, partner acceptance, liquidity and demand. No appreciation is guaranteed.”

## 3. Brand and Business Fit

The platform should reflect SCG’s premium consultancy positioning:

- Executive-grade client onboarding.
- Strong trust signals: verified profiles, transparent ledger, clear terms, audit trail.
- Service-oriented UX around consulting, MSME diagnostics, agri, distribution, compliance, documentation, and advisory workflows.
- Lead-generation readiness through inquiry capture, assessment forms, advisory requests, and partner onboarding.
- Scalable admin structure for sectors, reward rules, invoices, campaigns, documentation, KYC, and redemptions.
- Future automation potential through APIs, CRM integration, AI-assisted profile enrichment, document readiness scoring, and workflow triggers.

## 4. Referenced Public Ecosystem

The system is aligned with the visible SCG-family business surface:

| Domain | Observed strategic relevance |
| --- | --- |
| `msmeintelligence.in` | MSME advisory, diagnostics, service discovery, case credibility, blog/newsletter, member login and transformation-focused positioning. |
| `shivacsg.com` | Consulting and strategic advisory brand surface suitable for enterprise-grade credibility. |
| `shivagroup.org.in` | Group-level trust, services, sectors, institutional presence and cross-business positioning. |
| `mentorshiva.com` | Mentorship, founder guidance, learning, advisory funnel and professional authority. |
| `drishtibio.com` | Agri input, bio-fertilizer, farmer/dealer registration and rural distribution use cases. |
| `shiveena.in` | Consumer/brand extension potential for future marketplace or loyalty redemption. |

Local Git repository check:

- `/Users/rakeshjha/Antigravity/Codex Coin SHIVACOIN` is currently empty.
- No `.git` repositories were found under `/Users/rakeshjha/Antigravity` during this planning pass.
- The architecture below is therefore designed as a new implementation baseline. It can be reconciled with existing GitHub repositories once specific remotes or local repo paths are provided.

## 5. Core User Types

| User type | Main needs | SHIVACOIN role |
| --- | --- | --- |
| MSME client | Services, diagnostics, funding readiness, documentation | Earn rewards on consulting and service spend; redeem for advisory credits. |
| Enterprise client | Strategy, compliance, transformation | Earn and allocate coins across departments/projects. |
| Farmer | Product purchase, advisory, registration | Earn rewards through Drishti Bio purchase channels and redeem for inputs or advisory. |
| Dealer/distributor | Purchase volume, schemes, settlement | Earn coins as channel incentive; redeem or offset invoices. |
| Mentor/consultant | Service delivery and referrals | Earn referral rewards and receive tokenized engagement incentives. |
| Admin | Rule control, audit, KYC, reporting | Manage policies, ledger, approvals, fraud controls and compliance evidence. |
| Partner merchant | Accept rewards | List offers and settle accepted coins under agreement. |

## 6. Product Modules

### 6.1 Public Website

Primary sections:

- Home: SHIVACOIN value proposition, trust badges, ecosystem coverage.
- How it works: Create profile, spend, earn, redeem, transact.
- Services: MSME, consulting, agri, mentorship, documentation, automation.
- Sectors: MSME, agriculture, distribution, manufacturing, services, startups.
- Reward calculator: spend amount -> expected base coins.
- White paper download.
- Partner marketplace preview.
- Inquiry capture and onboarding CTA.
- Compliance and risk disclosure.

### 6.2 Client Portal

Features:

- Profile creation and verification.
- KYC / business profile upload.
- Dashboard: balance, earned, pending, redeemed, expired, locked.
- Eligible purchases and invoice mapping.
- Reward statement.
- Redemption catalog.
- Transfer request, if enabled.
- Encashment request, if enabled and compliant.
- Support ticketing.

### 6.3 Admin Console

Features:

- User and organization management.
- KYC and document review.
- Reward rule engine.
- Invoice/payment ingestion.
- Manual adjustment approvals.
- Campaign management.
- Redemption approval.
- Partner settlement.
- Fraud monitoring.
- Audit reports.
- Tax/compliance exports.

### 6.4 Partner Console

Features:

- Partner profile and agreement upload.
- Offer listing.
- Redemption request verification.
- Settlement report.
- Dispute workflow.

## 7. Phased Roadmap

### Phase 1: Website and Closed-Loop Loyalty MVP

Goal: launch safely and build trust.

Scope:

- Premium public website.
- Client registration and profile.
- Admin-controlled reward ledger.
- Base rule: Rs 1 reward value per Rs 1,000 eligible spend.
- Manual or CSV invoice upload.
- Coin balance and transaction statement.
- Redemption against SCG services only.
- Terms, privacy, risk disclosure, reward policy.

### Phase 2: Automated Operations

Goal: reduce manual work and improve auditability.

Scope:

- Payment gateway/accounting integration.
- Automated reward calculation.
- KYC workflow.
- Lead scoring and CRM integration.
- Referral tracking.
- Email/SMS/WhatsApp notifications.
- Partner offer catalog.
- Analytics dashboard.

### Phase 3: Marketplace and Partner Utility

Goal: make coins useful across the ecosystem.

Scope:

- Partner merchant onboarding.
- Service credits, training credits, document packages, agri input credits.
- Dealer incentive scheme.
- Campaign-specific multipliers.
- Settlement rules.
- Expiry and breakage reporting.

### Phase 4: Controlled Transfer and Encashment

Goal: enable economic utility under compliance controls.

Scope:

- Transfer between verified users.
- Encashment request workflow.
- Limits, lock periods, risk scoring.
- Tax documentation.
- AML and suspicious activity monitoring.
- Legal review for VDA, prepaid instrument, securities, and payment implications.

### Phase 5: Tokenization Readiness

Goal: prepare for blockchain or regulated token rails only if viable.

Scope:

- Token legal opinion.
- Tokenomics and treasury policy.
- FIU-IND / AML assessment if VDA service provider activities are involved.
- Smart contract audit.
- Custody model.
- Exchange / wallet / partner integration review.
- Public token disclosure documents.

## 8. Tokenomics Baseline

Initial accounting model:

- Unit: 1 SHIVACOIN loyalty unit.
- Base issue value: Rs 1 equivalent reward value per Rs 1,000 eligible spend.
- Redemption floor: admin-defined, generally service credit value.
- Transferability: disabled at launch, enabled only after verification and compliance review.
- Expiry: optional, recommended 24-36 months for loyalty accounting.
- Locking: pending coins locked until payment is settled.
- Reversal: coins reversed on refund, chargeback or invoice cancellation.

Treasury model:

- Reward liability should be tracked separately from marketing budget.
- Reserve policy should be defined for encashment and partner settlement.
- Breakage, expiry, forfeiture and liability accounting should be reviewed by a chartered accountant.

## 9. Business Logic

Reward calculation:

```text
eligible_spend = paid_invoice_amount - taxes_excluded_if_policy_requires - discounts - refunds
base_coin_value = floor(eligible_spend / 1000) * 1
coin_units = base_coin_value / current_internal_coin_value
```

Recommended MVP simplification:

```text
Rs 1 eligible reward value = 1 SHIVACOIN
Rs 1,000 eligible spend = 1 SHIVACOIN
```

Example:

| Eligible spend | Coins earned | Initial reward value |
| ---: | ---: | ---: |
| Rs 1,000 | 1 | Rs 1 |
| Rs 10,000 | 10 | Rs 10 |
| Rs 1,00,000 | 100 | Rs 100 |
| Rs 10,00,000 | 1,000 | Rs 1,000 |

## 10. Compliance Guardrails

Required before public launch:

- Clear reward terms and conditions.
- Privacy policy and consent for KYC/profile data.
- No guaranteed return language.
- No public promise of 20X-100X appreciation.
- Defined redemption rules and expiry.
- Fraud, refund and reversal policy.
- Accounting treatment for reward liability.
- Legal opinion before transfer, encashment or exchange listing.

India-specific risk areas to review with counsel:

- Virtual Digital Asset treatment.
- Income tax and TDS implications if transfer/encashment creates VDA events.
- FIU-IND AML/CFT obligations if the platform performs VDA exchange, transfer, safekeeping or related activities.
- RBI/payment system and prepaid instrument implications if stored value can be widely redeemed or encashed.
- Consumer protection and advertising rules around reward claims.
- Securities or collective investment risk if upside is marketed as investment return.

## 11. Success Metrics

| Metric | Target direction |
| --- | --- |
| Verified profiles | Growth across MSME, farmer, dealer and enterprise segments |
| Eligible spend linked | Increasing month over month |
| Reward issuance accuracy | 99%+ after automation |
| Redemption rate | Healthy usage without liability stress |
| Partner acceptance | More useful redemption options |
| Lead conversion | Inquiry to paid engagement improvement |
| Repeat purchase frequency | Higher than non-member clients |
| Compliance exceptions | Low and documented |

## 12. Immediate Build Sequence

1. Approve product name, positioning and risk language.
2. Create public website with reward calculator and inquiry capture.
3. Build profile registration and admin ledger MVP.
4. Define reward terms, privacy policy and accounting treatment.
5. Add invoice upload and reward approval workflow.
6. Pilot with internal SCG services and selected clients.
7. Add Drishti Bio farmer/dealer reward flow.
8. Add partner redemption and settlement.
9. Commission legal review for transfer/encashment.
10. Decide whether blockchain tokenization is commercially and legally justified.

