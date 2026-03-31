# Design System

The interface is a blank studio wall. Images do all the visual work. The UI should be almost invisible.

Influences: 032c magazine, Cactus studio, AnOther Magazine. Not a tech product — a creative instrument.

## Colour Tokens

### Dark Mode (default)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-page` | `#0E0E0D` | Page background |
| `--bg-panel` | `#141413` | Panels, sidebars |
| `--bg-card` | `#1C1C1A` | Cards, code blocks |
| `--bg-code` | `#1A1A18` | Code block background |
| `--text-primary` | `#E8E6E1` | Body text |
| `--text-secondary` | `#7A7870` | Secondary text |
| `--text-muted` | `#8A8880` | Muted text |
| `--text-disabled` | `#3A3935` | Disabled, placeholder |
| `--accent` | `#C8B89A` | Headings, links, active borders, badges, highlights |
| `--line-hairline` | `rgba(232,230,225,0.07)` | Hairline borders |
| `--line-strong` | `rgba(232,230,225,0.14)` | Stronger borders |

### Light Mode

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-page` | `#F7F5F2` | Page background |
| `--bg-panel` | `#F2F0ED` | Panels |
| `--bg-card` | `#EEECEA` | Cards |
| `--text-primary` | `#1A1A18` | Body text |
| `--text-secondary` | `#6B6960` | Secondary text |
| `--accent` | `#C8B89A` | Same accent in both modes |

## Typography

### Font Stacks

| Role | Font | Weight |
|------|------|--------|
| Body, UI, code | `'DM Mono', monospace` | 300 (normal), 400 (active states) |
| Headings, logo | `'Cormorant Garamond', serif` | 300 italic (logo), 400 (section headings) |

### Scale

| Element | Size | Weight | Notes |
|---------|------|--------|-------|
| Page title | 32px | 400 | Cormorant Garamond |
| Section heading | 22px | 400 | Cormorant Garamond |
| Sub-heading | 16px | 400 | Cormorant Garamond |
| Body text | 13px | 300 | DM Mono |
| Table text | 12px | 300 | DM Mono |
| Code | 11px | 300 | DM Mono |
| Section labels | 9px | 400 | DM Mono, uppercase, letter-spacing 0.08em-0.14em |
| Badges | 9px | 400 | DM Mono, uppercase, letter-spacing 0.08em |

### Rules

- Line-height: 1.7 for body, 1.2 for headings
- Never use bold (weight above 400)
- `text-transform: uppercase` for section labels
- `letter-spacing: 0.08em` to `0.14em` on uppercase labels

## Spacing

Base unit: 4px. Only these values are used:

| Token | Value |
|-------|-------|
| `--sp-1` | 4px |
| `--sp-2` | 8px |
| `--sp-3` | 12px |
| `--sp-4` | 16px |
| `--sp-6` | 24px |
| `--sp-8` | 32px |
| `--sp-12` | 48px |

## Geometry

No border-radius anywhere. Square corners on everything — buttons, badges, cards, code blocks, scrollbar thumbs, inputs, panels.

## Code Blocks

- Background: `#1A1A18`
- Border: `1px solid rgba(255,255,255,0.06)`
- Font size: 11px
- Padding: 16px
- Font: DM Mono, weight 300

## Badges

- Display: inline
- Padding: 2px 8px
- Font size: 9px
- Letter-spacing: 0.08em
- Border: `1px solid rgba(200,184,154,0.3)`
- Colour: `#C8B89A`
- Text-transform: uppercase

## Links

- Colour: `#C8B89A`
- Underline with `text-underline-offset: 2px`
- Hover: opacity 0.8

## Scrollbars

- Width: 4px
- Track: transparent
- Thumb: `var(--line-strong)`
- No border-radius

## Transitions

- All opacity changes: `0.3s ease`
- All motion slow and deliberate
- No bouncing, no springs
- `prefers-reduced-motion: reduce` disables all animation

## Layout

- Content max-width: 720px, centred
- No spinners — use pulsing text indicators for loading states
- No emoji in UI

## Component Inventory

### Search Bar

Full-width input at top of viewport. DM Mono 16px. Background `--bg-card` with `--line-hairline` border. Focus state: `--accent` border. Search icon left, clear button right. Mode switcher (exact/explore) inline.

### Result Grid

CSS Grid masonry layout. Dynamic column count by viewport width. Image tiles with hover overlay showing title. Lazy-loaded images with placeholder shimmer. Infinite scroll loading.

### Detail View

Full-viewport overlay on `--bg-page` at 0.95 opacity. Centred image with metadata below. Fields: title, artist, date, medium, source link. Arrow keyboard navigation. Deep zoom button for IIIF sources. Colour palette strip. Interpret (cross-reference) button.

### Board View

Freeform canvas. Drag-and-drop images from results. Pan and zoom the canvas. Persisted to localStorage.

### Source Filter Sidebar

Slide-in panel from left. Sources grouped by category (8 categories). Toggle switches per source. Category colour indicators. Select all / deselect all per category.

### Keys Panel

Slide-in panel from right. List of 13 key-required sources. Text input per source. Auto-save to localStorage on input. Visual indicator when key is set.

### Toolbar

Fixed bottom bar. Icons: Search, Sources, Keys, Board, Theme toggle. Keyboard shortcut hints on hover.

## Responsive Breakpoints

| Breakpoint | Columns |
|------------|---------|
| 1400px and above | 6 |
| 1024px and above | 4 |
| 768px and above | 3 |
| 480px and above | 2 |
| Below 480px | 1 |
