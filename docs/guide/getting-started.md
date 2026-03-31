# Getting Started

## What is InspoSearch

InspoSearch is an open-source multi-source visual research engine. It searches **500+ cultural heritage sources** — museums, archives, libraries, photography collections, and open image providers — returning over **3 billion images** through a single search bar.

The app runs entirely in the browser. No account, no backend, no tracking. API keys for optional sources stay in `localStorage` on your machine.

<span class="custom-badge">AGPL-3.0</span>

[Open the app](https://insposearch.pages.dev)

## Quick Start

Open `index.html` in a browser, or:

```bash
npm start
```

That's it. No build step, no configuration.

## How to Search

1. Type a query in the search bar — `vermeer`, `ukiyo-e`, `brutalist architecture`
2. Press `Enter`. Results stream in from all enabled sources
3. Click any image to open the detail view with metadata and source link
4. Use the source filter to toggle categories or individual sources

## Search Modes

| Mode | Behaviour |
|------|-----------|
| **Exact** | Matches your terms precisely. Best for known subjects |
| **Explore** | Casts a wider net across sources. Best for visual discovery |

Toggle between modes using the mode switcher in the search bar.

## Features

### Board View
Pin images to a freeform canvas. Arrange, group, and compare results from different sources side by side. Boards persist in `localStorage`.

### Deep Zoom
IIIF-compatible images open in an OpenSeadragon viewer. Examine high-resolution works at brushstroke level. Pan and zoom with mouse or keyboard.

### Colour Extraction
Every result has its dominant colours extracted automatically. Filter the entire result set by palette. Useful for finding works by colour relationship rather than subject.

### 3D Constellation
Visualise results as a three-dimensional point cloud based on visual similarity. Navigate the constellation to discover unexpected connections between works.

### Cross-Reference (Interpret)
Select any image and trigger Interpret to cross-reference it against all sources. Find related works, trace provenance, and build context around a single piece.

### AI Research Assistant
Optional integration with Gemini, Claude, OpenAI, or Ollama. Ask questions about an image, request deeper analysis, or generate research notes. Bring your own API key. InspoSearch works fully without AI.

### Offline Caching
Previously loaded images and metadata are cached locally. Continue browsing recent searches without a network connection.

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `/` | Focus search bar |
| `Enter` | Execute search |
| `Esc` | Close detail view / clear focus |
| `left` `right` | Navigate images in detail view |
| `up` `down` | Scroll results grid |
| `k` | Toggle API keys panel |
| `s` | Toggle source filter sidebar |
| `b` | Toggle board view |
| `t` | Scroll to top |
| `m` | Switch search mode (exact / explore) |
| `i` | Interpret (cross-reference selected image) |

## Source Categories

InspoSearch organises its 500+ sources into eight categories:

| Category | Count |
|----------|-------|
| Museums | 212 |
| Historical | 75 |
| Art and Design | 58 |
| Photography | 22 |
| Nature | 20 |
| Maps | varies |
| Fashion | varies |
| Science | varies |

See the full list on the [Sources](/guide/sources) page.

## Next Steps

- [Sources](/guide/sources) — complete source directory
- [API Keys](/guide/api-keys) — which sources need keys and how to add them
- [Architecture](/reference/architecture) — how the app works under the hood
- [Contributing](/about/contributing) — help improve InspoSearch
