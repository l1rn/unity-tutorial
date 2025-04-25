<template>
    <div class="page-wrapper">
        <div class="page-container">
            <div class="title-container">
                <h1>{{ currentPageData?.title }}</h1>
            </div>
            <div class="page-content">
                <div
                class="content" 
                v-html="currentPageData?.content"></div>
            </div>
            <div class="page-controls">
                <button @click="prev" :disabled="currentPage === 0">Назад</button>
                <p>{{ currentPage + 1 }} из {{ pages.length }} Страниц</p>
                <button @click="next" :disabled="currentPage === pages.length - 1">Следующая</button>
            </div>
        </div>
        
    </div>
</template>
<script setup>
import pagesData from "@/content/pages"
import { computed, onMounted, ref } from "vue"

const pages = ref([])
const currentPage = ref(0)

onMounted(() => {
    pages.value = pagesData
})

const currentPageData = computed(() => pages.value[currentPage.value] || {})

function next(){
    if(currentPage.value < pages.value.length - 1) currentPage.value++
}

function prev(){
    if(currentPage.value > 0) currentPage.value--
}
</script>

<style lang="sass">
@import "@/assets/styles/pages/mainpage.sass"
</style>