<template>
    <div>
        <h2>Улучшение и оптимизация</h2>
        <hr>
        <p> Теперь вы разобрались со скриптингом и Rigidbody!</p>
        <p>🎯 Новая цель: Создать новую трассу и реализовать улучшеную механику езды</p>
        <ol>
            <li>
                <h3>Очистить прошлое</h3>
                Удалите машины-оппоненты и трассу, скачайте новый пак на дороги        
                <a href="https://assetstore.unity.com/packages/3d/environments/roadways/low-poly-road-pack-67288">
                    Пак на дорогу
                </a>
            </li>
            <li>
                <h3>Новая трасса</h3>
                <p>Создайте новую трассу с помощью ассетов.</p>
                <img src="/images/sixth/race.webp" alt="race">
            </li>
            <li>
                <h3>Новый префаб, вместо старого</h3>
                <p>Возьмите готовый префаб на машину и перетащите его.</p>
                <img src="/images/sixth/new-prefap.webp" alt="new-prefab">
                <div class="warning-container">
                    <p>Можете оставить старый, но у вас машина будет подлетать в небеса из-за конфликта коллайдеров</p>
                </div>
            </li>
            <li>
                <h3>Новая модель</h3>
                <p>
                    Перетащите скрипт и камеру машины на новую сущность. 
                </p>
                <img src="/images/sixth/camera.webp" alt="">
                <p>
                    К улучшению скрипта камеры приступим чуть позже
                </p>
            </li>
            <li>
                <h3>Скриптинг</h3>
                <div class="warning-container">
                    <p>⚠️ Уберите "спринт" на <b>LeftShift</b> в скрипте Movement, если остался</p>
                </div>
                <p>Определим новые переменные для движения</p>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="blue">public </span>
                        <span class="blue">float </span>
                        <span class="name">maxSpeed = </span>
                        <span class="value">15f</span>
                        <span class="name">; // Макс скорость</span>
                    </code>
                    <code class="code-sample">
                        <span class="blue">public </span>
                        <span class="blue">float </span>
                        <span class="name">acceleration = </span>
                        <span class="value">0.5f</span>
                        <span class="name">; // Скорость разгона</span>
                    </code>
                    <code class="code-sample">
                        <span class="blue">public </span>
                        <span class="blue">float </span>
                        <span class="name">deceleration = </span>
                        <span class="value">1f</span>
                        <span class="name">; // Скорость торможения</span>
                    </code>
                    <code class="code-sample">
                        <span class="blue">public </span>
                        <span class="blue">float </span>
                        <span class="name">reverseSpeed = </span>
                        <span class="value">15f</span>
                        <span class="name">; // Макс скорость заднего хода</span>
                    </code>
                    <code class="code-sample">
                        <span class="blue">public </span>
                        <span class="blue">float </span>
                        <span class="name">currentSpeed = </span>
                        <span class="value">0f</span>
                        <span class="name">;</span>
                    </code>
                    <code class="code-sample">
                        <span class="blue">public </span>
                        <span class="blue">float </span>
                        <span class="name">turnSpeed = </span>
                        <span class="value">40f</span>
                        <span class="name">;</span>
                    </code>
                </div>
                <div class="tip-section">
                    <h4>Совет</h4>
                    <p>Используйте Header и SerializeField</p>
                    <div class="code-section">
                        <code class="code-sample">
                            <span class="name">[</span>
                            <span class="serialize">Header</span>
                            <span class="name">("Настройки движения")</span>
                            <span class="name">]</span>
                        </code>
                        <code class="code-sample">
                            <span class="name">[</span>
                            <span class="serialize">SerializeField</span>
                            <span class="name">]</span>
                        </code>
                    </div>
                </div>
                <h4>Что делаем дальше?</h4>
                <ul>
                    <li>Далее давайте разделим наши скрипты</li>
                    <li>Удалите все что есть в Update</li>
                    <li>Создайте новую функцию и назовите ее HandleMovement()</li>
                </ul>
                <p>В HandleMovement пишем тоже самое</p>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="blue">float </span>
                        <span class="name">moveX = </span>
                        <span class="class">Input</span>
                        <span class="name">.</span>
                        <span class="yellow">GetAxis</span>
                        <span class="name">("Horizontal");</span>
                    </code>
                    <code class="code-sample">
                        <span class="blue">float </span>
                        <span class="name">moveZ = </span>
                        <span class="class">Input</span>
                        <span class="name">.</span>
                        <span class="yellow">GetAxis</span>
                        <span class="name">("Vertical");</span>
                    </code>
                </div>
                <p>Далее уже прописываем логику для мувмента машины</p>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="name">// HandleMovement</span>
                        <br>
                        <span class="purple">if </span>
                        <span class="name">(moveZ > </span>
                        <span class="value">0</span>
                        <span class="name">) <br>{ </span>
                        <br>
                        <span class="name" style="margin-left: 20px;">currentSpeed = </span>
                        <span class="value">Mathf</span>
                        <span class="name">.</span>
                        <span class="yellow">Lerp</span>
                        <span class="name">(currentSpeed, maxSpeed, acceleration *</span>
                        <span class="method"> Time</span>
                        <span class="name">.deltaTime);</span>
                        <br>
                        <span class="name"> }</span>
                    </code>
                    <code class="code-sample">
                        <span class="purple">else if </span>                        
                        <span class="name">(moveZ &lt; </span>
                        <span class="value">0</span>
                        <span class="name">) <br> { </span>
                        <br>
                        <span class="name" style="margin-left: 20px;">currentSpeed = </span>
                        <span class="value">Mathf</span>
                        <span class="name">.</span>
                        <span class="yellow">Lerp</span>
                        <span class="name">(currentSpeed, -reverseSpeed, acceleration *</span>
                        <span class="method"> Time</span>
                        <span class="name">.deltaTime);</span>
                        <br>
                        <span class="name"> }</span>
                    </code>
                    <code class="code-sample">
                        <span class="purple">else</span> 
                        <br>
                        <span class="name"> { </span>
                        <br>
                        <span class="name" style="margin-left: 20px;">currentSpeed = </span>
                        <span class="value">Mathf</span>
                        <span class="name">.</span>
                        <span class="yellow">Lerp</span>
                        <span class="name">(currentSpeed, maxSpeed, acceleration *</span>
                        <span class="method"> Time</span>
                        <span class="name">.deltaTime);</span>
                        <br>
                        <span class="name"> }</span>
                    </code>
                </div>
                <h4>Напишем то, что будет толкать нашу машину</h4>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="name">// HandleMovement</span>
                        <br>
                        <span class="name">rb.linearVelocity = transform.forward</span>
                        <span class="yellow"> * </span>
                        <span class="name">currentSpeed;</span>
                    </code>
                </div>
                <h4>Повторный скрипт на поворот нашей машины</h4>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="name">// HandleMovement</span>
                        <br>
                        <span class="name">transform.</span>
                        <span class="yellow">Rotate</span>
                        <span class="name">(</span>
                        <span class="class">Vector3</span>
                        <span class="name">.up, turnSpeed *</span>
                        <span class="method"> Time</span>
                        <span class="name">.deltaTime * </span>
                        <span class="blue">moveX</span>
                        <span class="name">);</span>
                    </code>
                </div>
                <h4>Теперь, чтобы все сработало вызываем функцию в Update</h4>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="blue">void Update</span>
                        <span class="name">() {</span>
                        <br>
                        <span class="yellow" style="margin-left: 20px;">HandleMovement</span>
                        <span class="name">();</span>
                        <br>
                        <span class="name">}</span>
                    </code>
                </div>
                <h4>Попробуйте сыграть!</h4>
            </li>
            <li>
                <h3>Добавим тормоза!</h3>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="blue">public bool </span>
                        <span class="name">isBraking = </span>
                        <span class="blue">false</span>
                        <span class="name">;</span>
                    </code>
                </div>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="name">// HandleMovement</span>
                        <br>
                        <span class="name">isBraking = </span>
                        <span class="class">Input</span>
                        <span class="name">.</span>
                        <span class="yellow">GetKey</span>
                        <span class="name">(</span>
                        <span class="value">KeyCode</span>
                        <span class="name">.Space);</span>
                        <br>
                        <span class="purple">if </span>
                        <span class="name">(isBraking)<br>{</span>
                        <br>
                        <span class="name" style="margin-left: 20px;">currentSpeed = </span>
                        <span class="value">Mathf</span>
                        <span class="name">.</span>
                        <span class="yellow">Lerp</span>
                        <span class="name">(currentSpeed,</span>
                        <span class="value"> 0</span>
                        <span class="name">, deceleration *</span>
                        <span class="method"> Time</span>
                        <span class="name">.deltaTime);</span>
                        <br>
                        <span class="name"> }</span>
                    </code>
                </div>
            </li>
            <li> 
                <h3>Новая камера</h3>
                <p>Поменяем наш <b>GameObject player</b> на <b>Transform car</b>;</p>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="blue">public </span>
                        <span class="method">Transform</span>
                        <span class="name"> car;</span>
                    </code>
                </div>
                <p>В LateUpdate будем всегда смотреть на нашу машину</p>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="blue">void LateUpdate</span>
                        <br>
                        <br>
                        <span class="name">// Позиция камеры (учитываем только поворот по Y, игнорируя наклон)</span>
                        <br>
                        <span class="value">Quaternion</span>
                        <span class="blue"> flatRotation</span>
                        <span class="name"> = </span>
                        <span class="value">Quaternion</span>
                        <span class="name">.</span>
                        <span class="yellow">Euler</span>
                        <span class="name">(</span>
                        <span class="value">0</span>
                        <span class="name">, car.eulerAngles.y, </span>
                        <span class="value">0</span>
                        <span class="name">);</span>
                    </code>
                </div>
            </li>
        </ol>
    </div>
</template>
<script>
</script>
<style scoped lang="sass">
@import '@/assets/styles/pages/second/third-task.sass'
</style>