<script setup>

    function close(e){
        console.log(e.target)
        e.target.parentNode.parentNode.style.visibility = 'hidden'
    }
</script>

<template>
    <aside>
        <div>
            <img @click='(e) => close(e)' src='/src/assets/images/close.svg' alt=''>
        </div>
        <img src='' alt=''>
    </aside>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    aside{
        border: 1px solid $h-c-gray;
        // size
        width: 50%;
        height: 10%;

        // positon
        position: relative;

        // margin
        margin-bottom: 10px;

        div{
            width: 10px;
            height: 10px;

            // position
            position: absolute;
            right: 0;

            img{
                // size
                width: 100%;
                height: 100%;

                // decoration
                cursor: pointer;
            }

        }
    }
</style>