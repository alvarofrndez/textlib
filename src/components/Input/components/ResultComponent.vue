<script setup>
    import { defineProps } from 'vue'

    // variables
    const { result } = defineProps(['result'])

</script>

<template>
    <pre class='result' >{{ result }}</pre>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    .result{
        // size
        height: 190px;

        @include input-styles();
    }
</style>