import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/base-path";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
      <div className="max-w-xl text-center">
        <div className="wordmark mx-auto mb-8 w-fit">SkyMavan</div>
        <p className="eyebrow justify-center">404 / Route not found</p>
        <h1 className="font-heading text-5xl font-normal tracking-[-0.04em] sm:text-7xl">
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
