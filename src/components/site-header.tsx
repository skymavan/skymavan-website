"use client";

import Image from "next/image";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigation, siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
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
          {navigation.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
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

          <Sheet>
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
                  <SheetClose key={item.href} asChild>
                    <a
                      className="rounded-lg px-3 py-4 font-heading text-2xl font-semibold tracking-[-0.025em] hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                      href={item.href}
                      onClick={(event) => {
                        if (!item.href.startsWith("#")) return;
                        event.preventDefault();
                        const targetId = item.href.slice(1);
                        window.location.hash = targetId;
                        document.getElementById(targetId)?.scrollIntoView({
                          block: "start",
                          behavior: "smooth",
                        });
                      }}
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto p-4">
                <SheetClose asChild>
                  <Button asChild size="lg" className="h-12 w-full">
                    <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
                      Book a meeting
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
