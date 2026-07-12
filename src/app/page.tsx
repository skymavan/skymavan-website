import Image from "next/image";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { FaqSection } from "@/components/faq-section";
import { HeroVisual } from "@/components/hero-visual";
import { SiteHeader } from "@/components/site-header";
import { SystemRoute } from "@/components/system-route";
import { Button } from "@/components/ui/button";
import {
  industries,
  processSteps,
  services,
  siteConfig,
  whySkymavan,
} from "@/content/site";
import { createStructuredData } from "@/lib/structured-data";

export default function Home() {
  const schema = JSON.stringify(createStructuredData()).replace(/</g, "\\u003c");

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        <section id="top" className="hero-section" aria-labelledby="hero-title">
          <HeroVisual />
          <div className="site-shell hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">AI Agents · Workflow Automation · AI Software</p>
              <h1 id="hero-title" className="hero-title">
                AI systems that <em>solve operational problems.</em>
              </h1>
              <p className="hero-description">
                Skymavan builds custom AI agents, connected automations, and
                production AI software for teams that need reliable systems, not
                experimental chatbots. Every solution includes human oversight,
                secure integrations, and a clear path to measurable results.
              </p>
              <div className="hero-actions">
                <Button
                  asChild
                  size="lg"
                  className="liquid-glass hero-primary-action rounded-full text-foreground"
                >
                  <a href="#contact">
                    Start a project <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
                <a href="#services" className="hero-secondary-action">
                  See what we build <ArrowDownRight aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <ol className="site-shell hero-route" aria-label="Hero system route">
            <li>
              <span aria-hidden="true">01</span>
              <strong>Input</strong>
            </li>
            <li>
              <span aria-hidden="true">02</span>
              <strong>Reason</strong>
            </li>
            <li className="hero-route-human">
              <span aria-hidden="true">03</span>
              <strong>Human approval</strong>
            </li>
            <li>
              <span aria-hidden="true">04</span>
              <strong>Act</strong>
            </li>
          </ol>
        </section>

        <section id="services" className="section-pad" aria-labelledby="services-title">
          <div className="site-shell">
            <SectionHeading
              eyebrow="What we build"
              title="Solutions that solve operational problems."
              description="Every engagement starts with a business problem, not a technology choice. We design the right combination of AI, automation, and human oversight around the outcome you need."
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

        <section id="why-skymavan" className="operations-section section-pad" aria-labelledby="why-title">
          <div className="site-shell operations-grid">
            <div className="operations-visual" aria-label="Observable operating loop">
              <p className="route-kicker">Built for business-critical work</p>
              <SystemRoute />
            </div>

            <div className="operations-copy">
              <p className="eyebrow">Why Skymavan</p>
              <h2 id="why-title">
                Engineering-grade AI for real operations.
              </h2>
              <p className="section-lede">
                We treat AI systems as engineering products, not experiments.
                Every workflow we build includes human checkpoints, secure data
                handling, and a clear upgrade path as your needs evolve.
              </p>
              <div className="principle-list">
                {whySkymavan.map((principle) => (
                  <article key={principle.title}>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="industries" className="section-pad" aria-labelledby="industries-title">
          <div className="site-shell">
            <SectionHeading
              eyebrow="Who we help"
              title="Industry experience that accelerates delivery."
              description="We have built AI systems for healthcare, finance, manufacturing, SaaS, and more. Each industry has its own compliance requirements, data patterns, and operational constraints—we design for them from day one."
              id="industries-title"
            />
            <div className="principle-list">
              {industries.map((industry) => (
                <article key={industry.title}>
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-pad" aria-labelledby="process-title">
          <div className="site-shell">
            <SectionHeading
              eyebrow="How we work"
              title="A repeatable engineering process."
              description="Nine stages from discovery to ongoing support. Every phase produces a tangible outcome, and every decision is reversible until the next phase confirms it."
              id="process-title"
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

        <section id="faq" className="section-pad" aria-labelledby="faq-title">
          <div className="site-shell faq-grid">
            <div>
              <p className="eyebrow">Questions, answered</p>
              <h2 id="faq-title">Practical answers about AI development.</h2>
              <p className="section-lede">
                Timelines, costs, security, integration, and what happens after
                launch—addressed directly, without marketing language.
              </p>
            </div>
            <FaqSection />
          </div>
        </section>

        <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
          <div className="site-shell contact-grid">
            <div className="contact-intro">
              <p className="eyebrow">Start a project</p>
              <h2 id="contact-title">Tell us about the operational problem you want to solve.</h2>
              <p className="section-lede">
                Describe the workflow that is consuming too much time, the system
                that does not quite connect, or the manual process that should
                have been automated years ago. We will reply with a clear
                assessment and a recommended next step.
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
            <p>One well-built system can change the trajectory of an entire operation.</p>
            <a href="#contact" className="closing-link">
              Let&apos;s build yours <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-grid">
          <div>
            <a href="#top" className="footer-brand flex items-center gap-2">
              <Image src="/media/logo.png" alt="" width={56} height={56} className="shrink-0" />
              <span className="font-display text-[1.8rem] font-medium tracking-[-0.035em] text-foreground">
                Skymavan
              </span>
            </a>
            <p>Custom AI systems built for business-critical operations.</p>
          </div>
          <nav aria-label="Footer">
            <a href="#services">Services</a>
            <a href="#why-skymavan">Why Skymavan</a>
            <a href="#industries">Industries</a>
            <a href="#process">Process</a>
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
