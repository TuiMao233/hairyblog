import DefaultTheme from 'vitepress/theme'
import { Loading } from './components/loading'
import MyLayout from './Layout.vue'

import "./style/main.scss"


export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout
}