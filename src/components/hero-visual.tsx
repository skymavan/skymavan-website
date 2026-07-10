"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import {
  Component,
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { useTheme } from "next-themes";

import { withBasePath } from "@/lib/base-path";

const LivingAgentNetwork = dynamic(
  () => import("@/components/living-agent-network"),
  { ssr: false },
);

type HeroSceneBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type HeroSceneBoundaryState = { failed: boolean };

export class HeroSceneBoundary extends Component<
  HeroSceneBoundaryProps,
  HeroSceneBoundaryState
> {
  state: HeroSceneBoundaryState = { failed: false };

  static getDerivedStateFromError(): HeroSceneBoundaryState {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [visible, setVisible] = useState(true);
  const [activated, setActivated] = useState(false);
  const mounted = useSyncExternalStore(noopSubscribe, clientSnapshot, serverSnapshot);
  const desktop = useMediaQuery("(min-width: 768px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const webgl = useSyncExternalStore(noopSubscribe, supportsWebGL, serverSnapshot);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "160px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const poster = <HeroPoster />;
  const showScene = canRenderHeroScene({
    mounted,
    desktop,
    reducedMotion,
    webgl,
    visible,
    activated,
  });
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div
      ref={containerRef}
      className="hero-visual"
      data-scene={showScene}
      onPointerEnter={() => setActivated(true)}
    >
      {showScene ? (
        <HeroSceneBoundary fallback={poster}>
          <div
            className="absolute inset-0"
            role="img"
            aria-label="Interactive agent network"
          >
            <LivingAgentNetwork
              theme={theme}
              reducedMotion={reducedMotion}
              visibility={visible}
            />
          </div>
        </HeroSceneBoundary>
      ) : (
        poster
      )}
      <div className="network-label network-label-tools">Tools</div>
      <div className="network-label network-label-data">Data</div>
      <div className="network-label network-label-human">Human approval</div>
      <div className="network-label network-label-outcome">Outcome</div>
    </div>
  );
}

export function canRenderHeroScene(environment: {
  mounted: boolean;
  desktop: boolean;
  reducedMotion: boolean;
  webgl: boolean;
  visible: boolean;
  activated: boolean;
}) {
  return (
    environment.mounted &&
    environment.desktop &&
    !environment.reducedMotion &&
    environment.webgl &&
    environment.visible &&
    environment.activated
  );
}

const noopSubscribe = () => () => undefined;
const clientSnapshot = () => true;
const serverSnapshot = () => false;

let cachedWebGLSupport: boolean | undefined;

function supportsWebGL() {
  if (cachedWebGLSupport !== undefined) return cachedWebGLSupport;
  try {
    const canvas = document.createElement("canvas");
    cachedWebGLSupport = Boolean(
      canvas.getContext("webgl2") || canvas.getContext("webgl"),
    );
  } catch {
    cachedWebGLSupport = false;
  }
  return cachedWebGLSupport;
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

function HeroPoster() {
  return (
    <div className="absolute inset-0">
      <Image
        src={withBasePath("/media/hero-network-light.webp")}
        alt="Connected AI workflow nodes"
        fill
        priority
        sizes="(min-width: 1024px) 54vw, 100vw"
        className="hero-poster object-cover dark:hidden"
      />
      <Image
        src={withBasePath("/media/hero-network-dark.webp")}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="(min-width: 1024px) 54vw, 100vw"
        className="hero-poster hidden object-cover dark:block"
      />
    </div>
  );
}
