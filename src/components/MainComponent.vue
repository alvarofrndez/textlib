<script setup>
    import InputComponent from '@/components/Input/InputComponent.vue'
</script>

<template>
    <main class='main'>
        <InputComponent/>
    </main>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    .main{
        // size
        width: 90%;

        @media (max-width: 1000px) {
            width: 100%;
        }
    }
</style>