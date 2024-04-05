<script setup>
    import { functionsStore } from '@/stores/functions';
    import { langsStore } from '@/stores/langs';
    import { modalStore } from '@/stores/modal.js'
    import { ref } from 'vue'

    // stores
    const modal_s = modalStore()
    const functions_s = functionsStore()
    const langs_s = langsStore()
    
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
        <label for='input_name'>{{ langs_s.actual_lang.variables.choose_file_name }}</label>
        <input type='text' name='input_name' v-model='file_name'>
        <button @click='close'>{{ langs_s.actual_lang.variables.accept }}</button>
    </section>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    .container{
        @include flex(column, space-between, center, 2rem);
    }
</style>