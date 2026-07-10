import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { HeroVisual } from "@/components/hero-visual";
import { PageProgress } from "@/components/page-progress";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import {
  operatingPrinciples,
  priceTiers,
  processSteps,
  services,
  siteConfig,
} from "@/content/site";
import { withBasePath } from "@/lib/base-path";
import { createStructuredData } from "@/lib/structured-data";

export default function Home() {
  const schema = JSON.stringify(createStructuredData()).replace(/</g, "\\u003c");

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <PageProgress />
      <SiteHeader />

      <main id="main-content">
        <section id="top" className="hero-section" aria-labelledby="hero-title">
          <div className="site-shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" aria-hidden="true" />
                Independent AI product studio
              </p>
              <h1 id="hero-title" className="hero-title">
                AI systems that move work forward.
              </h1>
              <p className="hero-description">
                SkyMavan is an AI product studio for startups and growing
                businesses. We design and build custom agents, connected
                automations, and AI SaaS products that fit real workflows,
                keep people in control, and create dependable operational
                progress.
              </p>
              <div className="hero-actions">
                <Button asChild size="lg" className="h-12 px-5">
                  <a href="#contact">
                    Start a project <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-5"
                >
                  <a href="#approach">
                    See how we build <ArrowDownRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
            <HeroVisual />
          </div>
          <div className="site-shell hero-footnote" aria-label="System qualities">
            <span>Observable by design</span>
            <span>Human approvals built in</span>
            <span>Model-flexible architecture</span>
          </div>
        </section>

        <section id="services" className="section-pad" aria-labelledby="services-title">
          <div className="site-shell">
            <SectionHeading
              eyebrow="What we build"
              title="Focused AI, connected to the work that matters."
              description="We start with the operational outcome, then design the right combination of models, tools, interfaces, and human decisions around it."
              id="services-title"
            />
            <div className="service-list">
              {services.map((service) => (
                <article key={service.id} id={service.id} className="service-row">
                  <div className="service-index">{service.index}</div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <a href="#contact" className="text-link">
                      Discuss {service.shortTitle.toLowerCase()}
                      <ArrowRight aria-hidden="true" />
                    </a>
                  </div>
                  <ul aria-label={`${service.title} use cases`}>
                    {service.useCases.map((useCase) => (
                      <li key={useCase}>
                        <span aria-hidden="true" /> {useCase}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="operations-section section-pad" aria-labelledby="operations-title">
          <div className="site-shell operations-grid">
            <div className="operations-visual">
              <picture>
                <source
                  srcSet={withBasePath("/media/system-architecture.avif")}
                  type="image/avif"
                />
                <Image
                  src={withBasePath("/media/system-architecture.webp")}
                  alt="Layered contemporary architecture representing connected operational systems"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="operations-image"
                />
              </picture>
              <div className="system-trace" aria-hidden="true">
                <span>INPUT</span>
                <span>REASON</span>
                <span>APPROVE</span>
                <span>ACT</span>
              </div>
            </div>

            <div className="operations-copy">
              <p className="eyebrow">Designed for real operations</p>
              <h2 id="operations-title">
                A useful AI system is more than a model call.
              </h2>
              <p className="section-lede">
                The value lives in the whole operating loop: what the system
                can access, where it must stop, how people supervise it, and
                what happens when reality does not match the happy path.
              </p>
              <div className="principle-list">
                {operatingPrinciples.map((principle) => (
                  <article key={principle.title}>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="section-pad" aria-labelledby="approach-title">
          <div className="site-shell">
            <SectionHeading
              eyebrow="How we work"
              title="Prove the system before scaling the system."
              description="A compact, evidence-led process keeps early decisions reversible and makes quality, cost, ownership, and operational risk visible throughout the build."
              id="approach-title"
            />
            <ol className="process-list">
              {processSteps.map((step) => (
                <li key={step.title}>
                  <span className="process-number">{step.index}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pricing" className="pricing-section section-pad" aria-labelledby="pricing-title">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Starting points"
              title="Clear enough to plan. Flexible enough to fit."
              description="Choose the closest starting point. Discovery confirms the workflow, integrations, risk, and production requirements before final scope and investment."
              id="pricing-title"
            />
            <div className="pricing-grid">
              {priceTiers.map((tier) => (
                <article key={tier.name} className="pricing-tier">
                  <p className="pricing-service">{tier.name}</p>
                  <p className="pricing-value">
                    <span>{tier.qualifier}</span> {tier.price}
                  </p>
                  <p className="pricing-description">{tier.description}</p>
                  <ul>
                    {tier.inclusions.map((inclusion) => (
                      <li key={inclusion}>
                        <Check aria-hidden="true" /> {inclusion}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" size="lg" className="mt-auto h-12">
                    <a href="#contact">
                      Start with {tier.name} <ArrowRight aria-hidden="true" />
                    </a>
                  </Button>
                  <p className="pricing-disclaimer">{tier.disclaimer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-pad" aria-labelledby="faq-title">
          <div className="site-shell faq-grid">
            <div>
              <p className="eyebrow">Questions, answered</p>
              <h2 id="faq-title">What founders usually want to know.</h2>
              <p className="section-lede">
                Practical answers about scope, integration, control, and what
                happens after launch.
              </p>
            </div>
            <FaqSection />
          </div>
        </section>

        <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
          <div className="site-shell contact-grid">
            <div className="contact-intro">
              <p className="eyebrow">Start a project</p>
              <h2 id="contact-title">Bring us the workflow that keeps slowing you down.</h2>
              <p className="section-lede">
                Tell us what is happening today, where the friction lives, and
                what a better operating result would look like. We will reply
                by email with the most useful next step.
              </p>
              <a className="contact-email" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email} <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </section>

        <section className="closing-section" aria-label="Closing call to action">
          <div className="site-shell closing-inner">
            <p>One useful system can change the pace of an entire team.</p>
            <a href="#contact" className="closing-link">
              Let&apos;s find yours <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div>
            <a href="#top" className="footer-brand">SkyMavan</a>
            <p>AI systems designed for real operations.</p>
          </div>
          <nav aria-label="Footer">
            <a href="#services">Services</a>
            <a href="#approach">Approach</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer-meta">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>Serving teams worldwide</span>
          </div>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description: string;
  id: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
