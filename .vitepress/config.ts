import { defineConfig, DefaultTheme } from 'vitepress'
import path from 'path'

const nav: DefaultTheme.NavItem[] = [
  // This link gets active state when the user is
  // on `/config/` path.
  {
    text: '首页',
    link: '/'
  },
  {
    text: '关于',
    link: '/about/'
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
    algolia: {
      appId: '0B89DLR0Q9',
      apiKey: '756e8e048364fae43536c1d0000734a6',
      indexName: 'hairy.blog',
    },
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
    resolve:{
      alias: {
        '~': path.resolve(__dirname, '../theme-default')
      }
    }
  }
})

export default config