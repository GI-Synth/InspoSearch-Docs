# API Contracts

InspoSearch exposes a lightweight client-side API and consumes dozens of external APIs. This page documents both the InspoSearch endpoints and the external API contracts.

## InspoSearch API

Base URL: `https://insposearch.pages.dev`

Rate limit: 60 requests per minute. CORS enabled from `insposearch.pages.dev`.

### GET /search

Search across all enabled sources.

```
GET /search?q={query}&mode={exact|explore}&sources={comma-separated-ids}&limit={number}
```

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `q` | string | yes | -- | Search query |
| `mode` | string | no | `exact` | `exact` or `explore` |
| `sources` | string | no | all | Comma-separated source IDs |
| `limit` | number | no | `40` | Results per source |

Response:

```json
{
  "query": "vermeer",
  "mode": "exact",
  "total": 342,
  "results": [
    {
      "id": "met-437133",
      "sourceId": "met",
      "title": "Girl with a Pearl Earring (copy)",
      "imageUrl": "https://images.metmuseum.org/...",
      "thumbUrl": "https://images.metmuseum.org/.../small.jpg",
      "sourceUrl": "https://metmuseum.org/art/collection/search/437133",
      "artist": "After Johannes Vermeer",
      "date": "late 17th century",
      "medium": "Oil on canvas"
    }
  ]
}
```

### GET /sources

List all available sources.

```
GET /sources?category={category}
```

Response:

```json
{
  "total": 512,
  "categories": ["museums", "historical", "art-design", "photography", "nature", "maps", "fashion", "science"],
  "sources": [
    {
      "id": "met",
      "name": "The Metropolitan Museum of Art",
      "category": "museums",
      "keyRequired": false,
      "homepage": "https://metmuseum.org"
    }
  ]
}
```

### GET /random

Return random images from random sources. Useful for discovery.

```
GET /random?count={number}&category={category}
```

Response: same shape as `/search` results array.

### GET /health

Health check endpoint.

```
GET /health
```

Response:

```json
{
  "status": "ok",
  "sources": 512,
  "version": "1.4.0"
}
```

## Common Normalised Schema

Every external source response is normalised into this shape before being added to the result grid:

```json
{
  "id": "sourceId-recordId",
  "sourceId": "met",
  "title": "Artwork title",
  "imageUrl": "https://full-resolution-url",
  "thumbUrl": "https://thumbnail-url",
  "sourceUrl": "https://link-to-original-record",
  "artist": "Creator name",
  "date": "Date or date range",
  "medium": "Medium / materials",
  "description": "Longer description if available"
}
```

## External Museum APIs

### The Metropolitan Museum of Art

```
GET https://collectionapi.metmuseum.org/public/collection/v1/search?q={query}
  -> { total: number, objectIDs: number[] }

GET https://collectionapi.metmuseum.org/public/collection/v1/objects/{id}
  -> { objectID, title, primaryImage, primaryImageSmall, artistDisplayName, objectDate }
```

Two-step process — search returns IDs, then each object is fetched individually. InspoSearch batches the first 40 IDs per query.

### Rijksmuseum

```
GET https://www.rijksmuseum.nl/api/en/collection?key={apiKey}&q={query}&ps=40&imgonly=True
  -> { artObjects: [{ objectNumber, title, webImage: { url }, principalOrFirstMaker, longTitle }] }
```

Key required: `key` parameter.

### Art Institute of Chicago

```
GET https://api.artic.edu/api/v1/artworks/search?q={query}&limit=40&fields=id,title,image_id,artist_display,date_display,medium_display
  -> { data: [{ id, title, image_id, artist_display, date_display }], config: { iiif_url } }
```

Image URL pattern: `{config.iiif_url}/{image_id}/full/843,/0/default.jpg`

### Cleveland Museum of Art

```
GET https://openaccess-api.clevelandart.org/api/artworks/?q={query}&has_image=1&limit=40
  -> { data: [{ id, title, images: { web: { url } }, creators: [{ description }], creation_date }] }
```

### Harvard Art Museums

```
GET https://api.harvardartmuseums.org/object?apikey={apiKey}&keyword={query}&hasimage=1&size=40
  -> { records: [{ objectid, title, primaryimageurl, people: [{ name }], dated }] }
```

Key required: `apikey` parameter.

## External Archive APIs

### Library of Congress

```
GET https://www.loc.gov/search/?q={query}&fo=json&c=40
  -> { results: [{ title, image_url: [string], url, id }] }
```

### Europeana

```
GET https://api.europeana.eu/record/v2/search.json?wskey={apiKey}&query={query}&rows=40
  -> { items: [{ id, title: [string], edmPreview: [string], dcCreator: [string], year: [string] }] }
```

Key required: `wskey` parameter.

### Smithsonian Open Access

```
GET https://api.si.edu/openaccess/api/v1.0/search?q={query}&rows=40&api_key=YOUR_KEY
  -> { response: { rows: [{ title, id, content: { descriptiveNonRepeating: { online_media: { media: [{ content, thumbnail }] } } } }] } }
```

### Digital Public Library of America

```
GET https://api.dp.la/v2/items?q={query}&page_size=40&api_key={apiKey}
  -> { docs: [{ id, sourceResource: { title, creator, date: [{ displayDate }] }, object, isShownAt }] }
```

Key required: `api_key` parameter.

## External Photography APIs

### Unsplash

```
GET https://api.unsplash.com/search/photos?query={query}&per_page=40
Authorization: Client-ID {apiKey}
  -> { results: [{ id, description, urls: { regular, thumb }, links: { html }, user: { name } }] }
```

Key required: `Authorization` header.

### Flickr Commons

```
GET https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key={apiKey}&text={query}&is_commons=1&per_page=40&format=json&nojsoncallback=1
  -> { photos: { photo: [{ id, title, server, secret, farm }] } }
```

Image URL pattern: `https://live.staticflickr.com/{server}/{id}_{secret}_z.jpg`

Key required: `api_key` parameter.

## Error Handling

All API responses are wrapped in a try/catch. Failed sources are silently skipped — results from successful sources still display. Errors are logged to the browser console with the source ID and HTTP status.

```js
const results = await Promise.allSettled(
  enabledSources.map(source => fetchSource(source, query))
)
results.forEach(r => {
  if (r.status === 'fulfilled') appendResults(r.value)
  else console.warn(`[${r.reason.sourceId}] ${r.reason.message}`)
})
```
