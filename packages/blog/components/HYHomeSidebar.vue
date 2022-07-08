<template>
  <div class="HYHomeSidebar">
    <div class="user-info">
      <img class="avatar" :src="theme.user.avatar" />
      <div class="name">{{ theme.user.name }}</div>
      <div class="description">{{ theme.user.description }}</div>
    </div>
    <div class="">

    </div>
  </div>
</template>

<script lang="ts" setup>
import { useData } from 'vitepress';
import { HairyTheme } from '@/types'
const { theme } = useData<HairyTheme.Config>()
</script>

<style lang="scss" scoped>
.HYHomeSidebar {
  padding-top: 0.625rem;
  position: static;
  width: 15rem;
  top: 0;
  bottom: 0;
  transition: all .2s ease-in-out 0s;
  text-align: center;
  border-radius: 0.25rem;
  min-height: 37.5rem;
}

@media (max-width: 991px) {
  .HYHomeSidebar {
    display: none;
    position: fixed;
    right: 0;
    background: var(--grey-1);
    box-shadow: 0 0.375rem 0.9375rem 0.3125rem rgb(0 0 0 / 20%);
    z-index: 99;
  }
}

.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.avatar {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
}
.name {
  margin-top: 10px;
}
.description {
  margin-top: 10px;
  color: var(--vp-c-text-3);
}
</style>
