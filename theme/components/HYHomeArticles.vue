<template>
  <div class="HYHomeArticles"> --articles-- </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.HYHomeArticles {
  box-shadow: 0 1.25rem 1rem 0.3125rem rgb(247 247 247);
  width: calc(100% - 15.75rem);
  min-height: 37.5rem;
  position: relative;
  padding: 1.25rem;
  text-align: center;
}

.dark {
  .HYHomeArticles {
    box-shadow: 0 1.25rem 1rem 0.3125rem rgb(20, 20, 20);
  }
}

@media (max-width: 991px) {
 .HYHomeArticles {
    width: 100%;
  }
}
</style>
