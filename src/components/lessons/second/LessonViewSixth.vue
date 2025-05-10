<template>
    <div>
        <h2>Улучшение и оптимизация</h2>
        <hr>
        <div class="content-wrapper-for-sixth">
            <div class="intro-block">
                <p> Теперь вы разобрались со скриптингом и Rigidbody!</p>
                <p>🎯 Новая цель: Создать новую трассу и реализовать улучшеную механику езды</p>
            </div>
            <div class="clear-block">
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
                        <li><p>Далее давайте разделим наши скрипты</p></li>
                        <li><p>Удалите все что есть в Update</p></li>
                        <li><p>Создайте новую функцию и назовите ее HandleMovement()</p></li>
                        <li><p>Оставим пока что Update пустым, вместо него вызовем FixedUpdate</p></li>
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
                            <span class="name">(currentSpeed, 0, deceleration * 0.2f</span>
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
                    <h4>Теперь, чтобы все сработало вызываем функцию в FixedUpdate</h4>
                    <div class="code-section">
                        <code class="code-sample">
                            <span class="blue">void FixedUpdate</span>
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
                            <span class="name">() {</span>
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
                            <br>
                            <span class="name">transform.position = </span>
                            <span class="value">Vector3</span>
                            <span class="name">.</span>
                            <span class="yellow">Lerp</span>
                            <span class="name">(transform.position, car.position</span>
                            <span class="yellow"> + </span>
                            <span class="name">car.rotation</span>
                            <span class="yellow"> * </span>
                            <span class="name">offset, </span>
                            <span class="value">0.1f</span>
                            <span class="name">);</span>
                            <br>
                            <span class="name">// Камера смотрит строго на машину (без наклона)</span>
                            <br>
                            <span class="name">transform.</span>
                            <span class="yellow">LookAt</span>
                            <span class="name">(car.position);</span>
                            <br>
                            <span class="name">}</span>
                        </code>
                    </div>
                </li>
                <h4>Пример работы:</h4>
                <img src="/gifs/sixth/problem.gif" alt="problem">
                <a href="https://gifyu.com/image/bLXpb" target="_blank" class="gif-link">🔗 Альтернативная ссылка на GIF</a>            
                <p>Можем видеть, что у нас не решен вопрос с гравитацией, давайте решим его!</p>
                <li>
                    <h3>Решение проблемы с гравитацией</h3>
                        <p>Выключим гравитацию Rigidbody. Убираем галочку. Сделаем кастомную гравитацию для нашей <b>машины</b></p>
                        Rigidbody ➔ Use Gravity ➔ ❌
                    
                        <p>Добавим новую переменную в наш скрипт Movement и определим 
                            Rigidbody для нашего объекта
                        </p>
                        <div class="code-section">
                            <code class="code-sample">
                                <span class="blue">public float </span>
                                <span class="name">gravityForce = </span>
                                <span class="value">9.8f</span>
                                <span class="name">;</span>
                                <br>
                                <span class="blue">public </span>
                                <span class="method">Rigidbody </span>
                                <span class="name">rb;</span>
                            </code>
                        </div>
                        <img src="/images/sixth/rigidbody.webp" alt="rigidbody">
                
                        <p>Создадим новую функцию ApplyGravity()</p>
                        <div class="code-section">
                            <code class="code-sample">
                                <span class="blue">void </span>
                                <span class="yellow">ApplyGravity</span>
                                <span class="name">()</span>
                            </code>
                        </div>
                    
                        <p>Добавим метод AddForce к нашему Rigidbody</p>  
                        <div class="code-section">
                        <code class="code-sample">
                            <span class="blue">void ApplyGravity</span>
                            <span class="name">() {</span>
                            <br>
                            <span class="name">// Применяем базовую гравитацию к объекту</span>
                            <br>
                            <span class="value">Vector3</span>
                            <span class="name"> gravity = </span>
                            <span class="value">Vector3</span>
                            <span class="name">.</span>
                            <span class="yellow">down</span>
                            <span class="name"> * gravityForce * rb.mass;</span>
                            <br>
                            <span class="name">rb.</span>
                            <span class="yellow">AddForce</span>
                            <span class="name">(gravity);</span>
                            <br>
                            <br>
                            <span class="name">// Проверяем контакт с поверхностью (луч длиной 1.5 метра)</span>
                            <br>
                            <span class="value">if</span>
                            <span class="name">(</span>
                            <span class="value">Physics</span>
                            <span class="name">.</span>
                            <span class="yellow">Raycast</span>
                            <span class="name">(transform.position, </span>
                            <span class="value">Vector3</span>
                            <span class="name">.</span>
                            <span class="yellow">down</span>
                            <span class="name">, out </span>
                            <span class="value">RaycastHit</span>
                            <span class="name"> hit, </span>
                            <span class="value">1.5f</span>
                            <span class="name">)) {</span>
                            <br>
                            <span class="name">    // Усиливаем прижимную силу при контакте с землей</span>
                            <br>
                            <span class="value">    Vector3</span>
                            <span class="name"> stickForce = </span>
                            <span class="value">Vector3</span>
                            <span class="name">.</span>
                            <span class="yellow">down</span>
                            <span class="name"> * gravityForce * rb.mass;</span>
                            <br>
                            <span class="name">    rb.</span>
                            <span class="yellow">AddForce</span>
                            <span class="name">(stickForce);</span>
                            <br>
                            <span class="name">}</span>
                        </code>
                    </div>                      
                        <div class="code-section">
                            <code class="code-sample">
                                <span class="blue">void FixedUpdate</span>
                                <span class="name">() {</span>
                                <br>
                                <span class="yellow" style="margin-left: 20px;">HandleMovement</span>
                                <span class="name">();</span>
                                <br>
                                <span class="yellow" style="margin-left: 20px;">ApplyGravity</span>
                                <span class="name">();</span>
                                <br>
                                <span class="name">}</span>
                            </code>
                        </div>
                        
                        <h4>⚙️ Оптимизация физики</h4>
                        <p>Последний шаг: увеличим наши свойства в <b>Rigidbody</b></p>
                        <p>Linear Damping ➔ 0.5-1</p>
                        <p>Angular Damping ➔ 2-5</p>
                        <a href="https://docs.unity3d.com/6000.1/Documentation/ScriptReference/Rigidbody-linearDamping.html" target="_blank">
                            Linear Damping
                        </a> 
                        <br>
                        <br>
                        <a href="https://docs.unity3d.com/6000.1/Documentation/ScriptReference/Rigidbody-angularDamping.html" target="_blank">
                            Angular Damping
                        </a>
                </li>
                <li>
                    <h3>🎮 Тестирование</h3>
                    <p>Проверьте работает ли у вас игра? Если нет еще раз проверьте все ли у вас прикреплено в скриптах.</p>
                    <p>Например в камере прикрепите нашу <b>машину</b>. На машине Rigidbody. Если все работает, то супер.</p>
                    <div class="tip-section">
                        <p>Можете поиграться с переменными скорости, ее разгона и т.п.</p>
                        <p>⚡ Рекомендуемые настройки:</p>
                        <ul class="recomendations-properties-car">
                            <li>
                                Max Speed = 15  (Максимальная скорость)
                            </li>
                            <li>
                                Acceleration = 0.5  (Скорость набора)
                            </li>
                            <li>
                                Deceleration = 0.5  (Скорость сбрасывания)
                            </li>
                            <li>
                                Reverse Speed = 15  (Максимальная скорость назад)
                            </li>
                            <li>
                                Turn Speed = 50  (Скорость поворот)
                            </li>
                            <li>
                                Gravity Force = 9.8  (Сила тяжести)
                            </li>
                        </ul>
                        
                    </div>
                    
                </li>
                <img src="/gifs/sixth/result.gif" alt="result">
                <a href="https://gifyu.com/image/bLXMX" target="_blank" class="gif-link">🔗 Альтернативная ссылка на GIF</a>            

                </ol>
            </div>
            
            <hr>

            <div class="task-section">
                <h3 style="background: #1E293B; border-radius: 8px; padding: .4rem; color: aliceblue;">🎥 Задание: Камеры</h3>
                <div class="tasks-list">
                    <ol >
                    <li><p>📷 Создайте новую камеру</p></li>
                    <li><p>🫅 Поставьте приоритет камерам <b>Priority</b></p></li>
                    <li><p>❌ Выключите камеру от третьего лица</p></li>
                    <li><p>🥇 Новую камеру поставьте так, чтобы был вид от "первого лица"</p></li>
                    <li><p>✅ Прикрепите ее тоже к нашей машине</p></li>
                    <li><p>🙉 Назовите камеры как-нибудь</p></li>
                    <img src="/images/sixth/camera-first.webp" alt="first view camera">  
                    <li><p>🔄️ Сделайте переключение между первым и третьим видом</p></li>
                    <li><p>🆙 Закиньте ваш метод на переключение в Update, пусть он не пустует</p></li>
                    <li><p>🏁 В Start выключайте камеру первого вида</p></li>
                </ol> 
                    <div class="hint-block">
                        <p class="special-tip-for-task">💡 <b>Подсказка 1:</b> Сделайте Камеры <b>GameObject</b> в скрипте</p>
                        <p class="special-tip-for-task">🔍 <b>Подсказка 2:</b> Создайте булевую переменную, которая будет переключать камеры</p>
                        <p class="special-tip-for-task">🛠️ <b>Подсказка 3:</b> У GameObject есть метод .SetActive()</p>
                        <p class="special-tip-for-task">🤯 <b>Подсказка 4:</b> <label style="font-family: 'Cascadia Code', 'Consolas', 'Courier New', monospace;">isSwitch = !isSwitch</label></p>
                    </div>
                </div>
            </div>
            <h4>Результат</h4>
            <img src="/gifs/sixth/camera-result.gif" alt="camera-result">
            <a href="https://gifyu.com/image/bLXpN" target="_blank" class="gif-link">🔗 Альтернативная ссылка на GIF</a>            
            <div class="question-section">
                <p>Думаю вы зададитесь вопросом, почему такая кривая физика? У нас в нашем скрипте не обработано почти ничего с коллайдерами, при столкновении с ними или еще что-то, потому что это уже серьезное дело. Вы тут собрались лишь для обозревания основ, ну и возможным завлечением вас в сей процесс. Не думайте, что вас научат сразу делать классно. Если хотите чего-то достичь, изучите информацию сами 😮</p>
            </div>
            <div class="success-section">
                <p>
                    Ну что, в этом модуле мы прошли через все эти баги с физикой, кривым управлением. 
                    Но в итоге-то чего-то да добились! Работает? Работает. 
                    Можно ли сделать лучше? Да запросто! 
                    Хочешь — впили WheelColliders для прокачанной физики, но у нас ведь базовый туториал, не забывай. 😄
                </p>        
            </div>
        </div>
        
    </div>
</template>
<script>
</script>
<style scoped lang="sass">
@import '@/assets/styles/pages/second/third-task.sass'
</style>