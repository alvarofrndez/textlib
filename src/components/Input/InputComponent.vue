<script setup>
    import { ref } from 'vue'
    import { functionsStore } from '@/stores/functions'
    import { toastStore } from '@/stores/toast.js'
    import { modalStore } from '@/stores/modal.js'
    import { langsStore } from '@/stores/langs'
    import DropBoxComponent from './components/DropBoxComponent.vue'
    import ResultComponent from './components/ResultComponent.vue'

    // stores
    const s_functions = functionsStore()
    const toast_s = toastStore()
    const modal_s = modalStore()
    const langs_s = langsStore()

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

    function fileSelected(e){
        let file = e.target.files[0]

        readFile(file, text)
        
    }

    function fileSelectedText2(e){
        let file = e.target.files[0]

        readFile(file, text2)
    }

    function readFile(file, text){
        if(file){
            let reader = new FileReader()

            reader.onload = function(e) {
                text.value = e.target.result
            }
            
            reader.readAsText(file)
        }else{
            toast_s.show('No existe el archivo', 'error')
        }
    }

    function exportToFile(){
        modal_s.data = {
            content : result.value
        }
        modal_s.showing = true
        modal_s.component = 'info'
    }

    function copy(){
        navigator.clipboard.writeText(result.value)
        .then(() => {
            toast_s.show('Texto copiado', 'success')
        })
        .catch(err => {
            toast_s.show('Error al copiar', 'error')
        })

    }

    function executeClickFile(type){
        /**
         * Ejecuta el click en el input tipo file dependiendo del tipo
         */
        let element = type == 1 ? document.getElementsByClassName('file_input')[0] : document.getElementsByClassName('file_input')[1]
        element.click()
    }

    document.addEventListener('keypress', (e) => {
        if(e.key == 'Enter'){
            e.preventDefault()
            execute()
        }
    })
</script>

<template>
    <section class='container-inputs'>

        <section class='container-input'>
            <h3 v-if="s_functions.selected_option == 'compare'">{{ langs_s.actual_lang.variables.text_to_compare1 }}</h3>
            <h3 v-else>{{ langs_s.actual_lang.variables.text_to_convert }}</h3>
            <textarea rows='10' cols='50' v-model='text' :placeholder='langs_s.actual_lang.variables.placeholder_input'></textarea>
            <input type='file' class='file_input ' name='' @change='(e) => fileSelected(e)'>
            <div class='container-actions'>
                <button class='reset-input-file'>{{ langs_s.actual_lang.variables.reset }}</button>
                <div class='file'>
                    <img src='/src/assets/images/import_file.svg' title='importar archivo' @click="() => executeClickFile(1)"/>
                </div>
            </div>
        </section>

        <section v-if="s_functions.selected_option == 'compare'" class='container-input'>
            <h3>{{ langs_s.actual_lang.variables.text_to_compare2 }}</h3>
            <textarea rows='10' cols='50' v-model='text2' placeholder='Introduce el texto...'></textarea>
            <input type='file' class='file_input' name='' @change='(e) =>fileSelectedText2(e)'>
            <div class='container-actions'>
                <div class='file'>
                    <img src='/src/assets/images/import_file.svg' title='importar archivo' @click="() => executeClickFile(2)"/>
                </div>
            </div>
        </section>
        
        <section class='container-dropbox'>
            <DropBoxComponent/>
            <button @click='execute'>{{ langs_s.actual_lang.variables.execute }}</button>
        </section>
        
        <section class='container-input'>
            <h3>{{ langs_s.actual_lang.variables.result }}</h3>
            <ResultComponent :result='result'/>
            <div class='actions'>
                <button v-if="result != ''" @click='exportToFile' title='Extraer a fichero'>
                    <img src='/src/assets/images/download.svg' alt='extraer'>
                </button>
                <button @click='reset' title='Borrar datos'>
                    <img src='/src/assets/images/erase.svg' alt='borrar'>
                </button>
                <button @click='copy' title='Copiar'>
                    <img src='/src/assets/images/copy.svg' alt='copiar'>
                </button>
            </div>
        </section>
    
    </section>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    .container-inputs{
        // size
        height: 100%;
        width: 100%;

        // display
        @include flex(row, center, space-evenly);

        .container-input{
            // size
            height: 100%;
            width: 25%;
            
            // display
            @include flex(column, flex-start, space-between);

            h3{
                height: 10%;
            }

            textarea{
                @include input-styles();
            }

            .container-actions{
                // display
                align-self: flex-end;
                @include flex();

                // decoration
                margin-top: 5% !important;

                .reset-input-file{
                    // display
                    display: none;
                }

                .file{
                    // size
                    height: 30px;
                    width: 30px;

                    // display
                    @include flex();

                    // decoration
                    border-radius: 50%;
                    cursor: pointer;
                    background-color: $h-c-white-dark;

                    img{
                        // size
                        width: 15px;
                        height: 15px;
                    }
                }
            }

            .file_input{
                display: none;
            }

            .actions{
                // size
                height: 10%;

                // display
                align-self: flex-end;
                @include flex(row, flex-end, flex-end, .5rem);

                button{
                    // size
                    width: 30px;
                    height: 30px;

                    // display
                    @include flex();
                    
                    // decoration
                    border-radius: 15px;
                    border: none;
                    background-color: $h-c-white-dark;
                    cursor: pointer;

                    img{
                        // size
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }

        .container-dropbox{
            // size
            height: 50%;

            // display
            @include flex(column, center, space-between);

            button{
                // size
                width: 100%;

                // margin
                padding: .2rem;

                @include button();
            }
        }
    }
</style>