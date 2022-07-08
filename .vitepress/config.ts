import { defineConfigWithTheme } from 'vitepress'
import { HairyTheme } from '@theme-reco/blog'
import path from 'path'
const nav: HairyTheme.NavItem[] = [
  // This link gets active state when the user is
  // on `/config/` path.
  {
    text: '首页',
    icon: 'home',
    link: '/'
  },
  {
    text: '关于',
    icon: 'user',
    link: '/about/'
  },
  {
    text: 'github',
    icon: 'github',
    link: 'https://github.com/TuiMao233'
  }
]

const config = defineConfigWithTheme<HairyTheme.Config>({
  vite: {
    resolve: {
      alias: {
        '@theme-reco/blog': path.resolve(__dirname, '../packages/blog'),
        '@theme-reco/default': path.resolve(__dirname, '../packages/default')
      }
    }
  },
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
    user: {
      name: 'Mr.Mao',
      description: '没有特别意义',
      avatar: 'https://tuimao233.gitee.io/mao-blog/avatar.png'
    },
    sidebar: [
      {
        text: '交叉学科',
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
  }
})

export default config