# ACE — AI 101 for Operators

*Advise · Coach · Execute*

**v2 — May 2026** · Updated post-Roy session (Apr 25)

---

# Enough to be dangerous.

A literacy session for leadership teams and broad orgs that need to make AI decisions without becoming AI experts. The goal is not to teach machine learning — it's to give operators enough working knowledge to participate in their own AI conversations, evaluate vendors honestly, and avoid the most expensive mistakes.

## How This Content Gets Used — Two Modes

> **Roy's principle:** Beginning of any session, AI level-set — get everyone on the same vocabulary before going strategic.

This material plays two roles in the ACE engagement model. Same content, different delivery contexts:

| Mode | Context | Length | Audience |
| --- | --- | --- | --- |
| **Standalone AI 101** | One-time engagement or annual refresh; broad org training | 75 min full session | Anyone in the org who'll touch AI in their work |
| **Embedded AI Level-Set** | Opening 5 minutes of every Strategic or Execution Session | 5 min refresh, rotating topic | Leadership / department heads |

Both matter. The standalone version creates baseline literacy across the org. The embedded version keeps that literacy current — AI moves fast and vocabulary drifts faster than people realize.

## Purpose

Most leaders don't need a primer on transformer architectures. They need to know:

- What AI actually is — and what marketers want them to think it is
- Where it works, where it doesn't, and how to tell the difference
- What it costs and how those costs scale
- What the real security and privacy risks look like
- How to evaluate a vendor pitch without needing a translator

By the end, every leader on the team can sit in a vendor meeting and ask the questions that matter — and recognize when the answers are nonsense.

> **The shape of it:** 75 minutes. Plain language. No jargon, no hype, no doom. Real examples from operator-led businesses, not Silicon Valley case studies.

## Who This Is For

- Owner-operators making first-time AI decisions
- Leadership teams sitting through their first AI vendor pitches
- Department leaders being asked to "implement AI" without context
- Anyone who has nodded along to an AI conversation while feeling underwater

## The Session — 75 Minutes

### Segment 01 · What AI Actually Is (10 min)

The plain-English definition: AI is software that finds patterns in large amounts of data and uses those patterns to make predictions, generate content, or suggest decisions. That's it.

- **What it's good at:** recognizing patterns, generating text or images, summarizing, classifying, drafting
- **What it's bad at:** novel reasoning, common sense in unfamiliar contexts, reliable accuracy on specific facts, understanding nuance
- **The two main flavors operators encounter:** generative AI (ChatGPT, Claude, image generators — produces new content) and predictive AI (forecasts, classifications, anomaly detection — makes calls about future or unseen data)

The most useful mental model: *AI is an extremely fast, surprisingly capable, occasionally confidently wrong intern.* Treat it like one.

### Segment 02 · The Model Landscape (10 min)

Operators don't need to memorize models, but they do need to understand the categories so vendor pitches stop sounding like alphabet soup.

- **The big three model families:** OpenAI (GPT, ChatGPT), Anthropic (Claude), Google (Gemini). Most consumer and business AI runs on one of these underneath.
- **Open vs. closed:** Open models (Llama, Mistral) can run on your own hardware. Closed models (the big three) run on vendor cloud. Cost, privacy, and capability tradeoffs differ.
- **"AI features" vs. "AI products":** Most "AI" you'll be pitched is actually a thin wrapper around one of the big three. Knowing this changes how you negotiate and switch vendors.

The key takeaway: a vendor saying *"our proprietary AI"* almost always means *"we're paying OpenAI or Anthropic per query and marking it up."* That's not necessarily bad — but it changes how you should think about lock-in and pricing.

### Segment 03 · Where AI Works and Where It Doesn't (15 min)

The single most useful framework for an operator: **rules vs. data vs. judgment.**

- **Rules problems** (if X then Y) → write rules, no AI needed
- **Data lookup problems** (what's the number?) → use a dashboard or report
- **Judgment-at-scale problems** (this needs human-like assessment, but you have too many to assess) → AI candidate

#### Real-world examples that pass the filter

Four AI candidates worth bringing forward in any leadership team's Issues list:

- **Proposal generation.** First drafts of sales proposals or RFP responses. Judgment at scale. Human review required. High volume, low individual stakes per draft.
- **Customer feedback collection & synthesis.** Pulling themes from open-ended feedback, support tickets, NPS comments. Volume too high for human reading; pattern recognition fits.
- **Employee feedback / pulse surveys.** Same shape — synthesizing free-text responses into themes a leader can act on.
- **Market data gathering.** Competitor monitoring, industry signal collection, summarizing news flows. Human still verifies; AI does the gathering.

These aren't the only candidates — they're the safest starting points. They're high-volume, low-stakes-per-output, and have clear actions on the back end.

#### Where AI does NOT fit

- *Calculating monthly revenue* — data lookup, no AI needed
- *Approving expense reports under $500* — rules problem, no AI needed
- *Diagnosing emergency equipment failures* — high-stakes judgment, AI does NOT fit (yet)
- *Customer-facing autonomous responses on sensitive issues* — customer trust at stake, keep humans in the loop

The other axis: **cost of being wrong.** AI is great when the cost of an occasional wrong answer is low and you have a human in the loop for the high-stakes calls. AI is dangerous when the wrong answer destroys customer trust, breaks compliance, or causes physical harm.

### Segment 04 · The Cost Picture (10 min)

Operators get burned because AI cost models are different from software cost models.

- **Most AI is priced by usage** — per query, per token, per image. Costs scale with adoption, not seat count.
- **The hidden cost:** "Just try it!" pilots become $2,000/month bills when usage takes off without anyone watching. Always set burn caps.
- **The "good enough" rule:** the cheapest viable model for the job, not the smartest available. Haiku and GPT-4o-mini handle 80% of operator use cases for a fraction of the cost.
- **Vendor markup is real:** a SaaS company charging $200/seat for "AI-powered X" might be paying the underlying model $0.20 per user per month. Knowing this changes the negotiation.

The rule of thumb for SMBs: *if a pilot is costing more than $500/month to run, something is probably wrong with the design.*

### Segment 05 · Security & Privacy — The Real Risks (10 min)

The actual security risk for an operator-led company isn't a sci-fi hack. It's much more boring and much more likely:

- **Shadow AI** — employees using personal ChatGPT, Claude, or Copilot accounts for work. Customer data goes into consumer tools that train on it. This is the #1 risk in SMBs right now.
- **Consumer vs. business tier matters.** Business accounts (ChatGPT Team, Claude for Work, Copilot Business) come with data retention controls and don't train on your inputs. Consumer accounts often do.
- **Vendor due diligence basics:** SOC 2 certification, where they store data, who has access, what they do with your inputs.
- **What never goes into AI tools:** customer PII, social security numbers, credit cards, protected health information, contracts under NDA.

The fix is rarely complicated. Most of the time it's: *get everyone on a business-tier account, run a 15-minute training, write a one-page acceptable-use policy.* Done.

### Segment 06 · How to Evaluate a Vendor Pitch (15 min)

The four-question filter, applied to every AI pitch that lands on your desk:

1. **Is this a rules, data, or judgment problem?** If they're selling AI for a rules or data problem, they're overselling.
2. **Do we have the data to support it?** Most AI pilots fail not because of the AI — because the data infrastructure underneath isn't there.
3. **What's the cost of being wrong?** Where would we never accept an AI making the call? Make that explicit before signing.
4. **What would we do with the answer?** If the output doesn't trigger a clear action, it's noise — even if it's accurate noise.

**Vendor red flags to listen for:**

- Can't explain in plain language what the AI is doing
- Won't give a concrete example for your industry
- Promises "fully autonomous" anything customer-facing
- Won't disclose which underlying model they're using
- Pricing scales with seats but they can't explain why
- "Our AI is proprietary, we can't share details"
- No clear answer to "what happens when the AI is wrong?"

**Vendor green flags:**

- Specific use case with measurable outcome
- Honest about what AI is and isn't doing
- Clear human-in-the-loop story
- Shows you the cost model upfront
- Has at least one customer in your industry willing to take a reference call
- Has a clear path to turn the AI off without breaking the workflow

### Segment 07 · Common SMB Mistakes (5 min)

- **Buying everything.** Every department wanting their own AI tool. Consolidate or you'll have ten subscriptions and zero integration.
- **Buying nothing.** Defensive paralysis. The cost of doing nothing is real — competitors will eat the gap.
- **Treating AI like software.** AI projects need ongoing care, not set-and-forget deployment. Models drift, costs creep, workflows change.
- **Skipping the data conversation.** "We'll use AI to fix our reporting." The reporting is broken because the data is broken. AI doesn't fix that — it amplifies it.
- **Hiring the wrong help.** The intern who likes AI is not your AI strategy. Neither is the agency selling you a platform.
- **Not making AI work a Rock.** Anything not framed as a Rock gets forgotten or deprioritized — see segment 8.

### Segment 08 · What To Do Next (5 min)

Four actions for the leadership team to take in the next 30 days:

1. **Audit shadow AI.** Ask every leader: where in your team's workflow has AI quietly shown up? Make a list. No judgment — just visibility.
2. **Pick one workflow to filter.** Take one current process where someone is suggesting AI. Run it through the four questions. Decide: rules, data, judgment, or skip.
3. **Set the policy floor.** Get everyone onto business-tier accounts. Write a one-page acceptable-use policy. 15-minute training at the next all-hands.
4. **Make AI a Rock — or don't do AI at all.** If a candidate makes it through the filter, scope it as a Rock with an owner, budget, kill criterion, and 90-day done definition. Initiatives that aren't Rocks get forgotten. Rocks ship.

That's it. Four actions. Most operators don't need an AI strategy in their first 30 days — they need basic AI hygiene and the discipline to put real work on the Rock board.

## Materials

Each attendee leaves with:

- One-page summary of the four-question filter
- The vendor red-flag / green-flag checklist
- Sample acceptable-use policy template
- Glossary of AI terms in plain English
- Issues-list AI candidates worksheet (the four safe starters with prompt questions)

## Format Options

- **Standalone 75-minute session** — most common, leadership team or broad org together, on-site or virtual
- **Two 45-minute sessions** — for teams that prefer split delivery, segments 1–4 then 5–8
- **Self-paced video + live Q&A** — recorded version for distributed teams, with a 30-minute live follow-up
- **Embedded AI Level-Set** — 5-minute opener at the top of every Strategic or Execution Session, rotating which segment topic gets refreshed

## Notes for Andrew

- Know the audience before the session. An HVAC owner and a SaaS exec need different examples in segments 3 and 6.
- The biggest "aha" moments tend to land in segment 5 (security) and segment 6 (vendor evaluation). Lean on those.
- If a leader pushes back on the "rules vs. data vs. judgment" framework as too simple, that's a signal — they're invested in AI being more mystical than it is. Stay simple anyway.
- End with the four-action close — including the Rocks rule. Operators leave AI sessions feeling overwhelmed. The four-action close is what they'll actually remember.
- For the embedded 5-minute Level-Set: rotate which segment topic gets the refresh each month. Over a year, the team cycles through the full content twice.

---

*ACE · Advise · Coach · Execute · Columbus, OH · 2026*
