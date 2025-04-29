<template>
    <div class="nav-container">
        <div class="title-container">
            <button
            @click="
            $router.push('/home/lesson/1'); 
            menuStore.toggle();
            scrollToTop()">
                <img src="@/assets/menu/home.svg" alt="">
                <span>Главная</span>
            </button>
            <button
            @click="
            $router.push('/references');
            menuStore.toggle();
            scrollToTop()">
                <img src="@/assets/menu/reference.svg" alt="">
                <span>Ссылки</span>
            </button>
            <button
            @click="
            $router.push('/about');
            menuStore.toggle();
            scrollToTop()">
                <img src="@/assets/menu/info.svg" alt="">
                <span>Что такое</span>
            </button>
        </div>
        <hr class="line-container">
        <div class="item-container">
            <label class="easy-label">Глава 1</label>
            <nav>
                <button
                @click="
                $router.push('/home/lesson/2');
                menuStore.toggle();
                scrollToTop()">
                    <span class="task-container">1</span>
                    <span class="task-word">Начало пути</span>
                </button>
                <button
                @click="
                $router.push('/home/lesson/3');
                menuStore.toggle();
                scrollToTop()">
                    <span class="task-container">2</span>
                    <span class="task-word">Окружение Unity</span>
                </button>
                <button
                @click="
                $router.push('/home/lesson/4');
                menuStore.toggle();
                scrollToTop()">
                    <span class="task-container">3</span>
                    <span class="task-word">Первый скрипт</span>
                </button>
            </nav>
        </div>
        <hr class="line-container">
        <div class="item-container">
            <label class="medium-label">Глава 2</label>
            <nav>
                <button
                @click="$router.push('/home/lesson/5');
                menuStore.toggle();
                scrollToTop()">
                    <span class="task-container">1</span>
                    <span class="task-word">Ассеты</span>
                </button>
                <button
                @click="$router.push('/home/lesson/6');
                menuStore.toggle();
                scrollToTop()">
                    <span class="task-container">2</span>
                    <span class="task-word">Механика машины</span>
                </button>
                <button>
                    <span class="task-container">3</span>
                    <span class="task-word">task3</span>
                </button>
            </nav>
        </div>
        <hr class="line-container">
        <div class="item-container">
            <label class="hard-label">Глава 3</label>
            <nav>
                <button><span class="task-container">1</span><span class="task-word">task1</span></button>
                <button><span class="task-container">2</span><span class="task-word">task2</span></button>
                <button><span class="task-container">3</span><span class="task-word">task3</span></button>
            </nav>
        </div>
        
    </div>
</template>
<script setup>
import { useMenuStore } from '@/stores/menuStore';

const menuStore = useMenuStore();

const scrollToTop = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>
<style lang="sass">
@import "@/assets/styles/sidebar/nav.sass"
</style>