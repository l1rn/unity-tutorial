<template>
    <div class="download-button-wrapper">
        <button 
        @click="downloadPdf"
        class="download-button">
            <img src="@/assets/download.svg" /><label>Скачать</label>
        </button>
        <p></p>
    </div>
    <div class="page-wrapper" ref="pdfContentRef">
        <div class="page-container">
            <div class="title-container">
                <h1>{{ currentPageData?.title }} </h1>    
            </div>           
            <div class="page-content">
                <!-- <div
                    class="content" 
                    v-html="currentPageData?.content">
                </div> -->
                <component class="content" :is="currentPageData?.comp"></component>
                <div 
                    v-if="fullscreenImg" 
                    class="fullsreen-overlay" 
                    @click="fullscreenImg = null">
                    <img :src="fullscreenImg" />
                </div>
            </div>  
        </div>
    </div>
    <div class="page-controls">
        <button class="button-container" @click="prev" :disabled="currentPage === 0">Назад</button>
        <p>{{ currentPage + 1 }} из {{ pages.length }}</p>
        <button class="button-container" @click="next" :disabled="currentPage === pages.length - 1">Вперед</button>
    </div>
</template>
<script setup>
import pagesData from "@/content/pages.js"
import html2pdf from "html2pdf.js"
import { computed, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

const pages = pagesData
const route = useRoute()
const router = useRouter()
const currentPage = ref(0)

if (route.params.page) {
    currentPage.value = Number(route.params.page) - 1
}

watch(() => route.params.page, (newPage) => {
    if(newPage){
        currentPage.value = Number(newPage) - 1
    }
})

const currentPageData = computed(() => pages[currentPage.value] || {})

// next page
function next(){
    const newPageNumber = currentPage.value + 2;
    if (newPageNumber > pages.length) return
    router.push(`/home/lesson/${newPageNumber}`)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// previous page
function prev(){
    const newPageNumber = currentPage.value
    if (newPageNumber < 1) return
    router.push(`/home/lesson/${newPageNumber}`)
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

// pdf
const pdfContentRef = ref(null)

function downloadPdf(){
    const element = pdfContentRef.value
    if(!element) return
    const clone = element.cloneNode(true)
    const pageContainer = clone.querySelector('.page-container')
    if(pageContainer){
        pageContainer.style.width = '100%'
    }

    const tempDiv = document.createElement('div')
    tempDiv.style.position = 'fixed'
    tempDiv.style.left = '-9999px'
    tempDiv.appendChild(clone)
    document.body.appendChild(tempDiv)

    html2pdf(clone, {
    margin: 0,
    filename: `${currentPageData.value.title || 'lesson'}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas: 
        {       
                scale: 2,
                onclone: (clonedDoc) => {
                const container = clonedDoc.querySelector('.page-container')
                if(container){
                    container.style.width = '100%'
                }
            }
        },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  }).finally(() => {
    document.body.removeChild(tempDiv)
  })
}

</script>

<style lang="sass">
@import "@/assets/styles/pages/mainpage.sass"
</style>