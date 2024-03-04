<script setup>
  import { RouterView } from 'vue-router'
  import { toastStore } from '@/stores/toast.js'
  import ToastComponent from '@/components/ToastComponent.vue'

  const toast_s = toastStore()
</script>

<template>
  <RouterView />
  <ToastComponent v-if='toast_s.showing'/>
</template>

<style scoped lang='scss'>
  @import '@/assets/style.scss';

</style>
