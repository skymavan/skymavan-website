"use client";

import { ArrowUpRight, Menu } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { ThemeSwitcher } from "@/components/theme-switcher";
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
import { navigation } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-shell flex h-[4.5rem] items-center justify-between gap-4">
        <a
          href="#top"
          className="inline-flex items-center gap-2.5 rounded-lg font-heading text-lg font-bold tracking-[-0.025em] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="SkyMavan home"
        >
          <BrandMark />
          <span>SkyMavan</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button asChild size="lg" className="hidden h-10 px-4 sm:inline-flex">
            <a href="#contact">
              Start a project
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-10 lg:hidden"
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
                <div className="flex items-center gap-2.5 font-heading text-lg font-semibold">
                  <BrandMark /> SkyMavan
                </div>
                <SheetDescription>
                  AI systems designed for real operations.
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
                    >
                      {item.label}
                    </a>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto p-4">
                <SheetClose asChild>
                  <Button asChild size="lg" className="h-12 w-full">
                    <a href="#contact">Start a project</a>
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
