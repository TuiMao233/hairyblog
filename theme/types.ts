import { DefaultTheme } from 'vitepress'
export declare namespace HairyTheme {
  export interface Config extends DefaultTheme.Config {
    nav?: NavItem[]
  }

  // nav -----------------------------------------------------------------------

  export type NavItem = NavItemWithLink | DefaultTheme.NavItemWithChildren

  export type NavIcon = 'home' | 'github' | 'tag' | 'time' | 'link' | 'text' | 'user'

  export type NavItemWithLink = DefaultTheme.NavItemWithLink & { icon?: NavIcon }
}