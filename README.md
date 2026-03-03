# Nano Banana Skill

This repository contains an Agent Skill for Gemini API image generation workflows with Nano Banana model family support, including:

- text-to-image
- text+image editing
- multi-image composition
- optional Google Search grounding
- configurable thinking, size, and aspect ratio

The skill implementation lives at [skills/nanobanana-cli/SKILL.md](skills/nanobanana-cli/SKILL.md).

## Repository layout

- `skills/nanobanana-cli/SKILL.md`: skill instructions and operating defaults.
- `skills/nanobanana-cli/scripts/nanobanana-cli.js`: dependency-free Node.js CLI for one-shot generation/editing.
- `skills/nanobanana-cli/references/image-generation-api.md`: detailed API behavior and payload rules.
- `skills/nanobanana-cli/references/sources.md`: source provenance.

## Requirements

- Node.js 18+ (CLI uses global `fetch`)
- Gemini API key in `GEMINI_API_KEY`

Optional:

- `GEMINI_MODEL` to override model default

## Quick start

```powershell
$env:GEMINI_API_KEY="YOUR_KEY"
node skills/nanobanana-cli/scripts/nanobanana-cli.js --prompt "A banana astronaut in space, cinematic lighting"
```

Generated files are saved to `nanobanana-output/` by default.

## Common usage

Generate with multiple references:

```powershell
node skills/nanobanana-cli/scripts/nanobanana-cli.js `
  --prompt "Create an ecommerce hero shot from these references" `
  -i .\ref1.png -i .\ref2.jpg
```

Specify render controls:

```powershell
node skills/nanobanana-cli/scripts/nanobanana-cli.js `
  --prompt "Flat illustration of a weather dashboard" `
  --aspect-ratio 16:9 `
  --resolution 2K `
  --thinking medium `
  --output-mode both `
  --output-dir .\out
```

Enable Google Search grounding:

```powershell
node skills/nanobanana-cli/scripts/nanobanana-cli.js `
  --prompt "Create a visual summary of this week's weather in San Francisco" `
  --google-search
```

Show help:

```powershell
node skills/nanobanana-cli/scripts/nanobanana-cli.js --help
```

## Skill defaults and limits

- Default model: `gemini-3.1-flash-image-preview` (or `GEMINI_MODEL` override)
- Default thinking: `high`
- Default aspect ratio: `Auto`
- Default resolution: `1K`
- Default output mode: `images` (image-only)
- Google Search grounding: disabled by default; enable with `--google-search` (or `--googleSearch`)
- Default output directory: `nanobanana-output/` (unless explicit save path is inferred from prompt)
- Max reference images: 14
- 512px rule: use image size as string `"512"` (not numeric `512`)

## References

- [Image generation reference](skills/nanobanana-cli/references/image-generation-api.md)
- [Source notes](skills/nanobanana-cli/references/sources.md)
- [Gemini image generation docs](https://ai.google.dev/gemini-api/docs/image-generation)
