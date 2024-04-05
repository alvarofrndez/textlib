<script setup>
    import { langsStore } from '@/stores/langs.js'

    const langs_s = langsStore()

    function changeLang(e){
        langs_s.changeLang(e.target.value)
    }

    langs_s.changeLang(langs_s.getLangPreference())
</script>

<template>
    <li>
        <select name='lang' id='lang' @change='(e) => changeLang(e)'>
            <option v-for='lang of langs_s.langs' :value='lang.key' :selected='lang.key == langs_s.actual_lang.key ? true : false'>
                {{ lang.text }}
            </option>
        </select>
    </li>
</template>

<style lang='scss' scoped>
    @import '@/assets/style.scss';

    li{
        select{
            @include dropbox();
        }
    }
</style>