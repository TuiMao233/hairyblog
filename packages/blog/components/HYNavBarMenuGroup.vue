<script lang="ts" setup>
import { useData } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { isActive } from '@theme-reco/default/support/utils'
import VPFlyout from '@theme-reco/default/components/VPFlyout.vue'

defineProps<{
  item: DefaultTheme.NavItemWithChildren
}>()

const { page } = useData()
</script>

<template>
  <VPFlyout :class="{
    VPNavBarMenuGroup: true,
    active: isActive(
      page.relativePath,
      item.activeMatch,
      !!item.activeMatch
    )
  }" :button="item.text" :items="item.items" />
</template>
