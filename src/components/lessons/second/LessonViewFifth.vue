<template>
    <div>
        <h2>🚗 Механика движения машины</h2>
        <hr>
        <div class="content-wrapper-for-fifth">
            <div class="intro-block">
                <p>🎯 Теперь, когда у нас есть готовая модель с текстурами, пришло время добавить физику и управление!</p>
                <p>Мы модифицируем скрипт <b>Movement</b> из прошлого урока, добавив компоненты <b>Rigidbody</b> и <b>Colliders</b> для реалистичного поведения.</p>
            </div>

            <div class="docs-block">
                <h3>📚 Полезные материалы</h3>
                <ul>
                    <li>📄 <a href="https://docs.unity3d.com/ScriptReference/Rigidbody.html" target="_blank">Документация по Rigidbody</a></li>
                    <li>📄 <a href="https://docs.unity3d.com/Manual/mesh-colliders-introduction.html" target="_blank">Руководство по Mesh Colliders</a></li>
                </ul>
            </div>
            <div class="setup-section">
                <h3>⚙️ Настройка компонентов</h3>
                <ol class="setup-steps">
                    <li>
                        <p><b>Rigidbody</b> для всех машин:</p>
                        <p>Add Component ➔ Physics ➔ Rigidbody</p>
                        <img src="/images/fifth/rigid-body.webp" alt="Добавление Rigidbody">
                    </li>
                    <li>
                        <p><b>Mesh Collider</b> с параметром Convex применить на все дочерние объекты:</p>
                        <p>Add Component ➔ Mesh Collider → ✅ Convex</p>
                        <img src="/images/fifth/mesh-convex.webp" alt="Настройка коллайдера">
                    </li>
                    <li>
                        <p>Добавьте скрипт <b>Movement</b> на основную машину с камерой</p>
                    </li>
                </ol>
            </div>
            <div class="problem-with-material">
                    <h3>⚠️ Решение проблем</h3>
                    <p>
                        Если фары машины не светятся:
                    </p>
                    <img src="/images/fifth/fix-problem-with-light.webp" alt="Настройка освещения">
                </div> 
            <div>
                <h3>💻 Скриптинг</h3>
                <p>Мы добавим метод <b>Rotate</b> для реалистичного поворота машины:</p>
                <img src="/images/fifth/script.webp" alt="script">
                <p>Vector3.forward = Vector3(0, 0, 1)</p>
                <p>Vector3.up = Vector3(0, 1, 0)</p>
                <div class="obstacles-block">
                    <h3>🪵 Добавляем препятствия</h3>
                    <p>Для тестирования физики рекомендуем использовать готовый ассет:</p>
                    📦
                    <a href="https://assetstore.unity.com/packages/3d/props/furniture/cartoon-wooden-box-242926" target="_blank">
                         Cartoon Wooden Box (Unity Asset Store)
                    </a>
                    <img src="/images/fifth/obstacles.webp" alt="Пример расстановки препятствий">
                    <p class="tip">💡 Не забудьте добавить <b>Rigidbody</b> (Mass = 20) и <b>Mesh Collider</b> с Convex на все препятствия!</p>
                </div>
                
                <h3>🎥 Настройка камеры</h3>
                <p>
                    Создадим скрипт для плавного следования камеры с офсетом:
                </p>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="blue">public </span>
                        <span class="method">GameObject </span>
                        <span class="name">player;</span>
                    </code>
                    <code class="code-sample">
                        <span class="blue">public </span>
                        <span class="value">Vector3 </span>
                        <span class="name">offset = </span>
                        <span class="blue">new </span>
                        <span class="value">Vector3</span>
                        <span class="name">(</span>
                        <span class="value">0</span>
                        <span class="name">,</span>
                        <span class="value"> 3</span>
                        <span class="name">,</span>
                        <span class="value"> -5</span>
                        <span class="name">);</span>
                    </code>
                </div>
                <p>
                    И в методе LateUpdate будем уже говорить Unity, что меняй положение камеры, так - <b>Позиция камеры = Позиция игрока + оффсет</b>
                </p>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="blue">void</span>
                        <span class="yellow"> LateUpdate() </span>
                        <span class="name">{</span>
                        <br>
                        <span class="name" style="margin-left: 20px;">transform.position = player.transform.position</span>
                        <span class="yellow"> + </span>
                        <span class="name">offset;</span>
                        <br>
                        <span class="name">}</span>
                    </code>
                </div>
                <p class="success">🎉 
                    Прикрепите скрипт к камере — теперь она будет плавно следовать за машиной!
                </p>               
                <h3>😎🏆😊 Попробуйте покататься</h3>
                           
            </div>

            <div class="task-section">
                <h4 style="background: #1E293B; border-radius: 8px; padding: .4rem; color: aliceblue;">🚨 ЗАДАНИЕ 🚨</h4>
                <ol class="task-list">
                    <li>
                        <p>
                            🪵 Создайте несколько препятствий на трассе
                        </p>
                    </li>
                    <li>
                        <p>
                            🚗 Расставьте машины-оппоненты напротив основной
                        </p>
                    </li>
                    <p style="padding: .2rem .4rem; background: #D2E3FC; border-radius: 8px;">
                        ℹ️ Можно использовать префабы из папки Prefabs
                    </p>
                    <li>
                        <p>
                            ⚖️ Настройте физику:
                        </p>
                        <ul>
                            <li>Rigidbody → Mass = 1000</li>
                            <li>Mesh Collider → Convex ✅</li>
                        </ul>
                    </li>
                    <li>
                        <p>
                            💻 Напишите скрипт для движения машин-оппонентов
                        </p>
                    </li>
                </ol>
                <div class="help-section">
                    <h4>🆘 Нужна помощь?</h4>
                    <p>Рекомендую пройти урок на Unity Learn:</p>
                    <a href="https://learn.unity.com/tutorial/674f6669edbc2a2525914119" target="_blank">
                        Unit 1 - Player Control (~1 час)
                    </a>
                    <p class="language-note">Язык: Английский</p>
                </div>
            </div>
            <h4>🎯 Ожидаемый результат:</h4>
            <img src="/gifs/fifth/result.gif" alt="result-gif">
            <a href="https://imgur.com/a/CHTbg5P" target="_blank" class="gif-link">🔗 Альтернативная ссылка на GIF</a>            
            <div class="conclusion">
                <p>🌟 Отличная работа! Вы освоили основы физики и управления в Unity. Готовы к финальному уроку главы?</p>
            </div>        
        </div>
    </div>
</template>
<script>
</script>
<style scoped lang="sass">
@import "@/assets/styles/pages/second/second-task.sass"
</style>