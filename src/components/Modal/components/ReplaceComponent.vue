<script setup>
    import { functionsStore } from '@/stores/functions';
    import { langsStore } from '@/stores/langs';
    import { modalStore } from '@/stores/modal.js'
    import { ref } from 'vue'

    // stores
    const modal_s = modalStore()
    const langs_s = langsStore()
    
    // variables
    const text_to_replace = ref('')
    const replace_text = ref('')

    function close(){
        modal_s.data.text_to_replace = text_to_replace.value
        modal_s.data.replace_text = replace_text.value
        modal_s.showing = false
        modal_s.component = ''
    }
</script>

<template>
    <section class='container'>
        <div>
            <label for='input_name'>{{ langs_s.actual_lang.variables.text_to_replace }}</label>
            <input type='text' name='input_name' v-model='text_to_replace'>
        </div>
        <div>
            <label for='input_name'>{{ langs_s.actual_lang.variables.replace_text }}</label>
            <input type='text' name='input_name' v-model='replace_text'>
        </div>
        <button @click='close'>{{ langs_s.actual_lang.variables.accept }}</button>
    </section>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    .container{
        // display
        @include flex(column, space-between, center, 2rem);

        div{
            // display
            @include flex(row, center, space-between, 2rem);
        }

        button{
            // size
            width: 50%;

            @include button();
            align-self: center;
        }
    }
</style>