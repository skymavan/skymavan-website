import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { withBasePath } from "@/lib/base-path";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 text-foreground">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-8 flex w-fit items-center gap-2">
          <Image src="/media/logo.png" alt="" width={72} height={72} className="shrink-0" />
          <span className="font-display text-[clamp(1.6rem,3vw,2rem)] font-medium tracking-[-0.035em] text-foreground">
            SkyMavan
          </span>
        </div>
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
