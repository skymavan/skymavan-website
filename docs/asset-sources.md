# Asset Sources

## Cinematic hero video

- Source: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4`
- Usage: decorative fullscreen hero background.
- Delivery: remote immutable CloudFront MP4; the page requests metadata and relies on browser autoplay only when reduced motion is not requested.
- The figures in the video are atmospheric and are not presented as SkyMavan employees, customers, or offices.

## Derived poster assets

- `public/media/cinematic-hero-poster.avif`
- `public/media/cinematic-hero-poster.webp`
- Source frame: approximately 00:02 from the approved hero video.
- Processing: frame extraction with FFmpeg, then format conversion and optimization with Sharp.
- Usage: immediate loading surface, autoplay failure fallback, and the complete reduced-motion hero.

## Social image

- `src/app/opengraph-image.png`
- Source: deterministic 1200×630 reduced-motion capture of the approved homepage hero.
