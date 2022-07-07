<!--.vitepress/theme/MyLayout.vue-->
<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { useRouter } from 'vitepress'

const router = useRouter()

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      My custom sidebar top content
    </template>
  </Layout>
</template>