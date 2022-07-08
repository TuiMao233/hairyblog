<script lang="ts" setup>
import { HairyTheme } from '@/types'
import { useData } from 'vitepress'
import { isActive } from '~/support/utils'
import VPLink from '~/components/VPLink.vue'
import HYNavBarIcon from './HYNavBarIcon.vue'

defineProps<{
  item: HairyTheme.NavItemWithLink
}>()

const { page } = useData()
</script>

<template>
  <VPLink
    :class="{
      VPNavBarMenuLink: true,
      active: isActive(
        page.relativePath,
        item.activeMatch || item.link,
        !!item.activeMatch
      )
    }"
    :href="item.link"
    :noIcon="true"
  >
    <HYNavBarIcon class="VPNavBarMenuIcon" v-if="item.icon" :type="item.icon" />
    <span>{{ item.text }}</span>
  </VPLink>
</template>

<style scoped>
.VPNavBarMenuLink {
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: var(--vp-nav-height-mobile);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}
.VPNavBarMenuIcon {
  margin-right: 8px;
}

.VPNavBarMenuLink.active {
  color: var(--vp-c-brand);
}

.VPNavBarMenuLink:hover {
  color: var(--vp-c-brand);
}

@media (min-width: 1280px) {
  .VPNavBarMenuLink {
    line-height: var(--vp-nav-height-desktop);
  }
}
</style>
