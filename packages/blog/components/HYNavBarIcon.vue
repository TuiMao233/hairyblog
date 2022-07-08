<script lang="ts" setup>
import { HairyTheme } from '@/types'
import { defineAsyncComponent } from 'vue'
import {Icon} from '@vicons/utils'

defineProps<{
  type: HairyTheme.NavIcon
}>()

const IconMaps: Record<HairyTheme.NavIcon, any> = {
  github: defineAsyncComponent(() => import('./icons/Github.vue')),
  home: defineAsyncComponent(() => import('./icons/Home.vue')),
  text: defineAsyncComponent(() => import('./icons/Text.vue')),
  link: defineAsyncComponent(() => import('./icons/Link.vue')),
  tag: defineAsyncComponent(() => import('./icons/Tag.vue')),
  time: defineAsyncComponent(() => import('./icons/Time.vue')),
  user: defineAsyncComponent(() => import('./icons/User.vue')),
}

</script>
<template>
  <Icon>
    <component :is="IconMaps[type]" />
  </Icon>
</template>