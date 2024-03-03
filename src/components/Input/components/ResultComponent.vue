<script setup>
    import { ref, defineProps } from 'vue'
    import { functionsStore } from '@/stores/functions'
    import { toastStore } from '@/stores/toast.js'

    // stores
    const s_functions = functionsStore()
    const toast_s = toastStore()

    // variables
    const { result } = defineProps(['result'])

</script>

<template>
    <span>{{ result }}</span>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';
</style>