import { useRouter } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { watch } from 'vue'
import MyLayout from '../theme-default/Layout.vue'

import { show, hide } from "./components/loading"

import "./style/font-face.scss"
import "./style/vars.scss"

show()

window.addEventListener('load', hide)

export default {
  ...DefaultTheme,
  enhanceApp(options: any) {
  },
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout
}