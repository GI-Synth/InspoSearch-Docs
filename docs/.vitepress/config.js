import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'InspoSearch',
  description: 'Documentation for InspoSearch — an open-source cultural heritage image search engine. 500+ sources, 3B+ images.',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#0E0E0D' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap',
      },
    ],
  ],

  appearance: 'dark',

  themeConfig: {
    siteTitle: 'insposearch',

    nav: [
      { text: 'GUIDE', link: '/guide/getting-started' },
      { text: 'REFERENCE', link: '/reference/architecture' },
      { text: 'ABOUT', link: '/about/changelog' },
      { text: 'APP', link: 'https://insposearch.pages.dev' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'GUIDE',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Sources', link: '/guide/sources' },
            { text: 'Adding a Source', link: '/guide/adding-a-source' },
            { text: 'API Keys', link: '/guide/api-keys' },
          ],
        },
      ],
      '/reference/': [
        {
          text: 'REFERENCE',
          items: [
            { text: 'Architecture', link: '/reference/architecture' },
            { text: 'API Contracts', link: '/reference/api-contracts' },
            { text: 'Design System', link: '/reference/design-system' },
          ],
        },
      ],
      '/about/': [
        {
          text: 'ABOUT',
          items: [
            { text: 'Changelog', link: '/about/changelog' },
            { text: 'Roadmap', link: '/about/roadmap' },
            { text: 'Contributing', link: '/about/contributing' },
            { text: 'License', link: '/about/license' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GI-Synth/InspoSearch' },
    ],

    footer: {
      message: '<span class="footer-logo">insposearch</span> &middot; <span class="footer-badge">AGPL-3.0</span> &middot; <a href="https://insposearch.pages.dev">app</a> &middot; <a href="https://github.com/GI-Synth/InspoSearch">github</a>',
      copyright: 'Open-source cultural heritage image search. Licensed under the GNU Affero General Public License v3.',
    },

    search: {
      provider: 'local',
    },

    outline: {
      level: [2, 3],
    },
  },
})
