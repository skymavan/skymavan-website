import { ArrowLeft } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/base-path";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-8 flex w-fit items-center gap-2.5 font-heading text-lg font-bold">
          <BrandMark /> SkyMavan
        </div>
        <p className="eyebrow justify-center">404 / Route not found</p>
        <h1 className="font-heading text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">
          This path is outside the system.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
          Return to the homepage to explore SkyMavan&apos;s AI agents,
          automation, and AI product engineering services.
        </p>
        <Button asChild size="lg" className="mt-8 h-12 px-5">
          <a href={withBasePath("/")}>
            <ArrowLeft aria-hidden="true" /> Back to SkyMavan
          </a>
        </Button>
      </div>
    </main>
  );
}
