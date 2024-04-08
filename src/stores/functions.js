import { defineStore } from 'pinia'
import { toastStore } from '@/stores/toast.js'
import { modalStore } from './modal'
import { ref, computed } from 'vue'
import { langsStore } from './langs'
import CryptoJS from 'crypto-js'

export const functionsStore = defineStore('functions', () => {

  // stores
  const toast_s = toastStore()
  const langs_s = langsStore()
  const modal_s = modalStore()

  // variables
  const options = computed (() =>[
    {
      value: 'compare',
      text: langs_s.actual_lang.variables.dropbox_options.compare
    },
    {
      value: 'uppercase',
      text: langs_s.actual_lang.variables.dropbox_options.uppercase
    },
    {
      value: 'lowercase',
      text: langs_s.actual_lang.variables.dropbox_options.lowercase
    },
    {
      value: 'camelcase',
      text: langs_s.actual_lang.variables.dropbox_options.camelcase
    },
    {
      value: 'capitalletter',
      text: langs_s.actual_lang.variables.dropbox_options.capitalletter
    },
    {
      value: 'encode',
      text: langs_s.actual_lang.variables.dropbox_options.encode
    },
    {
      value: 'decode',
      text: langs_s.actual_lang.variables.dropbox_options.decode
    },
    {
      value: 'replace',
      text: langs_s.actual_lang.variables.dropbox_options.replace
    },
  ])

  const selected_option = ref('')
  const KEY_ENCODE = 'jafh78asfuasf87asfuasdf8asdf'

  // functions
  function execute(text, text2 = ''){
    if(selected_option.value == ''){
      toast_s.show('no has elegido una opcion','info')
      return ''
    }

    let result = ''

    if(text2 != ''){
      result = compare(text, text2)
    }else{
      switch(selected_option.value){
        case 'uppercase':
          result = uppercase(text)
          break
        case 'lowercase':
          result = lowercase(text)
          break
        case 'camelcase':
          result = camelcase(text)
          break
        case 'capitalletter':
          result = capitalletter(text)
          break
        case 'encode':
          result = encode(text)
          break
        case 'decode':
          result = decode(text)
          break
        case 'replace':
          result = replace(text)
          break
      }
    }

    return result
  }

  function compare(text, text2){
    // TODO: sacar las diferencias de los textos en otro color
    if(text == text2)
      return langs_s.actual_lang.variables.compare_text_results.equals
    else
      return langs_s.actual_lang.variables.compare_text_results.distincts
  }

  function uppercase(text){
    return text.toUpperCase()
  }

  function lowercase(text){
    return text.toLowerCase()
  }

  function camelcase(text){
    // TODO: respetar todos los espacios
    let words = text.split(/[\s_-]+/);

    for (var i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join(' ');
  }

  function capitalletter(text){
    return text.replace(/\b\w/g, function(l) { return l.toUpperCase() });
  }

  function encode(text){
    return CryptoJS.AES.encrypt(text, KEY_ENCODE).toString()
  }

  function decode(text){
    return CryptoJS.AES.decrypt(text, KEY_ENCODE).toString(CryptoJS.enc.Utf8)
  }

  function replace(text){
    /**
     * reemplaza todos las cadenas coincidentes en el text por el valor
     * definido
     */
    let result_text = ''

    if(modal_s.data.text_to_replace && modal_s.data.replace_text){
      let escaped_text_to_replace = modal_s.data.text_to_replace.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      
      let regex = new RegExp(escaped_text_to_replace, 'g');
      
      result_text = text.replace(regex, modal_s.data.replace_text);
    }else{
      toast_s.show(langs_s.actual_lang.variables.toast_options.error_replace_text, 'error')
    }

    return result_text
  }

  function downloadFile(content, file_name){
    /**
     * Crea un enlace de descarga con el contenido y nombre del
     * fichero
     */
    const blob = new Blob([content], { type: 'text/plain' });
        
    const download_url = document.createElement('a');
    download_url.href = window.URL.createObjectURL(blob);
    download_url.download = file_name;
    
    download_url.style.display = 'none';
    document.body.appendChild(download_url);
    
    download_url.click();
    
    document.body.removeChild(download_url);
  }

  return { options, selected_option, execute, downloadFile }
})
