<template>
  <div class="header-container">
    <div class="left-container">
      <div class="title-container">
        <h2 @click="this.$router.push('/')">unity <span>🕹️</span> tutorial</h2>
      </div>
      
    </div>
    <div class="right-container">
      <div class="sub-right-container">
        <button
        @click="this.$router.push('/')">
          <span class="emoji">🏠</span>
          главная
        </button>
        <button
        @click="this.$router.push('/references')">
          <span class="emoji">📚</span>
          ссылки
        </button>
        <button
        @click="$router.push('/home/lesson/1')">
          <span class="emoji">🦣</span>
          туториал
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped lang="sass">
@import "@/assets/styles/home/header.sass"
</style>