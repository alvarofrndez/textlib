<script setup>
    import { ref } from 'vue'
    import { functionsStore } from '@/stores/functions'
    import { toastStore } from '@/stores/toast.js'
    import DropBoxComponent from './components/DropBoxComponent.vue'

    // stores
    const s_functions = functionsStore()
    const toast_s = toastStore()

    // variables
    const text = ref('')
    const result = ref('')

    // functions 
    function execute(){
        if(text.value != ''){
            result.value = s_functions.execute(text.value)
            console.log(result.value)
        }else{
            toast_s.show('el texto está vacío', 'info')
        }
    }

    function reset(){
        text.value = ''
        result.value = ''
        s_functions.selected_option = ''
    }
</script>

<template>
    <section class='container-inputs'>
        <DropBoxComponent/>
        <span>{{ s_functions.selected_option }}</span>
        <textarea rows='10' cols='50' v-model='text'></textarea>
        <span>{{ result }}</span>
        <button @click='execute'>Ejecutar</button>
        <button @click='reset'>Vaciar</button>
    </section>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';
</style>