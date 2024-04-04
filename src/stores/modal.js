import { defineStore } from 'pinia'
import { ref } from 'vue'

export const modalStore = defineStore('modal', () => {

    let showing = ref(false)
    let component = ref('')

    
    return{ showing, component }
})