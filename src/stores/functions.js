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
      // comparar textos
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

  function uppercase(text){
    return text.toUpperCase()
  }

  function lowercase(text){
    return text.toLowerCase()
  }

  function camelcase(text){
    let words = text.split(/[\s_-]+/);

    for (var i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join('');
  }

  function capitalletter(text){
    return text.replace(/\b\w/g, function(l) { return l.toUpperCase() });
  }
  return { options, selected_option, execute }
})
