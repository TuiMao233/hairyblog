<!--.vitepress/theme/MyLayout.vue-->
<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import { useRouter } from 'vitepress'
import { watch } from 'vue';


const { Layout } = DefaultTheme

const router = useRouter()
watch(router.route, (route) => {
  console.log(route)
})
</script>

<template>
  <Layout>
    <template #aside-outline-before>
    </template>
  </Layout>
</template>