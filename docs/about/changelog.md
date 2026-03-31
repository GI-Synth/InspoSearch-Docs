# Changelog

All notable changes to InspoSearch are documented here.

Format based on [Keep a Changelog](https://keepachangelog.com/). This project adheres to [Semantic Versioning](https://semver.org/).

## Unreleased

### Added
- Documentation site (VitePress) at docs.insposearch.pages.dev

---

## 1.5.0 — 2026-03-20

### Added
- AI research assistant integration (Gemini, Claude, OpenAI, Ollama — all optional)
- Interpret: cross-reference any image across all sources
- 3D constellation view for visual similarity exploration
- 45 new sources (total now 500+)

### Changed
- Source categories expanded from 4 to 8 (added Maps, Fashion, Science, split Historical from Archives)
- Improved offline caching via service worker

---

## 1.4.0 — 2026-03-01

### Added
- Board view for freeform image arrangement
- Colour extraction for all results
- Deep zoom via IIIF / OpenSeadragon integration
- 30 new museum sources

### Changed
- Keyboard shortcuts expanded (b for board, m for mode, i for interpret)
- Source filter sidebar redesigned with 8 category groups

### Fixed
- Flickr Commons results not loading when API key contains special characters
- Detail view arrow navigation wrapping incorrectly at result boundaries

---

## 1.3.0 — 2026-02-01

### Added
- Search modes: exact and explore
- National Diet Library (Japan) source
- Library and Archives Canada source
- Rate limiter for per-source throttling

### Changed
- Increased default perPage from 20 to 40
- Improved error messages in console for failed API calls

### Fixed
- Europeana results missing thumbnails due to field name change
- Search bar losing focus after source toggle

---

## 1.2.0 — 2026-01-10

### Added
- Giphy and YouTube thumbnail sources
- Category colour indicators in source filter sidebar
- `prefers-reduced-motion` support

### Changed
- Migrated from manual DOM updates to a lightweight reactive store
- Result grid now uses CSS Grid instead of absolute positioning

### Fixed
- CORS proxy fallback not triggering for certain museum APIs
- Keys panel input fields not auto-saving on paste events

---

## 1.1.0 — 2025-11-20

### Added
- Detail view with full metadata display
- Arrow keyboard navigation in detail view
- Harvard Art Museums source
- Cooper Hewitt source
- Wellcome Collection source

### Changed
- Redesigned toolbar with fixed bottom bar
- Improved image lazy loading with IntersectionObserver

### Fixed
- Search results duplicating when rapidly pressing Enter
- Unsplash thumbnails using wrong size variant

---

## 1.0.0 — 2025-10-01

### Added
- Initial release
- Unified search across 280+ cultural heritage sources
- Four source categories
- API key management (Keys panel)
- Source filter sidebar
- Dark-first monospace UI
- Keyboard shortcuts
- localStorage persistence for keys and preferences
- Deployed to Cloudflare Pages
