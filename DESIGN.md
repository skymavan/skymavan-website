# SkyMavan Living Systems Design System

## Direction

Living Systems combines deep moss, sky-blue illumination, organic 3D intelligence, asymmetrical composition, and restrained technical detail. Light mode resembles a white research studio where living systems are being examined; dark mode resembles the same instrument operating after hours.

## Color

All colors use OKLCH custom properties.

| Role | Light | Dark |
| --- | --- | --- |
| Background | `oklch(1 0 0)` | `oklch(0.08 0 0)` |
| Surface | `oklch(0.965 0.008 140)` | `oklch(0.14 0.018 140)` |
| Ink | `oklch(0.17 0.025 140)` | `oklch(0.96 0.006 140)` |
| Muted ink | `oklch(0.42 0.025 140)` | `oklch(0.74 0.018 140)` |
| Primary moss | `oklch(0.30 0.096 140)` | `oklch(0.46 0.11 140)` |
| Sky accent | `oklch(0.34 0.105 225)` | `oklch(0.67 0.13 225)` |
| Focus | `oklch(0.50 0.15 225)` | `oklch(0.50 0.15 225)` |

Primary filled controls use near-white text. The brighter dark-mode sky color is for links, indicators, and illustration light, not large filled controls. Body contrast must remain at least 4.5:1; the chosen ink pairs exceed 8:1.

## Typography

- Display: Anybody variable, weights 600–800.
- Body: Source Sans 3 variable, weights 400–700.
- Hero ceiling: `clamp(3rem, 7vw, 6rem)` with `-0.035em` letter spacing.
- H1–H3 use balanced wrapping. Prose uses pretty wrapping and a 65–70 character measure.
- Body text defaults to 18px/1.6 on desktop and 16px/1.6 on smaller screens.

## Layout

- Maximum content width: 80rem, with fluid gutters from 1rem to 2.5rem.
- Use asymmetric two-column compositions where text and imagery have unequal visual weight.
- Service content is arranged as editorial rows, not an identical card grid.
- Cards are reserved for pricing, where comparison is the correct affordance.
- Standard component radius is 12px; compact controls use 8px; pills are reserved for tags and compact actions.
- Use borders or restrained short shadows, never border plus wide ghost shadow.

## Components

- Header: opaque sticky surface with visible current-section and focus states.
- Buttons: primary moss fill, secondary outline, text-link tertiary action.
- Mobile navigation: accessible sheet with focus management.
- FAQ: semantic accordion with visible focus and no hidden answer text in schema.
- Form: persistent labels, readable help/error text, 44px minimum control height.
- Theme control: light, dark, and system choices with icon plus accessible label.

## Imagery

- The WebGL hero visualizes a living agent network with a central reasoning core, data inputs, tools, a human approval node, and outcomes.
- Generated fallback posters preserve the same material language in both themes.
- One architectural photograph may be blended into the operations section as a metaphor for systems structure. It must be stored locally, optimized, credited in project documentation, and never imply client or team identity.

## Motion

- Standard easing: `[0.16, 1, 0.3, 1]`.
- Durations range from 180ms for controls to 700ms for first-load choreography.
- No bounce, elastic movement, universal fade-up reveals, or animated layout properties.
- WebGL pointer response stays within six degrees and pauses while offscreen.
- Reduced-motion mode removes parallax, continuous orbital movement, stagger, and smooth scrolling; content remains visible by default.

## Responsive & Accessibility

- Primary validation widths: 320, 768, 1024, and 1440 pixels.
- Under 768px, replace WebGL with the relevant static poster.
- Never hide content behind animation state.
- Use semantic landmarks and one H1.
- All interactive elements require a visible focus ring using the focus token.
- Respect safe-area insets and prevent horizontal overflow at every breakpoint.
