export type SiteConfig = {
  name: string;
  canonicalUrl: string;
  email: string;
  bookingUrl?: string;
  socialLinks: ReadonlyArray<{ label: string; href: string; icon: "linkedin" | "instagram" | "x" }>;
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

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const siteConfig: SiteConfig = {
  name: "Skymavan",
  canonicalUrl: "https://skymavan.com/",
  email: "hello@skymavan.com",
  bookingUrl: "https://zbooking.in/Drh23",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sky-mavan-0699ab421/",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/skymavanai",
      icon: "instagram",
    },
    {
      label: "X",
      href: "https://x.com/Skymavanai",
      icon: "x",
    },
  ],
};

export const navigation = [
  { label: "Services", href: "#services" },
  { label: "Why Skymavan", href: "#why-skymavan" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
] as const;

export const serviceIds = ["ai-agents", "automation", "ai-saas"] as const;

export const services: ReadonlyArray<Service> = [
  {
    id: "ai-agents",
    index: "01",
    title: "AI agents that work alongside your team",
    shortTitle: "AI Agents",
    description:
      "Most teams spend hours on tasks that follow clear patterns: researching prospects, summarizing conversations, drafting reports, triaging support tickets. We build purpose-driven AI agents that handle these workflows autonomously, with human approval at every decision point. The result is a digital teammate that handles the repetitive work so your team can focus on what requires judgment.",
    useCases: [
      "Research assistants that gather and summarize market intelligence",
      "Operations assistants that triage and route internal requests",
      "Sales support agents that qualify leads and prepare briefs",
      "Executive reporting agents that compile weekly summaries",
      "Customer support copilots that resolve common issues",
    ],
    ctaSubject: "AI Agents",
  },
  {
    id: "automation",
    index: "02",
    title: "Workflow automation that connects your stack",
    shortTitle: "Automation",
    description:
      "Your business runs on CRM, ERP, Slack, email, databases, and internal tools. The friction lives in the handoffs between them. We build AI-powered automation that connects these systems, removes manual data entry, routes approvals to the right person, and surfaces exceptions before they become problems. Human oversight is built into every critical path.",
    useCases: [
      "CRM and ERP data synchronization and enrichment",
      "Multi-step approval workflows with human-in-the-loop gates",
      "Slack and email based request triage and response",
      "Database reporting and alert automation",
      "Legacy system integration and API enablement",
    ],
    ctaSubject: "Automation",
  },
  {
    id: "ai-saas",
    index: "03",
    title: "AI product engineering for production systems",
    shortTitle: "AI SaaS",
    description:
      "From concept to deployment, we engineer AI-powered products that meet enterprise standards. Whether you need a multi-tenant SaaS platform, an internal knowledge system, or an AI feature for an existing product, we design for scalability, observability, and long-term maintainability. Every system is built with model flexibility so you are never locked into a single provider.",
    useCases: [
      "AI-native SaaS MVPs ready for production users",
      "Knowledge retrieval and RAG systems for internal teams",
      "Enterprise AI platforms with role-based access and audit trails",
      "AI features integrated into existing products",
      "Custom internal tools and operational dashboards",
    ],
    ctaSubject: "AI SaaS",
  },
];

export const whySkymavan = [
  {
    title: "Custom engineering, not templates",
    description:
      "Every system we build is designed for your specific workflows, data, and constraints. We do not repurpose generic chatbots or copy-paste solutions.",
  },
  {
    title: "Human oversight by default",
    description:
      "Approval gates, confidence thresholds, and escalation paths are engineered into every workflow. Automation should make teams more capable, not less informed.",
  },
  {
    title: "Secure by architecture",
    description:
      "We treat data security as a design constraint, not a checklist. Authentication, authorization, encryption, and audit trails are part of every system from day one.",
  },
  {
    title: "Built to evolve",
    description:
      "Models change. Requirements shift. We design modular systems with clear boundaries so you can swap models, add integrations, and scale without rebuilding from scratch.",
  },
  {
    title: "Long-term partnership",
    description:
      "We stay engaged after launch. Ongoing monitoring, optimization, and support ensure your systems continue to deliver value as your business grows.",
  },
] as const;

export const industries = [
  {
    title: "Healthcare",
    description:
      "Automate patient intake, appointment scheduling, clinical documentation, and compliance reporting while maintaining HIPAA safeguards.",
  },
  {
    title: "Finance",
    description:
      "Streamline loan processing, fraud detection alerts, regulatory reporting, and client onboarding with auditable AI workflows.",
  },
  {
    title: "Manufacturing",
    description:
      "Connect supply chain data, automate quality control reports, and surface production anomalies before they cause downtime.",
  },
  {
    title: "SaaS",
    description:
      "Embed AI features into your product, automate customer onboarding, and build internal tools that reduce operational overhead.",
  },
  {
    title: "Education",
    description:
      "Automate admissions processing, personalize learning pathways, and build knowledge systems that make institutional expertise accessible.",
  },
  {
    title: "Real Estate",
    description:
      "Automate property listing generation, lead qualification, document processing, and portfolio reporting across multiple systems.",
  },
  {
    title: "Logistics",
    description:
      "Optimize route planning, automate shipment tracking updates, and surface delivery exceptions to the right team in real time.",
  },
  {
    title: "Professional Services",
    description:
      "Reduce time spent on proposal generation, contract review, timesheet reconciliation, and client reporting with AI-assisted workflows.",
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Discovery",
    description:
      "We map the workflow, identify pain points, document existing systems, and define success criteria with your team.",
  },
  {
    index: "02",
    title: "Business Analysis",
    description:
      "We evaluate ROI, assess data readiness, identify integration points, and define human oversight requirements.",
  },
  {
    index: "03",
    title: "Architecture",
    description:
      "We design the system architecture, select models and tools, plan data flows, and document security and compliance boundaries.",
  },
  {
    index: "04",
    title: "Prototype",
    description:
      "We build a focused working slice to validate assumptions, test model performance, and gather feedback before full development.",
  },
  {
    index: "05",
    title: "Development",
    description:
      "We engineer the production system with proper error handling, observability, approval gates, and integration testing.",
  },
  {
    index: "06",
    title: "Testing",
    description:
      "We validate against real scenarios, test edge cases, measure accuracy and latency, and involve end users in acceptance testing.",
  },
  {
    index: "07",
    title: "Deployment",
    description:
      "We deploy to your infrastructure, configure monitoring and alerts, and provide runbooks for your operations team.",
  },
  {
    index: "08",
    title: "Optimization",
    description:
      "We measure real-world performance, tune model parameters, optimize costs, and expand coverage based on usage patterns.",
  },
  {
    index: "09",
    title: "Support",
    description:
      "We remain available for monitoring, model updates, integration changes, and feature expansion as your business evolves.",
  },
] as const;

export const faqItems: ReadonlyArray<FaqItem> = [
  {
    id: "project-timeline",
    question: "How long does an AI project take?",
    answer:
      "A focused AI agent or automation can be built in 3–5 weeks. A full SaaS product typically takes 8–14 weeks depending on complexity. We begin with a discovery phase that gives you a clear timeline and investment estimate before any development starts.",
  },
  {
    id: "custom-ai-cost",
    question: "How much does custom AI development cost?",
    answer:
      "Skymavan engagements are scoped per project rather than priced on a menu. A focused AI agent starts around $3,500, an automation sprint around $5,000, and a production AI SaaS MVP around $10,000. Final investment is confirmed after discovery when we understand the full scope of workflows, integrations, and requirements.",
  },
  {
    id: "existing-systems",
    question: "Can AI integrate with our existing software?",
    answer:
      "Yes. Integration is a core part of every engagement. We connect AI workflows with CRMs, ERPs, APIs, databases, communication tools (Slack, email), and internal platforms. Discovery maps every integration point, including authentication, data formats, rate limits, and error handling requirements.",
  },
  {
    id: "data-security",
    question: "How do you secure our data?",
    answer:
      "Data security is designed into every system from the start. We use encryption at rest and in transit, role-based access control, audit logging, and never train public models on your data. Systems can be deployed on your own infrastructure or in your cloud account if required.",
  },
  {
    id: "ai-models",
    question: "Which AI models do you use?",
    answer:
      "We select models based on the specific requirements of each task. We work with OpenAI, Anthropic, Gemini, and open-source models, and design systems with model flexibility so you can switch providers without rebuilding your workflows.",
  },
  {
    id: "post-launch-support",
    question: "Do you provide support after launch?",
    answer:
      "Yes. We offer ongoing monitoring, model tuning, cost optimization, and support as your usage grows. The handoff includes complete documentation, runbooks, and ownership clarity so your team can operate independently or with our continued assistance.",
  },
  {
    id: "self-hosting",
    question: "Can we host the solution ourselves?",
    answer:
      "Absolutely. Systems are designed to be deployable in your own cloud environment or on-premises infrastructure. We provide Docker containers, deployment scripts, configuration guides, and transition support for your operations team.",
  },
];
