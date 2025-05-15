<template>
<div>
    <SidebarView />
    <HeaderView />
    <div class="about-project">
    <div class="hero-section">
      <h1>🎮 Unity Journey 2D/3D</h1>
      <p class="subtitle">Полное погружение в создание 2D/3D-игр</p>
    </div>

    <div class="section">
      <h2>🚀 Что это за проект?</h2>
      <div class="content-box">
        <p>Это практико-ориентированное руководство для:</p>
        <ul class="feature-list">
          <li>🔥 Начинающих геймдев-энтузиастов</li>
          <li>🎯 Художников, переходящих в программирование</li>
          <li>💡 Преподавателей игровых дисциплин</li>
        </ul>
        <h3>🚸 Схема проекта</h3>
        <img src="/images/project-scheme.webp" alt="Схема проекта" class="project-scheme">
      </div>
    </div>

    <div class="section dark-bg">
      <h2>⭐ Особенности проекта</h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="icon">🛠️</div>
          <h3>Практика через действие</h3>
          <p>Создание полноценной игры поэтапно</p>
        </div>
        
        <div class="feature-card">
          <div class="icon">🎨</div>
          <h3>2D-специфика</h3>
          <p>Тайлмапы, пиксель-арт, анимации</p>
        </div>

        <div class="feature-card">
          <div class="icon">🧩</div>
          <h3>Модульная структура</h3>
          <p>От основ до продвинутых техник</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🔧 Стек технологий</h2>
      <div class="tech-stack">
        <div class="tech-item">
          <img src="@/assets/icons/unity-logo-black.svg" alt="Unity">
          <h3>Unity 6 LTS</h3>
        </div>
        <div class="tech-item">
          <img src="@/assets/icons/Logo_C_sharp.svg.png" alt="C#">
          <h3>C# .NET</h3>
        </div>
        <div class="tech-item">
          <img src="@/assets/icons/polzunova.png" alt="Aseprite">
          <h3>Ползунова</h3>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>📚 Что внутри?</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker">1</div>
          <div class="timeline-content">
            <h3>Основы движка</h3>
            <p>Интерфейс, настройка проекта, первые объекты</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-marker">2</div>
          <div class="timeline-content">
            <h3>2D Графика</h3>
            <p>Работа со спрайтами, тайлмапами, анимациями</p>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-marker">3</div>
          <div class="timeline-content">
            <h3>Игровая логика</h3>
            <p>Персонаж, физика, взаимодействия</p>
          </div>
        </div>
      </div>
    </div>

    <div class="cta-section">
      <h2>Готовы начать?</h2>
      <a @click="$router.push('/home/lesson/1'); scrollToTop()" class="cta-button">🎮 Начать обучение</a>
      <p class="cta-note">Бесплатно · Ползунова:) · Пошаговые инструкции</p>
    </div>
  </div>
</div>
</template>

<script setup>
import HeaderView from "@/components/main-page/HeaderView.vue"
import SidebarView from "@/components/sidebar-menu/SidebarView.vue"

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<style scoped lang="sass">
@import "@/assets/styles/about.sass"
</style>