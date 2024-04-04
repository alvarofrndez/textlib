<script setup>
    import { functionsStore } from '@/stores/functions';
import { modalStore } from '@/stores/modal.js'
    import { ref } from 'vue'

    // stores
    const modal_s = modalStore()
    const functions_s = functionsStore()
    
    // variables
    const file_name = ref('')

    function close(){
        functions_s.downloadFile(modal_s.data.content, file_name.value)
        modal_s.resetData()
        modal_s.showing = false
        modal_s.component = ''
    }
</script>

<template>
    <section class='container'>
        <label for='input_name'>Escoja el nombre del archivo</label>
        <input type='text' name='input_name' v-model='file_name'>
        <button @click='close'>Aceptar</button>
    </section>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    .container{
        @include flex(column, space-between, center, 2rem);
    }
</style>