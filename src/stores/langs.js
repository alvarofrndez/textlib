import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as spanish from './langs-json/spanish'
import * as english from './langs-json/english'
import * as italian from './langs-json/italian'
import * as portuguese from './langs-json/portuguese'
import * as german from './langs-json/german'

export const langsStore = defineStore('langs', () => {

    let actual_lang = ref({
        text: 'Español',
        key: 'spain',
        variables: spanish.default
    })

    const langs = computed( () =>[
        {
            text: actual_lang.value.variables.langs_options.spanish,
            key: 'spain',
            variables: spanish.default
        },
        {
            text: actual_lang.value.variables.langs_options.english,
            key: 'english',
            variables: english.default
        },
        {
            text: actual_lang.value.variables.langs_options.italian,
            key: 'italian',
            variables: italian.default
        },
        {
            text: actual_lang.value.variables.langs_options.portuguese,
            key: 'portuguese',
            variables: portuguese.default
        },
        {
            text: actual_lang.value.variables.langs_options.german,
            key: 'german',
            variables: german.default
        }
    ])

    function getLangPreference(){
        /**
         * Comprueba si hay una preferencia de idioma en el localstorage
         * devolviendo el idioma o en caso de que no la haya devolviendo
         * Español
         */

        return localStorage.getItem('lang-preference') != null ? localStorage.getItem('lang-preference') : 'spain'
    }

    function changeLang(lang){
        /**
         * Actualiza el actual idioma a la opción que se le pasa
         * y lo actualiza en el local storage
         */

        actual_lang.value = langs.value.find(l => l.key === lang)
        localStorage.setItem('lang-preference', lang)
    }

    return { langs, actual_lang, changeLang, getLangPreference }
})