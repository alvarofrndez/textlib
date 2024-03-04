<script setup>
    import { defineProps } from 'vue'

    // variables
    const { result } = defineProps(['result'])

</script>

<template>
    <span class='result'>{{ result }}</span>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    .result{
        // size
        width: calc(100% - .5rem * 2);
        height: 80%;

        // decoration
        background-color: $h-c-white;
        border-radius: 5px;
        border: 1px solid $h-c-gray;
        padding: .5rem;
        overflow-y: scroll;
        overflow-wrap: break-word;
        text-wrap: wrap;

        &::-webkit-scrollbar{
            // size
            width: 10px;
        }

        &::-webkit-scrollbar-thumb{
            // decoration
            background-color: $h-c-white-dark;
            border-radius: 5px;
            cursor: pointer;
        }
    }
</style>