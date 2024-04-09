<script setup>
    import { defineProps } from 'vue'

    // variables
    const { result } = defineProps(['result'])

</script>

<template>
    <p class='result'>{{ result }}</p>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    .result{
        @include input-styles();
    }
</style>