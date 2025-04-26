<template>
    <div class="page-wrapper" ref="pdfContentRef">
        <div class="page-container">
            <div class="title-container">
                <h1>{{ currentPageData?.title }} </h1>
                <button 
                @click="downloadPdf"
                class="button-container download-button">
                    <img src="@/assets/download.svg" />
                </button>
            </div>
            
            <div class="page-content">
                <div
                class="content" 
                v-html="currentPageData?.content"></div>
            </div>
            <div class="page-controls">
                <button class="button-container" @click="prev" :disabled="currentPage === 0">Назад</button>
                <p>{{ currentPage + 1 }} из {{ pages.length }}</p>
                <button class="button-container" @click="next" :disabled="currentPage === pages.length - 1">Вперед</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import pagesData from "@/content/pages"
import html2pdf from "html2pdf.js"
import { computed, onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

const pages = ref([])
const route = useRoute()
const router = useRouter()
const currentPage = ref(0)

if (route.params.page) {
    currentPage.value = Number(route.params.page) - 1
}

onMounted(() => {
    pages.value = pagesData
})

watch(() => route.params.page, (newPage) => {
    if(newPage){
        currentPage.value = Number(newPage) - 1
    }
})

const currentPageData = computed(() => pages.value[currentPage.value] || {})

function next(){
    const newPageNumber = currentPage.value + 2;
    if (newPageNumber > pages.value.length) return
    router.push(`/home/lesson/${newPageNumber}`)
}

function prev(){
    const newPageNumber = currentPage.value
    if (newPageNumber < 1) return
    router.push(`/home/lesson/${newPageNumber}`)
}

const pdfContentRef = ref(null)

function downloadPdf(){
    const element = pdfContentRef.value
    if(!element) return
    html2pdf(element, {
    margin: 0,
    filename: `${currentPageData.value.title || 'lesson'}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  })
}
</script>

<style lang="sass">
@import "@/assets/styles/pages/mainpage.sass"
</style>