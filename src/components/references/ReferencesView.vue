<template>
  <div>
    <SidebarView />
    <HeaderView />
    <div class="resources-page">
      <div class="header-section">
        <h1>🚀 Ресурсы для изучения Unity</h1>
        <p>Подборка материалов для эффективного обучения</p>
      </div>

      <!-- Основные категории -->
      <div class="category-block">
        <h2>🎯 Официальные ресурсы</h2>
        <div class="resource-card">
          <a href="https://learn.unity.com/" target="_blank" class="resource-link">
            <h3>Unity Learn</h3>
            <p>Официальная платформа с интерактивными курсами и проектами</p>
            <span class="tag">Бесплатно</span>
          </a>
        </div>

        <div class="resource-card">
          <a href="https://docs.unity3d.com/Manual/index.html" target="_blank" class="resource-link">
            <h3>Документация Unity</h3>
            <p>Полное руководство по всем компонентам и API</p>
          </a>
        </div>
      </div>

      <!-- Видеоуроки -->
      <div class="category-block">
        <h2>🎥 Видео каналы</h2>
        <div class="resource-grid">
          <div class="resource-card">
            <a href="https://www.youtube.com/c/Brackeys" target="_blank" class="resource-link">
              <h3>Brackeys</h3>
              <p>Лучший канал для начинающих (архив)</p>
              <span class="tag">На английском</span>
            </a>
          </div>

          <div class="resource-card">
            <a href="https://www.youtube.com/c/CodeMonkeyUnity" target="_blank" class="resource-link">
              <h3>Code Monkey</h3>
              <p>Продвинутые техники и оптимизация</p>
            </a>
          </div>
        </div>
      </div>

      <!-- Платформы с курсами -->
      <div class="category-block">
        <h2>📚 Платформы</h2>
        <div class="resource-grid">
          <div class="resource-card">
            <a href="https://www.coursera.org/specializations/game-development" target="_blank" class="resource-link">
              <h3>Coursera</h3>
              <p>Сертифицированные курсы по геймдеву</p>
              <span class="tag">Платно</span>
            </a>
          </div>

          <div class="resource-card">
            <a href="https://www.udemy.com/course/unitycourse/" target="_blank" class="resource-link">
              <h3>Udemy: Complete C# Unity Game Developer</h3>
              <p>Самый популярный курс на платформе</p>
            </a>
          </div>
        </div>
      </div>

      <!-- Ассеты и инструменты -->
      <div class="category-block">
        <h2>🛠️ Полезные инструменты</h2>
        <div class="resource-grid">
          <div class="resource-card">
            <a href="https://assetstore.unity.com/" target="_blank" class="resource-link">
              <h3>Unity Asset Store</h3>
              <p>Официальный магазин готовых ассетов</p>
            </a>
          </div>

          <div class="resource-card">
            <a href="https://kenney.nl/assets" target="_blank" class="resource-link">
              <h3>Kenney Assets</h3>
              <p>Бесплатные 2D/3D ассеты</p>
              <span class="tag">CC0 License</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Сообщества -->
      <div class="category-block">
        <h2>👥 Сообщества</h2>
        <div class="resource-grid">
          <div class="resource-card">
            <a href="https://forum.unity.com/" target="_blank" class="resource-link">
              <h3>Официальный форум Unity</h3>
              <p>Помощь от разработчиков и комьюнити</p>
            </a>
          </div>

          <div class="resource-card">
            <a href="https://www.reddit.com/r/Unity3D/" target="_blank" class="resource-link">
              <h3>Reddit: Unity3D</h3>
              <p>Активное сообщество разработчиков</p>
            </a>
          </div>
        </div>
      </div>

      <!-- Советы -->
      <div class="tips-section">
        <h2>💡 Советы по обучению</h2>
        <div class="tips-grid">
          <div class="tip-card">
            <h3>Практикуйтесь</h3>
            <p>Сразу применяйте знания в маленьких проектах</p>
          </div>

          <div class="tip-card">
            <h3>Изучайте код</h3>
            <p>Анализируйте примеры из Asset Store</p>
          </div>

          <div class="tip-card">
            <h3>Участвуйте в джемах</h3>
            <p>GameJolt и itch.io проводят регулярные конкурсы</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterView />

</template>

<script setup>
import HeaderView from "@/components/main-page/HeaderView.vue"
import SidebarView from "@/components/sidebar-menu/SidebarView.vue"
import FooterView from "../FooterView.vue";

</script>

<style scoped lang="sass">
@import "@/assets/styles/references.sass"
</style>