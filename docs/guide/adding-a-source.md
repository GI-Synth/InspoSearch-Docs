# Adding a Source

This guide walks through contributing a new source to InspoSearch. Every source is defined by a **JSON manifest**, tested with a **3-term test protocol**, and submitted via pull request.

## Source Manifest Schema

Each source is a JSON object in the sources configuration:

```json
{
  "id": "example-museum",
  "name": "Example Museum",
  "category": "museums",
  "homepage": "https://example.org",
  "apiBase": "https://api.example.org/v1",
  "keyRequired": false,
  "keyParam": "",
  "searchEndpoint": "/search",
  "queryParam": "q",
  "perPage": 40,
  "pageParam": "page",
  "resultsPath": "data.items",
  "mapping": {
    "title": "title",
    "imageUrl": "images.web",
    "thumbUrl": "images.thumbnail",
    "sourceUrl": "links.self",
    "artist": "artist_display",
    "date": "date_display",
    "medium": "medium_display"
  }
}
```

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique kebab-case identifier |
| `name` | string | Human-readable display name |
| `category` | string | One of: `museums`, `historical`, `art-design`, `photography`, `nature`, `maps`, `fashion`, `science` |
| `homepage` | string | Institution homepage URL |
| `apiBase` | string | Base URL for API calls |
| `searchEndpoint` | string | Search endpoint path |
| `queryParam` | string | Name of the search query parameter |
| `resultsPath` | string | JSONPath to results array in response |
| `mapping` | object | Maps response fields to InspoSearch schema |

### Optional Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `keyRequired` | boolean | `false` | Whether an API key is needed |
| `keyParam` | string | `""` | Query parameter for passing API key |
| `perPage` | number | `40` | Results per page |
| `pageParam` | string | `"page"` | Pagination parameter name |
| `headers` | object | `{}` | Custom headers for requests |
| `rateLimit` | number | `0` | Min ms between requests (0 = no limit) |

## 3-Term Test Protocol

Before submitting, test your source with three queries:

| Term | Purpose |
|------|---------|
| `landscape` | Common term — should return many results with thumbnails |
| `vermeer` | Specific artist — tests relevance and metadata quality |
| `quilt` | Niche term — tests edge cases and empty-result handling |

For each term, verify:

- Results load without errors in the console
- Thumbnails render correctly
- Clicking an image opens a valid source URL
- Metadata (title, artist, date) displays when available
- Empty results show gracefully (no crash, no infinite loader)

## Step by Step

1. Fork the repo and create a branch: `git checkout -b source/example-museum`
2. Add your manifest JSON to the sources configuration file
3. Run the 3-term test locally and capture screenshots
4. Update SOURCES.md with a new row in the appropriate category table
5. Open a PR with:
   - Source manifest diff
   - SOURCES.md update
   - Screenshots of the 3 test queries
   - Link to the API documentation

## PR Checklist

```
- Source ID is unique and kebab-case
- Source category is correct
- API base URL uses HTTPS
- Response mapping tested with 3-term protocol
- Thumbnails load correctly
- Source URL links back to original record
- SOURCES.md updated
- No API key committed (use keyRequired: true if needed)
- Screenshots attached for all 3 test queries
```

## Tips

- Use your browser's Network tab to understand the API response structure
- If the API requires CORS proxying, note this in your PR — the maintainers will evaluate
- For IIIF-based sources, use the `iiif` adapter type instead of raw REST mapping
- Rate-limited APIs should set `rateLimit` to avoid throttling during parallel search
