export type SiteConfig = {
  name: string;
  canonicalUrl: string;
  email: string;
  bookingUrl?: string;
  socialLinks: ReadonlyArray<{ label: string; href: string }>;
};

export type ServiceId = "ai-agents" | "automation" | "ai-saas";

export type Service = {
  id: ServiceId;
  index: string;
  title: string;
  shortTitle: string;
  description: string;
  useCases: ReadonlyArray<string>;
  ctaSubject: string;
};

export type PriceTier = {
  serviceId: ServiceId;
  name: string;
  qualifier: "from";
  price: string;
  priceValue: number;
  description: string;
  inclusions: ReadonlyArray<string>;
  disclaimer: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const siteConfig: SiteConfig = {
  name: "SkyMavan",
  canonicalUrl: "https://skymavan.com/",
  email: "hello@skymavan.com",
  bookingUrl: undefined,
  socialLinks: [],
};

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const serviceIds = ["ai-agents", "automation", "ai-saas"] as const;

export const services: ReadonlyArray<Service> = [
  {
    id: "ai-agents",
    index: "01",
    title: "Custom AI agents",
    shortTitle: "AI Agents",
    description:
      "Purpose-built agents that research, reason, draft, qualify, and coordinate work across the tools your team already uses—with the right human checkpoints built in.",
    useCases: [
      "Research and knowledge assistants",
      "Lead qualification and sales support",
      "Customer operations copilots",
      "Internal decision-support workflows",
    ],
    ctaSubject: "AI Agents",
  },
  {
    id: "automation",
    index: "02",
    title: "Workflow automation & integrations",
    shortTitle: "Automation",
    description:
      "Reliable AI-enabled workflows that connect fragmented systems, remove manual handoffs, and surface exceptions to the right person instead of hiding them in another queue.",
    useCases: [
      "Multi-step operational workflows",
      "Data extraction and enrichment",
      "Approval and exception routing",
      "Legacy platform AI enablement",
    ],
    ctaSubject: "Automation",
  },
  {
    id: "ai-saas",
    index: "03",
    title: "AI SaaS & product engineering",
    shortTitle: "AI SaaS",
    description:
      "From first architecture to a launch-ready product, we build focused AI applications with dependable interfaces, model flexibility, observability, and room to evolve.",
    useCases: [
      "AI-native product MVPs",
      "RAG and knowledge products",
      "Multi-tenant SaaS applications",
      "AI features for existing products",
    ],
    ctaSubject: "AI SaaS",
  },
];

export const operatingPrinciples = [
  {
    title: "Humans stay in control",
    description:
      "Approval gates, escalation paths, and clear ownership are designed into the workflow from the beginning.",
  },
  {
    title: "Every run is observable",
    description:
      "Inputs, tool calls, outputs, and exceptions remain inspectable so your team can improve the system with evidence.",
  },
  {
    title: "Models remain replaceable",
    description:
      "We choose models for the job and keep system boundaries clear, reducing unnecessary dependence on a single provider.",
  },
  {
    title: "Integration is product work",
    description:
      "The final mile into your CRM, knowledge base, inbox, or internal platform receives the same care as the AI layer.",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Discover",
    description:
      "Map the workflow, decisions, systems, and failure conditions worth solving.",
  },
  {
    index: "02",
    title: "Prototype",
    description:
      "Test the riskiest assumptions with a focused, observable working slice.",
  },
  {
    index: "03",
    title: "Build",
    description:
      "Engineer the product, integrations, guardrails, and operating interface.",
  },
  {
    index: "04",
    title: "Optimize",
    description:
      "Measure real use, tune quality and cost, and expand only where the evidence points.",
  },
] as const;

const pricingDisclaimer =
  "Starting price. Final scope and investment are confirmed after discovery.";

export const priceTiers: ReadonlyArray<PriceTier> = [
  {
    serviceId: "ai-agents",
    name: "AI Agent Build",
    qualifier: "from",
    price: "$3,500",
    priceValue: 3500,
    description:
      "A focused agent for one valuable workflow, with tools, guardrails, and a usable team interface.",
    inclusions: [
      "Workflow and tool mapping",
      "Agent implementation",
      "Human approval path",
      "Deployment and handoff",
    ],
    disclaimer: pricingDisclaimer,
  },
  {
    serviceId: "automation",
    name: "Automation Sprint",
    qualifier: "from",
    price: "$5,000",
    priceValue: 5000,
    description:
      "An end-to-end automation for a multi-step process spanning your existing systems.",
    inclusions: [
      "Process architecture",
      "API and data integrations",
      "Exception and approval routing",
      "Monitoring and documentation",
    ],
    disclaimer: pricingDisclaimer,
  },
  {
    serviceId: "ai-saas",
    name: "AI SaaS MVP",
    qualifier: "from",
    price: "$10,000",
    priceValue: 10000,
    description:
      "A launch-ready first product with a clear user journey, dependable AI layer, and scalable foundation.",
    inclusions: [
      "Product and system design",
      "Application development",
      "AI and data architecture",
      "Production deployment",
    ],
    disclaimer: pricingDisclaimer,
  },
];

export const faqItems: ReadonlyArray<FaqItem> = [
  {
    id: "agent-automation",
    question: "What can an AI agent automate?",
    answer:
      "An AI agent can handle workflows that combine information gathering, judgment, drafting, tool use, and handoffs. Good candidates include research briefs, lead qualification, customer operations, internal support, and document-heavy processes. SkyMavan defines clear boundaries and human approvals so the agent assists the business without becoming an unaccountable black box.",
  },
  {
    id: "custom-ai-cost",
    question: "How much does custom AI development cost?",
    answer:
      "SkyMavan engagements start at $3,500 for a focused AI agent, $5,000 for an automation sprint, and $10,000 for an AI SaaS MVP. These are starting prices rather than fixed quotes. Final investment depends on workflow complexity, integrations, data readiness, interface requirements, and the level of production support confirmed during discovery.",
  },
  {
    id: "existing-tools",
    question: "Can SkyMavan integrate with our current tools?",
    answer:
      "Yes. Integration is treated as core product work rather than an afterthought. SkyMavan can connect AI workflows with existing APIs, CRMs, databases, knowledge systems, communication tools, and internal platforms. Discovery identifies authentication, data ownership, rate limits, failure behavior, and human escalation requirements before the final architecture is committed.",
  },
  {
    id: "human-control",
    question: "How do you keep humans in control?",
    answer:
      "SkyMavan designs explicit approval gates, confidence thresholds, audit trails, escalation paths, and permission boundaries around each workflow. The system shows what it received, which tools it used, what it produced, and where a person must decide. This makes automation easier to supervise, improve, and trust in day-to-day operations.",
  },
  {
    id: "post-launch-support",
    question: "Do you provide support after launch?",
    answer:
      "Ongoing optimization can be included after the initial build. Support is scoped around real operating needs such as quality review, prompt and model tuning, cost monitoring, new integrations, incident response, and feature expansion. The handoff always includes documentation and ownership clarity, whether SkyMavan continues operating the system or your internal team takes over.",
  },
];
