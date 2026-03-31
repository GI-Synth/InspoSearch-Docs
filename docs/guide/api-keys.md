# API Keys

Most of InspoSearch's 500+ sources work without authentication. **13 sources** require an API key. Keys are stored in your browser's `localStorage` and are sent only to the respective API provider.

## Sources Requiring Keys

| Source | Category | Where to Get a Key |
|--------|----------|-------------------|
| Rijksmuseum | Museums | [rijksmuseum.nl/en/rijksstudio](https://www.rijksmuseum.nl/en/rijksstudio) — free account |
| Harvard Art Museums | Museums | [harvardartmuseums.org/collections/api](https://harvardartmuseums.org/collections/api) — request access |
| Cooper Hewitt, Smithsonian | Museums | [collection.cooperhewitt.org/api](https://collection.cooperhewitt.org/api/) — create a token |
| Europeana | Historical | [pro.europeana.eu/page/get-api](https://pro.europeana.eu/page/get-api) — free registration |
| Digital Public Library of America | Historical | [dp.la/info/developers/codex](https://dp.la/info/developers/codex) — request a key |
| National Library of Australia (Trove) | Historical | [trove.nla.gov.au/about/create-something/using-api](https://trove.nla.gov.au/about/create-something/using-api) — free sign-up |
| Unsplash | Photography | [unsplash.com/developers](https://unsplash.com/developers) — register an app |
| Flickr | Photography | [flickr.com/services/api](https://www.flickr.com/services/api/) — apply for a key |
| Pixabay | Photography | [pixabay.com/api/docs](https://pixabay.com/api/docs/) — free API key |
| Pexels | Photography | [pexels.com/api](https://www.pexels.com/api/) — free sign-up |
| Noun Project | Art and Design | [thenounproject.com/developers](https://thenounproject.com/developers/) — register an app |
| YouTube (thumbnails) | Science | [console.cloud.google.com](https://console.cloud.google.com/) — enable YouTube Data API v3 |
| Giphy | Art and Design | [developers.giphy.com](https://developers.giphy.com/) — create an app |

## How to Add a Key

1. Open [InspoSearch](https://insposearch.pages.dev)
2. Press `k` or click the Keys icon in the toolbar to open the Keys panel
3. Find the source in the list
4. Paste your API key into the input field
5. The key saves to `localStorage` immediately — no submit button
6. Close the panel and search. Results from that source will now appear

## Key Storage and Privacy

Keys are stored only in your browser's `localStorage`. They are sent only to the respective API endpoint — your Rijksmuseum key goes only to `api.rijksmuseum.nl`, for example. InspoSearch has no backend server and there is nowhere for keys to be forwarded. Clearing your browser data removes stored keys. You can remove a key at any time by clearing the field in the Keys panel.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Source still shows no results after adding key | Verify the key is valid by testing the API URL directly in your browser |
| Key disappeared | Browser data was cleared — re-enter the key |
| Unauthorized errors in console | The key may have expired or been revoked — generate a new one |
| Rate limit errors | Some APIs have daily limits on free keys — wait and retry later |
