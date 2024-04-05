<script setup>
    import { functionsStore } from '@/stores/functions'

    // stores
    const s_functions = functionsStore()

    // functions
    function setOption(e){
        s_functions.selected_option = e.target.value
    }
</script>

<template>
    <select id='opciones' name='opciones' @change='(e) => setOption(e)'>
        <option value='' disabled selected hidden></option>
        <option v-for='option of s_functions.options' :value='option.value'>
            {{ option.text }}
        </option>
    </select>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    select{
        @include dropbox();
    }
</style>