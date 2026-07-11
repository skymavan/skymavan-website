"use client";

import Image from "next/image";
import { useCallback, useSyncExternalStore } from "react";

import { withBasePath } from "@/lib/base-path";

export const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const noopSubscribe = () => () => undefined;
const clientSnapshot = () => true;
const serverSnapshot = () => false;

export function HeroVideo() {
  const mounted = useSyncExternalStore(
    noopSubscribe,
    clientSnapshot,
    serverSnapshot,
  );
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <div className="hero-visual" data-mounted={mounted} aria-hidden="true">
      <Image
        src={withBasePath("/media/cinematic-hero-poster.webp")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hero-poster object-cover"
      />
      {mounted && !reducedMotion ? (
        <video
          className="hero-video"
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={withBasePath("/media/cinematic-hero-poster.webp")}
          aria-hidden="true"
          tabIndex={-1}
        />
      ) : null}
    </div>
  );
}

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onStoreChange);
      return () => media.removeEventListener("change", onStoreChange);
    },
    [query],
  );
  const getSnapshot = useCallback(() => window.matchMedia(query).matches, [query]);
  return useSyncExternalStore(subscribe, getSnapshot, serverSnapshot);
}
