<script setup>
  import { RouterView } from 'vue-router'
  import { toastStore } from '@/stores/toast.js'
  import { modalStore } from '@/stores/modal.js'
  import ToastComponent from '@/components/ToastComponent.vue'
  import ModalComponent from '@/components/Modal/ModalComponent.vue'

  const toast_s = toastStore()
  const modal_s = modalStore()
</script>

<template>
  <RouterView />
  <ToastComponent v-if='toast_s.showing'/>
  <ModalComponent v-if='modal_s.showing'/>
</template>

<style scoped lang='scss'>
  @import '@/assets/style.scss';

</style>
