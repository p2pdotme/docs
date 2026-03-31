# For Community

## Start Here

The P2P Foundation Ambassador Program ("The Liberation Network") is a community-driven network that spreads financial sovereignty tools across emerging markets. It operates through country-level teams organized into four specialized tracks.

**Quick links to key sections.**

- [Manifesto](/for-community/cypherpunk-20-manifesto)
- [Hierarchy and roles](/for-community/hierarchy)
- [Four tracks](/for-community/four-tracks)
- [How to join](/for-community/how-to-join)
- [Weekly updates and offboarding](/for-community/weekly-updates-and-offboarding)
- [Remuneration](/for-community/remuneration)
- [Brand kit](/for-community/brand-kit)
- [FAQ](/for-community/faq)

Also see [`/whitepaper`](/whitepaper/abstract) for protocol context and [`/for-token-holders`](/for-token-holders/start-here) for the token thesis.

---

## Cypherpunk 2.0 Manifesto

Privacy is necessary for an open society in the electronic age. We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy out of their beneficence.

We the cypherpunks are dedicated to building anonymous systems. We are defending our privacy with cryptography, with anonymous mail forwarding systems, with digital signatures, and with electronic money.

**"The Liberation Network" exists to enable the following.**

- Financial sovereignty without surveillance
- Peer-to-peer systems that resist censorship
- Individuals transacting freely across borders
- Spreading the tools and knowledge of financial liberation

Participation requires no identity. Contribution requires no permission. Impact is measured by action, not affiliation.

---

## Hierarchy

| Level | Role | Code Name |
|-------|------|-----------|
| Core Team | Protocol founders and leads | "Core Team" |
| Country Lead | Manages all tracks in a country | "Country Lead" |
| Coordinator | Track coordinators | "Keymaster" |
| Contributor | Community ambassadors | "Cipher" |

```mermaid
flowchart TD
    CT["1. Core Team"]
    
    subgraph india [India]
        CL_IN["2. Country Lead"]
        KM_IN_Relay["3. Keymaster - Relay Guild"]
        KM_IN_Node["3. Keymaster - Node Guild"]
        KM_IN_Signal["3. Keymaster - Signal Guild"]
        KM_IN_Forge["3. Keymaster - Forge Guild"]
        CL_IN --> KM_IN_Relay
        CL_IN --> KM_IN_Node
        CL_IN --> KM_IN_Signal
        CL_IN --> KM_IN_Forge
    end
    
    subgraph brazil [Brazil]
        CL_BR["2. Country Lead"]
        KM_BR["3. Keymasters..."]
        CL_BR --> KM_BR
    end
    
    subgraph other [Other Countries...]
        CL_X["2. Country Lead"]
        KM_X["3. Keymasters..."]
        CL_X --> KM_X
    end
    
    CT --> CL_IN
    CT --> CL_BR
    CT --> CL_X
```

Each "Keymaster" manages up to 5 "Ciphers".

### Country Lead Responsibilities

Each "Country Lead" manages all four tracks in their country.

| Code Name | Scope |
|-----------|-------|
| **Relay Guild** | Country Discord/Telegram channels |
| **Node Guild** | Colleges and local events |
| **Signal Guild** | Regional social media (local language content) |
| **Forge Guild** | Translations, local dev community |

---

## Four Tracks

| Code Name | Focus | SLA Metric |
|-----------|-------|------------|
| **Relay Guild** | Discord/Telegram moderation, user support | Users/merchants onboarded |
| **Node Guild** | Colleges, local events, meetups | Users/merchants onboarded |
| **Signal Guild** | Social media content, regional accounts | Impressions |
| **Forge Guild** | Translations, docs, dev community | Commits/pages |

All tracks operate at the country level, managed by "Country Leads".

---

## How to Join

**Becoming a Candidate.** Anyone can become a Candidate by joining [Discord](https://discord.gg/p2pfoundation). No XP requirement.

**Candidate to "Cipher" requirements.**

1. Earn minimum 500 XP through P2P Protocol apps usage (eg. P2P.me and Coins.me) and social activity
2. Attend a mandatory induction session (held on 1st and 3rd Sunday of every month, conducted by "Country Lead")
3. Browse open roles posted by "Keymasters" in your track/country (Eg. #forge-portal, #signal-portal, #node-portal, #relay-portal)
4. Apply via Discord ticket in your portal
5. Pass interview with "Keymaster"
6. Upon approval, become a "Cipher" with role and channel access

---

## Weekly Updates and Offboarding

All "Ciphers" and "Keymasters" must submit weekly updates.

| Role | Reports To | Deadline |
|------|------------|----------|
| "Cipher" | "Keymaster" | Saturday 00:00 to Sunday 24:00 UTC |
| "Keymaster" | "Country Lead" | Saturday 00:00 to Sunday 24:00 UTC |
| "Country Lead" | "Core Team" | Saturday 00:00 to Sunday 24:00 UTC |

**Auto-offboarding:** 
- Missing 1 consecutive update triggers a warning DM. 
- Missing 2 consecutive updates results in role removal and move to @Alumni. Alumni can re-apply through the normal process.

---

## Remuneration

| Role | Monthly Salary |
|------|----------------|
| "Keymaster" | $200 |
| "Cipher" | Up to $100 (based on job assigned) |

**Monthly Spotlight.** $500 x 3 = $1,500 monthly prize pool.

All payments made directly to your P2P wallet.

| Item | Count | Rate | Total |
|------|-------|------|-------|
| Keymasters (4 countries x 4 tracks) | 16 | $200 | $3,200 |
| Ciphers (16 x 5) | 80 | Up to $100 | $8,000 (max) |
| Monthly Spotlight | 3 | $500 | $1,500 |
| **Total monthly spend** | | | **$12,700 (max)** |

**Fund approval flow.** "Keymaster" raises request, "Country Lead" reviews, "Core Team" approves, disbursement.

---

## Discord Structure

```
THE LIBERATION NETWORK
├── #start-here → Onboarding for candidates
├── #select-guild → Guild selection panel (Eg. Relay, Node, Signal, Forge)
├── #forge-portal → Forge job postings
├── #signal-portal → Signal job postings
├── #node-portal → Node job postings
├── #relay-portal → Relay job postings
│
├── #forge-guild → Forge Cipher workspace
├── #signal-guild → Signal Cipher workspace
├── #node-guild → Node Cipher workspace
├── #relay-guild → Relay Cipher workspace
├── #keymasters → Keymaster workspace
│
├── #tln-argentina → Regional community & coordination
├── #tln-brazil → Regional community & coordination
├── #tln-indonesia → Regional community & coordination
├── #tln-india → Regional community & coordination
│
├── #country-leads → Country Lead workspace
│
├── SYNC CHANNELS
│   ├── 🔊 keymasters-sync
│   ├── 🔊 ciphers-sync
│   └── 🔊 candidates-sync
```

---

## Principles

- **Anonymous-first.** No doxxing required at any level
- **Country-led.** Each country manages all tracks locally
- **Human selection.** "Country Leads" and "Keymasters" evaluate, not algorithms
- **Sustainable ratio.** 1 "Keymaster" per 5 "Ciphers" max
- **Cypherpunk ethos.** Privacy, decentralization, financial sovereignty

---

## Brand Kit

Official P2P Protocol logo assets for press, partners, and community use.

### Square Logo

<div style={{textAlign: 'center', padding: '2rem', background: '#1a1a2e', borderRadius: '12px', marginBottom: '2rem'}}>
  <img src="/brand/square.png" alt="P2P Protocol logo" width="120" />
</div>

[Download PNG](/brand/square.png)

### Logo Variants

#### Dark Theme

For use on dark backgrounds.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem'}}>
  <div style={{textAlign: 'center', padding: '1.5rem', background: '#1a1a2e', borderRadius: '8px'}}>
    <img src="/brand/dark.svg" alt="Color logo (dark)" width="180" />
    <p style={{margin: '0.5rem 0 0', fontSize: '0.85rem', opacity: 0.7}}>Color</p>
  </div>
  <div style={{textAlign: 'center', padding: '1.5rem', background: '#1a1a2e', borderRadius: '8px'}}>
    <img src="/brand/dark-grayscale.svg" alt="Grayscale logo (dark)" width="180" />
    <p style={{margin: '0.5rem 0 0', fontSize: '0.85rem', opacity: 0.7}}>Grayscale</p>
  </div>
  <div style={{textAlign: 'center', padding: '1.5rem', background: '#1a1a2e', borderRadius: '8px'}}>
    <img src="/brand/dark-bw.svg" alt="Black and white logo (dark)" width="180" />
    <p style={{margin: '0.5rem 0 0', fontSize: '0.85rem', opacity: 0.7}}>Black & White</p>
  </div>
</div>

| Variant | SVG | PNG |
|---------|-----|-----|
| Color | [dark.svg](/brand/dark.svg) | [dark.png](/brand/dark.png) |
| Grayscale | [dark-grayscale.svg](/brand/dark-grayscale.svg) | [dark-grayscale.png](/brand/dark-grayscale.png) |
| Black & White | [dark-bw.svg](/brand/dark-bw.svg) | [dark-bw.png](/brand/dark-bw.png) |

#### Light Theme

For use on light backgrounds.

<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem'}}>
  <div style={{textAlign: 'center', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px'}}>
    <img src="/brand/light.svg" alt="Color logo (light)" width="180" />
    <p style={{margin: '0.5rem 0 0', fontSize: '0.85rem', opacity: 0.7}}>Color</p>
  </div>
  <div style={{textAlign: 'center', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px'}}>
    <img src="/brand/light-grayscale.svg" alt="Grayscale logo (light)" width="180" />
    <p style={{margin: '0.5rem 0 0', fontSize: '0.85rem', opacity: 0.7}}>Grayscale</p>
  </div>
  <div style={{textAlign: 'center', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px'}}>
    <img src="/brand/light-bw.svg" alt="Black and white logo (light)" width="180" />
    <p style={{margin: '0.5rem 0 0', fontSize: '0.85rem', opacity: 0.7}}>Black & White</p>
  </div>
</div>

| Variant | SVG | PNG |
|---------|-----|-----|
| Color | [light.svg](/brand/light.svg) | [light.png](/brand/light.png) |
| Grayscale | [light-grayscale.svg](/brand/light-grayscale.svg) | [light-grayscale.png](/brand/light-grayscale.png) |
| Black & White | [light-bw.svg](/brand/light-bw.svg) | [light-bw.png](/brand/light-bw.png) |

### Usage Guidelines

- Use the **dark theme** logos on dark backgrounds and the **light theme** logos on light backgrounds.
- Prefer **SVG** for web and digital use. Use **PNG** when SVG is not supported.
- Do not stretch, rotate, recolor, or add effects to the logo.
- Maintain clear space around the logo equal to at least the height of the logomark.

---

## FAQ

### Why is the token on Solana if the protocol is on Base?

The token launches on Solana to build community and network effects ahead of deploying the protocol there. Solana is the planned hub chain. The protocol is live on Base today and will expand to Solana next.

### Do I need to reveal my identity to participate?

No. The program is anonymous-first at every level.

### What is XP and how do I earn it?

XP is earned through Protocol app usage (eg. P2P.me and Coins.me) and social activity. You need 500 XP to be eligible for a "Cipher" role.

### What happens if I miss a weekly update?

One missed update triggers a warning. Two consecutive missed updates result in automatic role removal. You can re-apply through the normal process.

### Can I participate from any country?

You can join Discord from anywhere. Active tracks depend on which countries have appointed Country Leads.

### How are payments made?

All payments go directly to your P2P wallet.
