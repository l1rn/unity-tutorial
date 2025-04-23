<template>
  <div class="header-container">
    <div class="left-container">
      <div class="title-container">
        <h2 @click="this.$router.push('/')">unity brain <span>👅</span> tutorial</h2>
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
        @click="this.$router.replace('/api/references')">
          <span class="emoji">📚</span>
          ссылки
        </button>
        <button>
          <span class="emoji">ℹ️</span>
          что такое
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