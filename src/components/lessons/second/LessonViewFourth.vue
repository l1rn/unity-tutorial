<template>
    <div class="sixth">
        <h2>🚗 Знакомство с ассетами в Unity</h2>
        <hr>
        <div class="first-section">
            <div class="info-tip">
                <p>
                    ℹ️ <b>Важное предупреждение!</b> 
                    В этом модуле будет меньше объяснений кода — я хочу, 
                    чтобы вы активнее изучали документацию. 
                    Ниже я даю ссылки на официальные материалы Unity для самостоятельного изучения.
                </p>
            </div>
            <p>🎯 <b>Цель модуля:</b> 
                создать базовую механику с машинами, чтобы понять принципы работы с ассетами.
            </p>
            <ol>
                <li>
                    <h3>📥 Загрузка ассетов</h3>
                    <p>
                        Скачайте готовые ассеты машин и дороги. Вы можете использовать <b>ОДИН</b> из этих вариантов:
                    </p>
                    <ul>
                        <li style="list-style: none;">🔹 
                            <a href="https://assetstore.unity.com/packages/3d/vehicles/land/arcade-free-racing-car-161085" target="_blank">
                                Официальный ассет из Unity Asset Store
                            </a>
                        </li>
                        <li style="list-style: none;">🔹 
                            <a href="https://drive.google.com/file/d/1LLaVDFnSonCq9RSx-oNUq_juUbgND7FG/view" target="_blank">
                                Готовый Unity Package с Google Диска
                            </a>
                        </li>
                        <p class="help-tip">💡 <b>Совет:</b> Если чувствуете себя уверенно, можете создать свою модель в Blender! 🌟</p>
                    </ul>
                </li>
                <li>
                    <h3>📦 Импорт ассетов в проект</h3>
                    <div class="download-section">

                        <p><b>Вариант 1:</b> Если скачали через Asset Store:</p>
                        <div class="asset-store">
                            <p>Asset Store → Package Manager → <i>ARCADE:FREE Racing Car</i> → Import → Ждем завершения.</p>
                            <img src="/images/fourth/my-assets.webp" alt="Импорт ассетов через Asset Store">
                        </div>

                        <hr>

                        <p><b>Вариант 2:</b> Если использовали .unitypackage:</p>
                        <div class="unitypackage-import">
                            <p>Assets → Import Package → Custom Package → Выбираем скачанный файл.</p>
                            <img src="/images/fourth/google-import.webp" alt="Импорт через .unitypackage">
                        </div>
                        
                    </div>
                </li>
                <li>
                    <h3>🛣️ Работа со сценой</h3>
                    <p>Откройте готовую сцену из пакета (обычно она называется <i>Day</i> или подобное).</p>
                    <img src="/images/fourth/scene.webp" alt="">
                </li>
                <li>
                    <h3>🎨 Настройка материалов</h3>
                    <p>1. 
                        <b>Дорога:</b> Выберите объект <i>Road</i> 
                        → в материалах смените Shader на 
                        <code>URP/Lit</code> → перетащите текстуру.
                    </p>
                    <img src="/images/fourth/shader-choose.webp" alt="">
                    <p>2. <b>Машина:</b></p>
                    <ul>
                        <li style="list-style: none;">
                            🔹 Оставьте только одну машину на сцене (остальные удалите)
                        </li>
                        <li style="list-style: none;">
                            🔹 Для каждого элемента (кузов, спойлер) установите Shader 
                            <code>URP/Lit</code>
                        </li>
                        <li style="list-style: none;">
                            🔹 Настройте цвета в разделах <i>Albedo</i> и 
                            <i>Base Map</i>
                        </li>
                    </ul>
                    <br>
                    <div class="work-example">
                        <ul>
                            <li>Body ➔ Shader ➔ URP/Lit</li>
                            <li>Spoiler ➔ Shader ➔ URP/Lit</li>
                            <li>Material ➔ Main Maps ➔ Albedo ➔ Цвет</li>
                            <li>Material ➔ Surface Options ➔ Base Map ➔ Цвет</li>
                        </ul>  
                    </div>
                    
                    <img src="/gifs/fourth/car-material.gif" alt="car-gif">
                    <a href="https://gifyu.com/image/bLXs1" target="_blank" class="gif-link">🔗 Альтернативная ссылка на GIF</a>            

                    <h4>Результат всего этого, с вашим цветом будет такой:</h4>
                </li>
                <li>
                    <h3>🏆 Результат</h3>
                    <img src="/images/fourth/car-material.webp" alt="material-car">
                </li>
            </ol>
            <hr>
            <div class="task-title">
                <h3 style="background: #1E293B; border-radius: 8px; padding: .4rem; color: aliceblue;">📝 Задание: Настройка сцены</h3>
                
                <ol style="max-width: 800px;">
                    <li><p>🛣️ Расширьте дорожное полотно для движения машины</p></li>
                    <li><p>❌ Удалите старую камеру</p></li>
                    <li><p>🎥 Создайте и настройте камеру в режим "от третьего лица"</p></li>
                    <li><p>🔗 Сделайте камеру дочерним объектом машин</p></li>
                    <li><p>🎨 Перекрасьте все материалы в папке <i>Color Variations</i> в разные цвета</p></li>
                    <li><p>🚗 Добавьте новую модель машины (не копию!) из <i>Package/Meshes/</i></p></li>
                    <li><p>🖌️ Примените один из материалов на новую машину</p></li>
                </ol>
                <div class="warning-block">
                    <p>⚠️ <b>Важно!</b> Новая модель машины должна быть другой (не копией существующей) и не должна иметь светящихся фар!</p>
                </div>
                
                <div class="hint-block">
                    <p class="special-tip-for-task">💡 <b>Подсказка 1:</b> Не забывайте про Shader <code>URP/Lit</code> для всех материалов</p>
                    <p class="special-tip-for-task">🔍 <b>Подсказка 2:</b> Предпросмотр камеры можно увидеть во вкладке Game</p>
                    <p class="special-tip-for-task">🛠️ <b>Подсказка 3:</b> Применяйте материалы на каждый элемент машины отдельно</p>
                </div>
            </div>  
            <h4>🔎 Пример правильного выполнения:</h4>
            <img src="/images/fourth/task-complete1.webp" alt="task-complete1">
            <img src="/images/fourth/task-complete2.webp" alt="task-complete2">
        </div>
        <div class="success-block">
            <p>🎉 <b>Отлично!</b> Если у вас получилось аналогично, переходите к следующему модулю, где мы будем работать с механикой движения машины!</p>
        </div>
    </div>
</template>
<script>
</script>
<style scoped lang="sass">
@import "@/assets/styles/pages/second/first-task.sass"    
</style>