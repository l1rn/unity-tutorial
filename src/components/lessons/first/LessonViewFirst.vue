<template>
    <div>
        <h2>🚀 Начало пути</h2>
        <hr />
        <div class="first-task-container">
            <p><b>1.</b> 🧩 Перед тем как начать, нужно скачать сам Unity, это можно сделать по <a href="https://unity.com/download" target="_blank">ссылке</a>, после скачивания приступаем к другому пункту</p>
            <img src="/images/first/download.webp" @click="openFull('/images/first/download.webp')" alt="download" />
            
            <p><b>2.</b>✅ Почти готово! После установки ищем 'Unity Hub' и запускаем. Осталось лишь войти в аккаунт и скачать сам движок Unity, приступим! Если аккаунта не было, создайте его <br /></p>
            <img src="/images/first/sign-in.webp" alt="sign-in" />
            <p><b>3.</b>📦 После входа в ваш аккаунт нас интересует 'Installs' здесь нам надо установить движок, нажимаем на 'Install Editor', где выбираем версию Unity 6 LTS(Long time support)</p>
            <img src="/images/first/download-unity-core.webp" alt="download-unity-core.webp" /><img src="/images/first/choose-lts.webp" alt="create-project" />
            <p>
                <b>4.</b>🎨 Такс, разобрались с движком, теперь осталось создать проект в которым вы уже будете творить магию, нажимаем на кнопку 'New project'. Здесь мы выбираем Univesal 3D, задаем удобные вам параметры и создаем проект
                'Create project'
            </p>
            <img src="/images/first/create-project.webp" />
            <p>📚 В целом заданий нет доп. заданий можете показать результат преподавателю, если он конечно вообще будет проверять, да и все:)</p>
            <p>🎊 Ура! В этом мини модуле вы научились создавать Unity проект. Дальше мы научимся основному инструментарию юнити -> Если у вас все получилось можете переходить к следующему таску.</p>
        </div>
        <div v-if="fullscreenImg" class="fullscreen" @click="closeFull">
            <img :src="fullscreenImg" />
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const fullscreenImg = ref(null)

const openFull = (imgSrc) => {
    console.log(fullscreenImg.value)
    fullscreenImg.value = imgSrc
}

const closeFull = () => {
    fullscreenImg.value = null
}
</script>
<style scoped>
img {
    cursor: pointer;
}
first-task-container {
  max-width: 100%;
  cursor: pointer;
}

.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.fullscreen img {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}
</style>