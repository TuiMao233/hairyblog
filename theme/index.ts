import { useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { watch } from 'vue'
import Layout from './Layout.vue'

import "./components/loading"
import "./style/font-face.scss"
import "./style/vars.scss"

export default {
  ...DefaultTheme,
  enhanceApp(options: any) {
  },
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: Layout
}

export * from './types'