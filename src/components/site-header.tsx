"use client";

import Image from "next/image";
import { ArrowUpRight, Menu } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation, siteConfig } from "@/content/site";

const SECTION_IDS = navigation.map((item) => item.href.slice(1));

export function SiteHeader() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (typeof IntersectionObserver === "undefined") return;

    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const headerInitial = reduce ? false : { opacity: 0, y: "-110%" };
  const headerAnimate = reduce ? undefined : { opacity: 1, y: 0 };

  return (
    <motion.header
      className="site-header"
      initial={headerInitial}
      animate={headerAnimate}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
    >
      <div className="site-shell header-shell liquid-glass flex h-[4.5rem] items-center justify-between gap-4 rounded-full px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="SkyMavan home"
        >
          <Image src="/media/logo.png" alt="" width={56} height={56} priority className="shrink-0" />
          <span className="font-display text-[clamp(1.4rem,2.5vw,1.75rem)] font-medium tracking-[-0.035em] text-foreground">
            SkyMavan
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => {
            const itemSection = item.href.slice(1);
            const isActive = activeId === itemSection;
            return (
              <a
                key={item.href}
                className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                href={item.href}
              >
                {item.label}
                {isActive && !reduce && (
                  <motion.span
                    layoutId="nav-underline"
                    className="nav-underline"
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="lg"
            className="liquid-glass hidden h-11 rounded-full px-5 text-foreground sm:inline-flex"
          >
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
              Book a meeting
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>

          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="liquid-glass size-11 rounded-full text-foreground lg:hidden"
                aria-label="Open navigation"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              aria-label="Site navigation"
              className="w-[min(24rem,88vw)] border-border bg-background p-0"
            >
              <SheetHeader className="border-b border-border p-6 text-left">
                <SheetTitle className="sr-only">Site navigation</SheetTitle>
                <div className="flex items-center gap-2">
                  <Image src="/media/logo.png" alt="" width={56} height={56} className="shrink-0" />
                  <span className="font-display text-[clamp(1.4rem,2.5vw,1.75rem)] font-medium tracking-[-0.035em] text-foreground">
                    Skymavan
                  </span>
                </div>
                <SheetDescription>
                  Custom AI systems for business-critical operations.
                </SheetDescription>
              </SheetHeader>
              <nav
                className="flex flex-col px-4 py-6"
                aria-label="Mobile primary"
              >
                {navigation.map((item) => (
                  <a
                    key={item.href}
                    className="rounded-lg px-3 py-4 font-heading text-2xl font-semibold tracking-[-0.025em] hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    href={item.href}
                    onClick={(event) => {
                      if (!item.href.startsWith("#")) return;
                      event.preventDefault();
                      setMobileNavOpen(false);
                      const targetId = item.href.slice(1);
                      window.history.pushState(null, "", item.href);
                      window.setTimeout(() => {
                        document.getElementById(targetId)?.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        });
                      }, 0);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto p-4">
                <Button asChild size="lg" className="h-12 w-full">
                  <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                    Book a meeting
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
