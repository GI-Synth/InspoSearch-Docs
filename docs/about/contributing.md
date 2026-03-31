# Contributing

## Ways to Contribute

- Add a source — the most impactful contribution. See [Adding a Source](/guide/adding-a-source)
- Fix a bug — check the [issue tracker](https://github.com/insposearch/insposearch/issues) for `bug` labels
- Improve docs — spot a typo or gap? edit and PR
- Suggest a feature — open an issue with `feature-request` label
- Report a broken source — if a source stops returning results, file an issue with the source name

## Development Setup

```bash
git clone https://github.com/insposearch/insposearch.git
cd insposearch

# No build step — open index.html directly, or use a local server:
npx serve .

# Or with npm:
npm start
```

InspoSearch has no build tooling, no bundler, no npm dependencies in the main app. Vanilla HTML/CSS/JS.

## Project Structure

```
insposearch/
  index.html           single entry point
  app.js               main module
  search/              search orchestration
  sources/             source manifests + adapters
  ui/                  UI components
  ai/                  optional AI integrations
  state/               state management
  utils/               shared utilities
  SOURCES.md           source registry
  ARCHITECTURE.md      technical overview
  API_CONTRACTS.md     API documentation
  DESIGN_SYSTEM.md     visual design reference
  CONTRIBUTING.md      this file's source
  CHANGELOG.md         version history
  ROADMAP.md           planned features
```

## Code Style

- No frameworks — vanilla JS only
- ES modules — all files use `import` / `export`
- DM Mono for all UI text
- Dark-first — design for dark backgrounds by default
- No semicolons — ASI-safe style
- Single quotes for strings
- `const` by default, `let` only when reassignment is needed
- Never use font-weight above 400
- No border-radius anywhere

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(sources): add National Diet Library
fix(search): prevent duplicate results on rapid Enter
docs: update SOURCES.md with new museum entries
style(ui): adjust grid gap on mobile
```

## Pull Request Process

1. Fork the repo and create a feature branch
2. Make changes with clear, small commits
3. Test locally — verify the app loads and search works
4. Update docs if your change affects SOURCES.md, API_CONTRACTS.md, etc.
5. Open a PR targeting `main` with a clear description

### PR Requirements

- Descriptive title following conventional commit format
- Screenshots for UI changes
- Updated SOURCES.md if adding a source
- 3-term test screenshots if adding a source (see [Adding a Source](/guide/adding-a-source))
- No unrelated changes bundled in

## Reporting Issues

Include: browser and version, steps to reproduce, expected vs. actual behaviour, console errors, screenshot for UI bugs.

## License

InspoSearch is released under the **AGPL-3.0-only** (GNU Affero General Public License v3). By contributing, you agree that your contributions will be licensed under the same license. See the [License](/about/license) page for the full text.
