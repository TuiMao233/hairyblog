<script lang="ts" setup>
import { useSidebar } from '@theme-reco/default/composables/sidebar'
import VPNavBarTitle from '@theme-reco/default/components/VPNavBarTitle.vue'
import VPNavBarSearch from '@theme-reco/default/components/VPNavBarSearch.vue'
import VPNavBarTranslations from '@theme-reco/default/components/VPNavBarTranslations.vue'
import VPNavBarAppearance from '@theme-reco/default/components/VPNavBarAppearance.vue'
import VPNavBarSocialLinks from '@theme-reco/default/components/VPNavBarSocialLinks.vue'
import VPNavBarExtra from '@theme-reco/default/components/VPNavBarExtra.vue'
import VPNavBarHamburger from '@theme-reco/default/components/VPNavBarHamburger.vue'

// custom
import HYNavBarMenu from './HYNavBarMenu.vue'

defineProps<{
  isScreenOpen: boolean
}>()

defineEmits<{
  (e: 'toggle-screen'): void
}>()

const { hasSidebar } = useSidebar()
</script>

<template>
  <div class="VPNavBar" :class="{ 'has-sidebar' : hasSidebar }">
    <div class="container">
      <VPNavBarTitle />
      <div class="content">
        <VPNavBarSearch class="search" />
        <HYNavBarMenu class="menu" />
        <VPNavBarTranslations class="translations" />
        <VPNavBarAppearance class="appearance" />
        <VPNavBarSocialLinks class="social-links" />
        <VPNavBarExtra class="extra" />
        <VPNavBarHamburger
          class="hamburger"
          :active="isScreenOpen"
          @click="$emit('toggle-screen')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPNavBar {
  position: relative;
  border-bottom: 1px solid var(--vp-c-divider-light);
  padding: 0 8px 0 24px;
  height: var(--vp-nav-height-mobile);
  transition: border-color 0.5s, background-color 0.5s;
}

@media (min-width: 768px) {
  .VPNavBar {
    padding: 0 32px;
  }
}

@media (min-width: 960px) {
  .VPNavBar {
    height: var(--vp-nav-height-desktop);
    border-bottom: 0;
  }

  .VPNavBar.has-sidebar .content {
    margin-right: -32px;
    padding-right: 32px;
    -webkit-backdrop-filter: saturate(50%) blur(8px);
    backdrop-filter: saturate(50%) blur(8px);
    background: rgba(255, 255, 255, 0.7);
  }

  .dark .VPNavBar.has-sidebar .content {
    background: rgba(36, 36, 36, 0.7);
  }

  @supports not (backdrop-filter: saturate(50%) blur(8px)) {
    .VPNavBar.has-sidebar .content {
      background: rgba(255, 255, 255, 0.95);
    }

    .dark .VPNavBar.has-sidebar .content {
      background: rgba(36, 36, 36, 0.95);
    }
  }
}

.container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: calc(var(--vp-layout-max-width) - 64px);
}

.content {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
}

.menu + .translations::before,
.menu + .appearance::before,
.menu + .social-links::before,
.translations + .appearance::before,
.appearance + .social-links::before {
  margin-right: 8px;
  margin-left: 8px;
  width: 1px;
  height: 24px;
  background-color: var(--vp-c-divider-light);
  content: "";
}

.menu + .appearance::before,
.translations + .appearance::before {
  margin-right: 16px;
}

.appearance + .social-links::before {
  margin-left: 16px;
}

.social-links {
  margin-right: -8px;
}
</style>
