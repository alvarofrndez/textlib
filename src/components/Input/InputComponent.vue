<script setup>
    import { ref } from 'vue'
    import { functionsStore } from '@/stores/functions'
    import { toastStore } from '@/stores/toast.js'
    import DropBoxComponent from './components/DropBoxComponent.vue'
    import ResultComponent from './components/ResultComponent.vue'

    // stores
    const s_functions = functionsStore()
    const toast_s = toastStore()

    // variables
    const text = ref('')
    const text2 = ref('')
    const result = ref('')

    // functions 
    function execute(){
        if(text.value != ''){
            if(s_functions.selected_option == 'compare')
                result.value = s_functions.execute(text.value, text2.value)
            else
                result.value = s_functions.execute(text.value)
        }else{
            toast_s.show('el texto está vacío', 'info')
        }
    }

    function reset(){
        text.value = ''
        text2.value = ''
        result.value = ''
        s_functions.selected_option = ''
    }
</script>

<template>
    <section class='container-inputs'>
        <DropBoxComponent/>
        <span>{{ s_functions.selected_option }}</span>
        <textarea rows='10' cols='50' v-model='text'></textarea>
        <textarea v-if="s_functions.selected_option == 'compare'" rows='10' cols='50' v-model='text2'></textarea>
        <ResultComponent :result='result'/>
        <button @click='execute'>Ejecutar</button>
        <button @click='reset'>Vaciar</button>
    </section>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';
</style>