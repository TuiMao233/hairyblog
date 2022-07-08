<script setup lang="ts">
import { provide } from 'vue'
import { useSidebar, useCloseSidebarOnEscape } from '@theme-reco/default/composables/sidebar'
import VPSkipLink from '@theme-reco/default/components/VPSkipLink.vue'
import VPBackdrop from '@theme-reco/default/components/VPBackdrop.vue'
import HYNav from './components/HYNav.vue'
import VPLocalNav from '@theme-reco/default/components/VPLocalNav.vue'
import VPSidebar from '@theme-reco/default/components/VPSidebar.vue'
import HYContent from './components/HYContent.vue'
import VPFooter from '@theme-reco/default/components/VPFooter.vue'

import HYHomeHero from './components/HYHomeHero.vue';
import HYHomeBody from './components/HYHomeBody.vue'

const {
  isOpen: isSidebarOpen,
  open: openSidebar,
  close: closeSidebar
} = useSidebar()

useCloseSidebarOnEscape(isSidebarOpen, closeSidebar)

provide('close-sidebar', closeSidebar)
</script>

<template>
  <div class="Layout">
    <slot name="layout-top" />
    <VPSkipLink />
    <VPBackdrop class="backdrop" :show="isSidebarOpen" @click="closeSidebar" />
    <HYNav />
    <VPLocalNav :open="isSidebarOpen" @open-menu="openSidebar" />
    <VPSidebar :open="isSidebarOpen" />

    <HYContent>
      <template #home-hero-before>
        <HYHomeHero />
      </template>
      <template #home-body>
        <HYHomeBody />
      </template>
      <template #home-hero-after><slot name="home-hero-after" /></template>
      <template #home-features-before><slot name="home-features-before" /></template>
      <template #home-features-after><slot name="home-features-after" /></template>

      <template #doc-before><slot name="doc-before" /></template>
      <template #doc-after><slot name="doc-after" /></template>

      <template #aside-top><slot name="aside-top" /></template>
      <template #aside-bottom><slot name="aside-bottom" /></template>
      <template #aside-outline-before><slot name="aside-outline-before" /></template>
      <template #aside-outline-after><slot name="aside-outline-after" /></template>
      <template #aside-ads-before><slot name="aside-ads-before" /></template>
      <template #aside-ads-after><slot name="aside-ads-after" /></template>
    </HYContent>
    <VPFooter />
    <slot name="layout-bottom" />
  </div>
</template>

<style scoped>
.Layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
