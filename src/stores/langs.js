import { defineStore } from 'pinia'
import { ref } from 'vue'

export const langsStore = defineStore('langs', () => {

    let actual_lang = ref({
        text: 'Español',
        key: 'spain',
        variables: {
            route_information: 'información',
            route_otra: 'otra',
            choose_file_name: 'Escoja el nombre del archivo',
            accept: 'Aceptar',
            text_to_compare1: 'Texto a comparar 1',
            text_to_compare2: 'Texto a comparar 2',
            text_to_convert: 'Texto a convertir',
            reset: 'Resetear',
            execute: 'Ejecutar',
            result: 'Resultado',
            placeholder_input: 'Introduce el texto...'
        }
    })

    const langs = ref([
        {
            text: 'Español',
            key: 'spain',
            variables: {
                route_information: 'información',
                route_otra: 'otra',
                choose_file_name: 'Escoja el nombre del archivo',
                accept: 'Aceptar',
                text_to_compare1: 'Texto a comparar 1',
                text_to_compare2: 'Texto a comparar 2',
                text_to_convert: 'Texto a convertir',
                reset: 'Resetear',
                execute: 'Ejecutar',
                result: 'Resultado',
                placeholder_input: 'Introduce el texto...'
            }
        },
        {
            text: 'Inglés',
            key: 'english',
            variables: {
                route_information: "information",
                route_otra: "another",
                choose_file_name: "Choose file name",
                accept: "Accept",
                text_to_compare1: "Text to compare 1",
                text_to_compare2: "Text to compare 2",
                text_to_convert: "Text to convert",
                reset: "Reset",
                execute: "Execute",
                result: "Result"
            }
        },
        {
            text: 'Italiano',
            key: 'italian',
            variables: {
                route_information: "informazione",
                route_otra: "un altro",
                choose_file_name: "Scegli il nome del file",
                accept: "Accetta",
                text_to_compare1: "Testo da confrontare 1",
                text_to_compare2: "Testo da confrontare 2",
                text_to_convert: "Testo da convertire",
                reset: "Reset",
                execute: "Esegui",
                result: "Risultato"
            }
        },
        {
            text: 'Portugues',
            key: 'portuguese',
            variables: {
                route_information: "informação",
                route_otra: "outro",
                choose_file_name: "Escolha o nome do arquivo",
                accept: "Aceitar",
                text_to_compare1: "Texto para comparar 1",
                text_to_compare2: "Texto para comparar 2",
                text_to_convert: "Texto para converter",
                reset: "Redefinir",
                execute: "Executar",
                result: "Resultado"
            }
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