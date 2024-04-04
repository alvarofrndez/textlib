import { defineStore } from 'pinia'
import { toastStore } from '@/stores/toast.js'
import { ref } from 'vue'

export const functionsStore = defineStore('functions', () => {

  // stores
  const toast_s = toastStore()

  // variables
  const options = [
    {
      value: 'compare',
      text: 'comparar'
    },
    {
      value: 'uppercase',
      text: 'a mayusculas'
    },
    {
      value: 'lowercase',
      text: 'a minisculas'
    },
    {
      value: 'camelcase',
      text: 'a camelcase'
    },
    {
      value: 'capitalletter',
      text: 'a capital letter'
    },
  ]
  const selected_option = ref('')

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
      }
    }

    return result
  }

  function compare(text, text2){
    // TODO: sacar las diferencias de los textos en otro color
    if(text == text2)
      return 'textos iguales'
    else
      return 'textos distintos'
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
