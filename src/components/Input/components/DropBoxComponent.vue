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
        // decoration
        background-color: $h-c-white;
        border-radius: 5px;
        border: 1px solid $h-c-black;
        outline: none;

        option{
            // decoration
            background-color: $h-c-white;
            border: 1px solid $h-c-gray;
            border-radius: 5px;

            &:hover{
                background-color: $h-c-gray-light !important;
            }
        }
    }
</style>