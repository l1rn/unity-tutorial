import { defineStore } from "pinia";
import { ref } from "vue";

export const useMenuStore = defineStore('menu', () => {
    const isOpen = ref(true)
    const toggle = () => isOpen.value = !isOpen.value
    return { isOpen, toggle }
})