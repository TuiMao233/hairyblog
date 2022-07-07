import { defineConfig, DefaultTheme } from 'vitepress'
import path from 'path'

const nav: DefaultTheme.NavItem[] = [
  // This link gets active state when the user is
  // on `/config/` path.
  {
    text: '首页',
    link: '/'
  }
]

const config = defineConfig({
  title: `Mr.Mao's blog`,
  titleTemplate: 'Vite & Vue powered static site generator',
  description: 'For man is man and master of his fate.',
  head: [],
  srcDir: 'docs',
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: 'Section Title A',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Item A', link: '/' },
        ]
      },
      {
        text: 'Section Title B',
        collapsible: true,
        items: [
          { text: 'Item B', link: '/item-b' },
        ]
      }
    ],
    nav,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  },
  vite: {
    alias: {
      '~': path.resolve('../theme-default')
    }
  }
})

export default config