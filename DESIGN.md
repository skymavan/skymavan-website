# SkyMavan AI Operations Agent Design System

## Direction

AI Operations Agent pairs a cinematic robotic operator scene with precise system language. The page should immediately signal artificial intelligence while staying grounded in operational reliability as visitors move into services, operating controls, process, FAQ, and contact. SkyMavan is always written with a capital S and M and never carries a registered-mark symbol.

## Color

All semantic colors use HSL custom properties. The site is dark-only.

| Role | HSL | Hex |
| --- | --- | --- |
| Abyss Navy background | `201 100% 13%` | `#002B42` |
| Deep Current surface | `201 67% 8%` | `#071A24` |
| Star White foreground | `0 0% 100%` | `#FFFFFF` |
| Mist secondary text | `240 3% 66%` | `#A6A6AB` |
| Signal Blue | `194 71% 69%` | `#79CFE8` |
| Human Gold | `42 100% 71%` | `#FFD36A` |

Signal Blue identifies system routes, links, and focus. Human Gold is reserved for human approval and selection. Body text and controls must meet WCAG 2.2 AA contrast.

## Typography

- Display and wordmark: Instrument Serif 400, normal and italic.
- Body and interface: Inter 400/500.
- Hero: `clamp(3.5rem, 8vw, 7.7rem)` with tight relative tracking.
- H1–H3 use balanced wrapping; prose uses pretty wrapping and a readable measure.

## Layout and Components

- Maximum content width is 80rem with fluid mobile gutters.
- The hero occupies at least `100svh`; text sits in the AI operations scene's purpose-built negative space with no tint, wash, or gradient overlay.
- Services use editorial rows; process uses a real ordered timeline; cards are reserved for pricing comparisons.
- The header floats above the hero. Liquid glass is limited to navigation and primary journey controls.
- Content and form surfaces are opaque Deep Current or Abyss Navy with restrained borders.
- The system route uses Input → Reason → Human approval → Act. Blue marks system stages; gold marks only human approval.
- Mobile navigation remains an accessible Sheet with managed focus.

## Imagery and Motion

- The decorative hero robot scene is local and art-directed through desktop and mobile AVIF/WebP sources.
- Do not add color overlays, decorative blobs, radial gradients, unreadable UI text, or generic AI glow effects.
- Hero copy uses one fully opaque three-stage rise sequence: headline at 0ms, description at 200ms, actions at 400ms.
- Fine-pointer desktops add at most 8px horizontal and 5px vertical depth to the hero artwork; coarse pointers, smaller screens, and reduced-motion users receive a static image.
- Controls use the standard easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- Reduced motion omits all entrance choreography and artwork movement while keeping content visible.

## Responsive and Accessibility

- Validate at 320, 768, 1024, and 1440 pixels.
- Use one H1, semantic landmarks, labelled ordered routes, and persistent form labels.
- All interactive targets are at least 44px and keep visible keyboard focus.
- Respect safe-area insets and prevent horizontal overflow.
