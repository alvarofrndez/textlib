<script setup>
    import { modalStore } from '@/stores/modal.js'
    import InfoComponent from './components/InfoComponent.vue'
    import DownloadComponent from './components/DownloadComponent.vue'

    // stores
    const modal_s = modalStore()

    function close(e){
        const wrapper = document.querySelector('.wrapper') 

        if(e.target == wrapper){
            modal_s.showing = false
            modal_s.component = ''
        }
    }
</script>

<template>
    <section class='wrapper' @click='(e) => close(e)'>
        <InfoComponent v-if="modal_s.component == 'info'"/>
        <DownloadComponent v-if="modal_s.component == 'download'"/>
    </section>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    .wrapper{
        // size
        width: 100vw;
        height: 100vh;

        // position
        top: 0;
        left: 0;
        position: absolute;
        z-index: 1000000;

        // display
        @include flex();

        // decoration
        background-color: rgba($color: $h-c-black, $alpha: .1);
        cursor: pointer;

        
        .container{
            // margin
            padding: 15px;

            // decoration
            background-color: $h-c-white;
            border-radius: 15px;
            cursor: initial;
        }
    }
</style>