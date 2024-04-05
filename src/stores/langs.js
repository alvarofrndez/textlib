import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import * as spanish from './langs-json/spanish'
import * as english from './langs-json/english'
import * as italian from './langs-json/italian'
import * as portuguese from './langs-json/portuguese'

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
        }
    ])

    function changeLang(lang){
        switch (lang){
            case 'spain':
                actual_lang.value = langs.value[0]
                break
            case 'english':
                actual_lang.value = langs.value[1]
                break
            case 'italian':
                actual_lang.value = langs.value[2]
                break
            case 'portuguese':
                actual_lang.value = langs.value[3]
                break
        }
    }

    return { langs, actual_lang, changeLang }
})