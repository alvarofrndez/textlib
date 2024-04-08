<script setup>
    import { functionsStore } from '@/stores/functions'
    import { modalStore } from '@/stores/modal';

    // stores
    const functions_s = functionsStore()
    const modal_s = modalStore()

    // functions
    function setOption(e){
        if(e.target.value == 'replace'){
            modal_s.showing = true
            modal_s.component = 'replace'
        }
        functions_s.selected_option = e.target.value
    }
</script>

<template>
    <select id='opciones' name='opciones' @change='(e) => setOption(e)'>
        <option value='' disabled selected hidden></option>
        <option v-for='option of functions_s.options' :value='option.value'>
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