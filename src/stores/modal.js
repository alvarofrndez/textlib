import { defineStore } from 'pinia'
import { ref } from 'vue'

export const modalStore = defineStore('modal', () => {

    let showing = ref(false)
    let component = ref('')
    let data = ref({})

    function resetData(){
        data.value = {}
    }

    
    return{ showing, component, data, resetData }
})