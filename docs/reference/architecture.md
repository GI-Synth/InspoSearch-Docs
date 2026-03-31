# Architecture

InspoSearch is a single-page application built with vanilla JavaScript. The entire app runs in the browser — no backend server, no build step, no framework.

## Module Map

```
app.js
  search/
    searchController.js    orchestrates parallel searches
    queryBuilder.js        builds API URLs from source manifests
    responseParser.js      normalises responses to common schema
  sources/
    sourceRegistry.js      source manifest store and lookup
    sourceCategories.js    category grouping logic
    adapters/
      restAdapter.js       generic REST API adapter
      iiifAdapter.js       IIIF manifest adapter
      scrapeAdapter.js     HTML scraping adapter
  ui/
    resultGrid.js          masonry image grid rendering
    detailView.js          full-size image and metadata panel
    boardView.js           freeform pinboard canvas
    searchBar.js           input handling and keyboard shortcuts
    sourceFilter.js        sidebar source toggles
    keysPanel.js           API key management UI
    deepZoom.js            OpenSeadragon IIIF viewer
    constellation.js       3D point cloud visualisation
    colourExtract.js       dominant colour extraction
    themeManager.js        dark/light theme state
  ai/
    aiController.js        optional AI research assistant
    providers/
      gemini.js            Google Gemini adapter
      claude.js            Anthropic Claude adapter
      openai.js            OpenAI adapter
      ollama.js            Ollama local adapter
  state/
    store.js               central state container
    actions.js             state mutation functions
    persistence.js         localStorage read/write
  utils/
    debounce.js            input debouncing
    imageProxy.js          CORS proxy for thumbnails
    rateLimit.js           per-source rate limiter
    offlineCache.js        service worker cache layer
```

## Data Flow

```
User types query
       |
       v
  searchBar.js
       |
       v
  searchController.js --- for each enabled source ---> queryBuilder.js
       |                                                     |
       |                                             builds API URL
       |                                                     |
       |                        <-- parallel fetch() calls --+
       |
       v
  responseParser.js --- normalise to common schema
       |
       v
    store.js --- update state with new results
       |
       v
   resultGrid.js --- render image tiles
       |
       v
  User clicks image
       |
       v
   detailView.js --- show full metadata + source link
       |
       +---> deepZoom.js (if IIIF)
       +---> colourExtract.js (extract palette)
       +---> aiController.js (optional analysis)
       +---> Interpret: cross-reference across sources
```

## State Management

InspoSearch uses a minimal custom store pattern:

```js
const state = {
  query: '',
  mode: 'exact',
  results: [],
  sources: [],
  enabledSources: [],
  apiKeys: {},
  loading: false,
  selectedImage: null,
  board: [],
  constellation: null,
  aiProvider: null,
}
```

State flows one-way: actions mutate the store, UI modules subscribe to changes via a simple event emitter.

### Key State Transitions

| Action | Trigger | State Change |
|--------|---------|--------------|
| SEARCH_START | User presses Enter | `loading: true`, `results: []` |
| RESULTS_APPEND | A source responds | Append to `results`, re-render grid |
| SEARCH_COMPLETE | All sources resolved | `loading: false` |
| SELECT_IMAGE | User clicks thumbnail | `selectedImage` set, open detail view |
| TOGGLE_SOURCE | Sidebar checkbox | Update `enabledSources` |
| SET_API_KEY | Keys panel input | Update `apiKeys`, save to `localStorage` |
| PIN_TO_BOARD | Board action | Add image to `board` array |
| SET_MODE | Mode switcher | Toggle `mode` between exact and explore |
| SET_AI_PROVIDER | AI config | Set `aiProvider` (gemini, claude, openai, ollama) |

## Key Design Decisions

1. No framework — vanilla JS for zero build overhead and instant load
2. No backend — all API calls go directly from browser to source APIs
3. Parallel fetch — all enabled sources queried simultaneously via `Promise.allSettled()`
4. Progressive rendering — results appear as each source responds, not after all complete
5. Local-only persistence — API keys, boards, and preferences stored in `localStorage`
6. Optional AI — AI features are completely optional. The app works fully without any AI integration
7. IIIF-native — deep zoom for any IIIF-compatible source via OpenSeadragon
