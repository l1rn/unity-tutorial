<template>
<div>
  <SidebarView />
  <HeaderView />
  <LessonView />
  <FooterView />
</div>

</template>

<script setup>
import HeaderView from "@/components/main-page/HeaderView.vue"
import LessonView from "@/components/main-page/LessonView.vue"
import SidebarView from "@/components/sidebar-menu/SidebarView.vue"
import FooterView from "@/components/FooterView.vue"
</script>

<style scoped lang="sass">
@import '@/assets/styles/home/home.sass'
</style>
