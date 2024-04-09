<script setup>
    import { functionsStore } from '@/stores/functions';
    import { langsStore } from '@/stores/langs';
    import { modalStore } from '@/stores/modal.js'
    import { ref } from 'vue'

    // stores
    const modal_s = modalStore()
    const langs_s = langsStore()
    
    // variables
    const all_words = ref([])
    const actual_word = ref('')

    function close(){
        modal_s.data.all_words = all_words.value
        modal_s.showing = false
        modal_s.component = ''
    }

    function addWord(){
        if(!all_words.value.includes(actual_word.value))
            all_words.value.push(actual_word.value)
        actual_word.value = ''
    }

    function deleteWord(index){
        all_words.value.splice(index, 1)
    }
</script>

<template>
    <section class='container'>
        <p for='input_actual_word'>{{ langs_s.actual_lang.variables.add_word_counts }}</p>
        
        <div class='container-add'>
            <input type='text' name='input_actual_word' v-model='actual_word'>

            <button @click='addWord'> 
                <img src='/src/assets/images/success.svg' :alt='langs_s.actual_lang.variables.add'>
            </button>
        </div>

        <div class='container-words'>
            <div v-for='word of all_words'> 
                <span>{{ word }}</span>
                <button @click='() => deleteWord(all_words.indexOf(word))'>
                    <img src='/src/assets/images/delete.svg' :alt='langs_s.actual_lang.variables.delete'>
                </button>
            </div>
        </div>
        
        <button @click='close'>{{ langs_s.actual_lang.variables.accept }}</button>
    </section>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    .container{
        // display
        @include flex(column, space-between, center, 1.5rem);

        .container-add{
            // display
            @include flex(row, center, space-between, .5rem);

            button{
                // size
                width: 30px;
                height: 30px;

                // display
                @include flex();

                img{
                    // size
                    width: 15px;
                    height: 15px;
                }
            }
        }

        .container-words{
            // display
            @include flex(column, flex-start, flex-start, .5rem);

            div{
                // size
                width: 100%;
                @include flex();
                
                span{
                    // size
                    width: 90%;
                }

                button{
                    // size
                    width: 30px;
                    height: 30px;

                    // display
                    @include flex();

                    img{
                        // size
                        width: 15px;
                        height: 15px;
                    }
                }
            }
        }

        button{
            // size
            width: 50%;

            @include button();
            align-self: center;
        }
    }
</style>