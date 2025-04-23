<template>
<div>
<HeaderView></HeaderView>
<div class="menu-container">
    <label for="">Меню</label>

</div>
<button 
      class="menu-button"
      @click="menuStore.toggle()">
      <span class="emoji-icon">
        {{ menuStore.isOpen ? '🍔' : '❌' }}
      </span>    
      </button>
</div>

</template>

<script setup>
import HeaderView from "@/components/main-page/HeaderView.vue"
import {useMenuStore} from '@/stores/menuStore'

const menuStore = useMenuStore()
</script>

<style scoped lang="sass">
@import '@/assets/styles/home/home.sass'
</style>
