import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { ClosingCta } from "@/components/closing-cta";
import { FaqSection } from "@/components/faq-section";
import { HeroCopy } from "@/components/hero-copy";
import { HeroRoute } from "@/components/hero-route";
import { HeroVisual } from "@/components/hero-visual";
import { PrincipleList } from "@/components/principle-list";
import { ProcessList } from "@/components/process-list";
import { ServiceList } from "@/components/service-list";
import { SiteHeader } from "@/components/site-header";
import { SystemRoute } from "@/components/system-route";
import { Reveal } from "@/components/motion/reveal";
import {
  industries,
  siteConfig,
  whySkymavan,
} from "@/content/site";
import { createStructuredData } from "@/lib/structured-data";

export default function Home() {
  const schema = JSON.stringify(createStructuredData()).replace(/</g, "\\u003c");
  const bookingUrl = siteConfig.bookingUrl;

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
            <HeroCopy bookingUrl={bookingUrl} />
          </div>
          <HeroRoute />
        </section>

        <section id="services" className="section-pad" aria-labelledby="services-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="What we build"
                title="Solutions that solve operational problems."
                description="Every engagement starts with a business problem, not a technology choice. We design the right combination of AI, automation, and human oversight around the outcome you need."
                id="services-title"
              />
            </Reveal>
            <ServiceList bookingUrl={bookingUrl} />
          </div>
        </section>

        <section id="why-skymavan" className="operations-section section-pad" aria-labelledby="why-title">
          <div className="site-shell operations-grid">
            <div className="operations-visual" aria-label="Observable operating loop">
              <p className="route-kicker">Built for business-critical work</p>
              <SystemRoute />
            </div>

            <Reveal className="operations-copy">
              <p className="eyebrow">Why Skymavan</p>
              <h2 id="why-title">
                Engineering-grade AI for real operations.
              </h2>
              <p className="section-lede">
                We treat AI systems as engineering products, not experiments.
                Every workflow we build includes human checkpoints, secure data
                handling, and a clear upgrade path as your needs evolve.
              </p>
              <PrincipleList items={whySkymavan} />
            </Reveal>
          </div>
        </section>

        <section id="industries" className="section-pad" aria-labelledby="industries-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Who we help"
                title="Industry experience that accelerates delivery."
                description="We have built AI systems for healthcare, finance, manufacturing, SaaS, and more. Each industry has its own compliance requirements, data patterns, and operational constraints—we design for them from day one."
                id="industries-title"
              />
            </Reveal>
            <PrincipleList items={industries} />
          </div>
        </section>

        <section id="process" className="section-pad" aria-labelledby="process-title">
          <div className="site-shell">
            <Reveal>
              <SectionHeading
                eyebrow="How we work"
                title="A repeatable engineering process."
                description="Nine stages from discovery to ongoing support. Every phase produces a tangible outcome, and every decision is reversible until the next phase confirms it."
                id="process-title"
              />
            </Reveal>
            <ProcessList />
          </div>
        </section>

        <section id="faq" className="section-pad" aria-labelledby="faq-title">
          <div className="site-shell faq-grid">
            <Reveal>
              <div>
                <p className="eyebrow">Questions, answered</p>
                <h2 id="faq-title">Practical answers about AI development.</h2>
                <p className="section-lede">
                  Timelines, costs, security, integration, and what happens after
                  launch—addressed directly, without marketing language.
                </p>
              </div>
            </Reveal>
            <FaqSection />
          </div>
        </section>

        <section id="contact" className="contact-section section-pad" aria-labelledby="contact-title">
          <div className="site-shell contact-grid">
            <Reveal className="contact-intro">
              <p className="eyebrow">Book a meeting</p>
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
            </Reveal>
            <div className="contact-form-wrap">
              <ContactForm />
            </div>
          </div>
        </section>

        <ClosingCta bookingUrl={bookingUrl} />
      </main>

      <footer className="site-footer">
        <Reveal className="site-shell footer-grid">
          <div className="footer-brand-wrap">
            <a href="#top" className="footer-brand flex items-center gap-2">
              <Image src="/media/logo.png" alt="" width={56} height={56} className="shrink-0" />
              <span className="font-display text-[1.8rem] font-medium tracking-[-0.035em] text-foreground">
                Skymavan.com
              </span>
            </a>
            <p>Custom AI systems built for business-critical operations.</p>
            <div className="footer-socials" aria-label="Social links">
              {siteConfig.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon === "linkedin" ? (
                    <LinkedInIcon />
                  ) : link.icon === "instagram" ? (
                    <InstagramIcon />
                  ) : (
                    <X aria-hidden="true" />
                  )}
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer quick actions" className="footer-nav">
            <p className="footer-heading">Quick actions</p>
            <a href="#services">Services</a>
            <a href="#why-skymavan">Why Skymavan</a>
            <a href="#industries">Industries</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="footer-meta">
            <p className="footer-heading">Get in touch</p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>Serving teams worldwide</span>
          </div>
          <div className="footer-legal">
            <span>© 2026 SkyMavan. All rights reserved.</span>
          </div>
        </Reveal>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schema }}
      />
    </>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.56c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.65H9.35V9h3.41v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.33 2.41 4.33 5.54v6.2ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V9H3.56v11.45Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 1.75A4 4 0 0 0 3.75 7.75v8.5a4 4 0 0 0 4 4h8.5a4 4 0 0 0 4-4v-8.5a4 4 0 0 0-4-4h-8.5Zm4.25 2.78a5.47 5.47 0 1 1 0 10.94 5.47 5.47 0 0 1 0-10.94Zm0 1.75a3.72 3.72 0 1 0 0 7.44 3.72 3.72 0 0 0 0-7.44Zm5-1.03a1.02 1.02 0 1 1-2.04 0 1.02 1.02 0 0 1 2.04 0Z"
      />
    </svg>
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
