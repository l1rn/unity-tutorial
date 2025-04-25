<template>
    <div>
        <button 
            class="menu-button"
            @click="menuStore.toggle()">
            <img
            class="menu-icon" 
            :src="menuStore.isOpen
            ? require('@/assets/menu/menu.svg')
            : require('@/assets/menu/close.svg')" />
        </button>   
        <div 
        class="sidebar-container"
        :style="{width: !menuStore.isOpen
        ? '250px' 
        : '0'}">
            <LessonNav />
        </div>
        <div 
        :style="{opacity: !menuStore.isOpen
            ? '0.3'
            : '0'
        }" 
        @click="menuStore.toggle()"
        class="background-container">    
        </div>
    </div>
</template>
<script setup>
import LessonNav from '../main-page/LessonNav.vue';

import {useMenuStore} from '@/stores/menuStore'

const menuStore = useMenuStore()
</script>
<style lang="sass">
@import '@/assets/styles/sidebar/sidebar.sass'    
</style>