<script lang="ts" setup>
import HYWaves from './HYWaves.vue';
import HyHomeArticles from './HyHomeArticles.vue'
import HYHomeSidebar from './HYHomeSidebar.vue'
</script>

<template>
  <div class="HYHomeBody">
    <HYWaves />
    <div class="inner">
      <HyHomeArticles />
      <HYHomeSidebar />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inner {
  width: calc(100% - 0.625rem);
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.HYHomeBody {
  margin-top: 1px;
}

@media (min-width: 1200px) {
  .inner {
    width: 72.5rem;
  }
}

@media (min-width: 1600px) {
  .inner {
    width: 73%;
  }
}
</style>