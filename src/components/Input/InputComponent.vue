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

    function copy(){
        navigator.clipboard.writeText(result.value)
        .then(() => {
            toast_s.show('Texto copiado', 'success')
        })
        .catch(err => {
            toast_s.show('Error al copiar', 'error')
        })

    }
</script>

<template>
    <section class='container-inputs'>

        <section class='container-input'>
            <h3 v-if="s_functions.selected_option == 'compare'">Texto a comparar 1</h3>
            <h3 v-else>Texto a convertir</h3>
            <textarea rows='10' cols='50' v-model='text' placeholder='Introduce el texto...'></textarea>
            <input type='file' class='file' name='' id=''>
        </section>

        <section v-if="s_functions.selected_option == 'compare'" class='container-input'>
            <h3>Texto a comparar 2</h3>
            <textarea rows='10' cols='50' v-model='text2' placeholder='Introduce el texto...'></textarea>
            <input type='file' class='file' name='' id=''>
        </section>
        
        <section class='container-dropbox'>
            <DropBoxComponent/>
            <button @click='execute'>Ejecutar</button>
        </section>
        
        <section class='container-input'>
            <h3>Resultado</h3>
            <ResultComponent :result='result'/>
            <div class='actions'>
                <button @click='reset' title='Extraer a fichero'>
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
            @include flex(column, flex-start, center);

            h3{
                height: 10%;
            }

            textarea{
                // size
                width: calc(100% - .5rem * 2);
                height: 80%;

                // decoration
                background-color: $h-c-white;
                border-radius: 5px;
                border: 1px solid $h-c-gray;
                padding: .5rem;
                outline: none;

                &::placeholder {
                    color: $h-c-gray-light;
                }

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

            .file{
                // size
                width: min-content;
                height: 5%;

                // display
                align-self: flex-end;

                // decoration
                margin-top: 5% !important;
                cursor: pointer;
            }

            .actions{
                // size
                height: 10%;

                // display
                align-self: flex-end;
                @include flex(row, flex-end, flex-end, .5rem);

                button{
                    // size
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