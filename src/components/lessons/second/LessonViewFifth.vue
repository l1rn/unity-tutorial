<template>
    <div>
        <h2>Механика для машины</h2>
        <div class="content-wrapper-for-fifth">
            <p>
            Теперь у нас есть готовый объект с текстурками. Хотелось бы сейчас уже сделать какую-то механику
            для машины.
            Возьмем наш скрипт<b> Movement</b> с прошлого урока и немного видоизменим его под нашу машину c помощью физики 
            <b>Rigidbody</b> и <b>Коллайдеров</b>. Всю полезную информацию оставил снизу для ознакомления по под
            </p>
            <h3>Для ознакомления</h3>
            <ul>
                <li><a href="https://docs.unity3d.com/ScriptReference/Rigidbody.html" target="_blank">Rigidbody</a></li>
                <li><a href="https://docs.unity3d.com/Manual/mesh-colliders-introduction.html" target="_blank">Mesh
                        Colliders</a></li>
            </ul>
            <div class="add-components-container">
                Перед тем как начать писать скрипт нужно настроить наши объекты, чтобы все работало как часы
                <ol>
                    <li><p></p>Добавьте компонент Rigidbody для всех машин на вашей карте</li>
                    Add Component ➔ Rigidbody
                    <img src="/images/fifth/rigid-body.webp" alt="rigid-body">
                    <li><p>Добавьте компонент Mesh Collider для всех машин с параметром Convex</p></li>
                    Add Component ➔ Mesh Collider ➔ Convex ➔ ✅ 
                    <img src="/images/fifth/mesh-convex.webp" alt="add-collider"> 
                    <li><p>Добавьте скрипт Movement на машину с камерой</p></li>
                </ol>
            </div>
            <div>
                <h3>Скриптинг</h3>
                <p>Для общего видения всей картины приложу вам весь скрипт, где мы добавляем новый метод Rotate, чтобы имитировать поворот машины</p>
                <img src="/images/fifth/script.webp" alt="script">
                <p>
                    Также для интерактивности и видения своего прогресса предлагаю добавить еще 
                    один ассет в виде препятсвий.
                    Можете сделать что-то свое конечно же, это приветсвуется. 
                    Снизу сыллка на скачивание ассета.
                </p>
                <h4>Unity Asset Store - 
                    <a href="https://assetstore.unity.com/packages/3d/props/furniture/cartoon-wooden-box-242926" target="_blank">
                        Cartoon Wooden Box
                    </a>
                </h4>
                <h3>Добавляем препятсвия</h3>
                <img src="/images/fifth/obstacles.webp" alt="obstacles">
                <p>Конечно же натяните на них Rigidbody и Mesh Collider с Convex, чтобы машина могла врезаться в них + выставьте массу в Rigidbody допустим = 20</p>
                <h3>Оффсет для камеры</h3>
                <p>Создадим новый скрипт, который будет делать камеру более <b>"реалистичной"</b>.</p>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped lang="sass">
@import "@/assets/styles/pages/second/second-task.sass"
</style>