<template>
  <div>
    <div class="left-container">
      <button 
      class="menu-button"
      @click="menuStore.toggle()">
        <img :src="menuStore.isOpen 
        ? require('@/assets/menu/menu-button.png')
        : require('@/assets/menu/close-button.png')"
        :alt="menuStore.isOpen ? 'Close menu' : 'Open menu'"
        class="menu-item">        
      </button>
    </div>
    <div class="right-container">
      
    </div>
  </div>
</template>

<script setup>
import useMenuStore from "@/stores/menuStore"

const menuStore = useMenuStore()
</script>

<style scoped lang="sass">
@import "@/assets/styles/home/header.sass"
</style>