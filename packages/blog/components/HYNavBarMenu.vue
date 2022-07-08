<script lang="ts" setup>
import { useData } from 'vitepress'
import HYNavBarMenuLink from './HYNavBarMenuLink.vue'
import HYNavBarMenuGroup from './HYNavBarMenuGroup.vue'

const { theme } = useData()
</script>

<template>
  <nav v-if="theme.nav" aria-labelledby="main-nav-aria-label" class="HYNavBarMenu">
    <span id="main-nav-aria-label" class="visually-hidden">Main Navigation</span>
    <template v-for="item in theme.nav" :key="item.text">
      <HYNavBarMenuLink v-if="'link' in item" :item="item" />
      <HYNavBarMenuGroup v-else :item="item" />
    </template>
  </nav>
</template>

<style scoped>
.HYNavBarMenu {
  display: none;
}

@media (min-width: 768px) {
  .HYNavBarMenu {
    display: flex;
  }
}
</style>
