<template>
    <div>
        <div class="eighth-task-wrapper">
            <h2 style="font-family: 'Montserrat', sans-serif;">Персонаж 2D</h2>
            <hr>
            <div class="intro-block">
                <p> 
                    Вы познакомились с Tilemap и спрайтами в целом в прошлом уроке, перейдем
                    к следующей теме
                </p>
                <p>🎯 Новая цель: Настройка сцены</p>
            </div>
            <ol>
                <li>
                    <h3>Расположение объектов на сцене</h3>
                    <ul>
                        <li><p>
                            <b>Grid + Tilemap</b> — это только для статичной карты (земля, стены, платформы).
                        </p></li>
                        <li><p>
                            <b>Персонаж</b> — это отдельный объект, который будет двигаться и взаимодействовать с картой.
                        </p></li>
                        <li><p>
                            <b>Задний фон</b> — тоже отдельный объект, который не связан с Grid.
                        </p></li>
                    </ul>
                </li>
                <li>
                    <h3>Как добавить персонажа (если еще не добавили)</h3>
                    <ol>
                        <li><p><b>Перетащите спрайт персонажа</b> из папки Project в окно <b>Hierarchy</b> или <b>Scene</b>.</p></li>
                        <li>
                            <p><b>Настройте Sprite Renderer:</b></p>
                            <ul>
                                <li><p>Убедитесь, что в компоненте <b>Sprite Renderer</b> стоит правильный спрайт.</p></li>
                                <li><p>(Если не настроили) Настройте <b>Order in Layer</b> (например, "Player"), 
                                    чтобы персонаж отображался поверх или под нужными слоями (подробнее об этом ниже).
                                </p></li>
                            </ul>
                        </li>
                        <li>
                            <p><b>Добавьте компоненты для управления:</b></p>
                            <ul>
                                <li><p><b>Rigidbody2D</b> — чтобы персонаж подчинялся физике (гравитация, столкновения).</p></li>
                                <li><p><b>Collider2D</b>(например, BoxCollider2D) — чтобы он взаимодействовал с картой.</p></li>
                                <li><p>Скрипт для движения (пример кода ниже).</p></li>
                                <li><p>Поставьте галочку <b>Rigidbody2D → Constraints → Freeze Rotation → Z → ✅</b></p></li>
                            </ul>
                        </li>
                    </ol>
                    <img src="/images/eighth/character.webp" alt="character">
                </li>
                <li>
                    <h3>Задний фон (Если не сделали)</h3>
                    <ol>
                        <li>
                            <b>Создайте отдельный объект</b> для фона:
                            <ul>
                                <li><p>ПКМ в Hierarchy <b>→ 2D Object → Sprite.</b></p></li>
                                <li><p>Перетащите спрайт фона в компонент Sprite Renderer. (back)</p></li>
                            </ul>
                        </li>
                        <li>
                            <b>Настройте Sorting Layer:</b>
                            <ul>
                                <li><p>В <b>Sprite Renderer</b> создайте слой "Background" и назначьте его фону.</p></li>
                                <li><p>Установите <b>Order in Layer</b> -10 (чтобы фон был позади всего).</p></li>
                                
                            </ul>
                        </li>
                        <li>
                            <b>Растяните фон</b> на всю камеру:
                            <ul>
                                <li><p>Измените размер спрайта (Scale) или используйте компонент <b>Tilemap</b> для бесконечного фона.</p></li>
                            </ul>
                        </li>
                    </ol>
                    <img src="/images/eighth/background.webp" alt="background">
                </li>
                <li>
                    <h3>Настройка тайлов и персонажа</h3>
                    <p>План такой:</p>
                    <p>- Зададим LayerMask для нашей земли (Ground или Tilemap)</p>
                    <ul>
                        <li>
                            <p>Переходим в <b>Inspector → Add Layer → User Layer 8 → Ground</b></p>
                        </li>
                        <img src="/images/eighth/ground-layer.webp" alt="ground-layer">
                    </ul>
                    <p>- Создадим объект дочерний к Player и сделаем Ground Check</p>
                    <ul>
                        <li><p>Можно создать любой, Например (<b>Create Object → Sprites → Square</b>)</p></li>
                        <li><p>Выключите Sprite Render (если есть)</p></li>
                    </ul>
                    <p>- Задайте Layer для для вашей земли</p>
                    <ul>
                        <li>Переходим в <b>Inspector → Layer → Ground</b></li>
                    </ul>
                </li>
                <li>
                    <h3>Пример кода для управления персонажем</h3>
                    <p>Создайте скрипт <b>PlayerController.cs</b> и добавьте его к персонажу:</p>
                    <p>В скрипте все public для наглядности, но в будущем избегайте такой практики используйте 
                        <span class="code-example">[Serialized field]</span>
                        + <span class="code-example">private</span>, если что-то надо вывести в Inspector
                         или для отладки используйте <span class="code-example">Debug.Log();</span></p>
                </li>
                <div class="code-section">
                        <code class="code-sample">
                            <span class="blue">public class</span>
                            <span class="method"> PlayerController</span>
                            <span class="name"> : </span>
                            <span class="method">MonoBehaviour</span>
                            <span class="name"> {</span>
                            <br>
                            <span class="blue" style="margin-left: 40px;">public float</span>
                            <span class="name"> runSpeed = </span>
                            <span class="value">5f</span>
                            <span class="name">;</span>
                            <br>
                            <span class="blue" style="margin-left: 40px;">public float</span>
                            <span class="name"> jumpForce = </span>
                            <span class="value">5f</span>
                            <span class="name">;</span>
                            <br>
                            <br>
                            <span class="blue" style="margin-left: 40px;">public </span>
                            <span class="method">Rigidbody2D </span>
                            <span class="name">rb;</span>
                            <br>
                            <br>
                            <span class="blue" style="margin-left: 40px;">public bool </span>
                            <span class="name">isGrounded;</span>
                            <br>
                            <span class="blue" style="margin-left: 40px;">public</span>
                            <span class="method"> Transform </span>
                            <span class="name">groundCheckPoint;</span>
                            <br>
                            <span class="blue" style="margin-left: 40px;">public float </span>
                            <span class="name">groundCheckRadius;</span>
                            <br>
                            <span class="blue" style="margin-left: 40px;">public</span>
                            <span class="value"> LayerMask </span>
                            <span class="name">groundCheckPoint;</span>
                            <br>
                            <br>
                            <span class="blue" style="margin-left: 40px;">public bool </span>
                            <span class="name">jumpPressed = </span>
                            <span class="blue">false</span>
                            <br>
                            <span class="blue" style="margin-left: 40px;">public bool </span>
                            <span class="name">APressed = </span>
                            <span class="blue">false</span>
                            <br>
                            <span class="blue" style="margin-left: 40px;">public bool </span>
                            <span class="name">DPressed = </span>
                            <span class="blue">false</span>
                            <br>
                            <br>
                            <span class="blue" style="margin-left: 40px;">void Awake</span>
                            <span class="name">()</span><br>
                            <span class="name" style="margin-left: 40px;">{</span><br>
                            <span class="name" style="margin-left: 80px;">rb = </span>
                            <span class="yellow">GetComponent</span>
                            <span class="name">&lt;</span>
                            <span class="method">Rigidbody2D</span>
                            <span class="name">></span>
                            <span class="name">();</span>
                            <br>
                            <span class="name" style="margin-left: 40px;">}</span><br>
                            <span class="blue" style="margin-left: 40px;">void Update</span>
                            <span class="name">() {</span><br>
                            <span class="purple" style="margin-left: 80px;">if </span>
                            <span class="name">(</span>
                            <span class="method">Input</span>
                            <span class="name">.</span>
                            <span class="yellow">GetKeyDown</span>
                            <span class="name">(</span>
                            <span class="value">KeyCode</span>
                            <span class="name">.Space)) jumpPressed = </span>
                            <span class="blue">true</span>
                            <span class="name">;</span><br>
                            <span class="name" style="margin-left: 80px;">APressed = </span>
                            <span class="method">Input</span>
                            <span class="name">.</span>
                            <span class="yellow">GetKey</span>
                            <span class="name">(</span>
                            <span class="value">KeyCode</span>
                            <span class="name">.A)</span>
                            <span class="name">;</span><br>
                            <span class="name" style="margin-left: 80px;">DPressed = </span>
                            <span class="method">Input</span>
                            <span class="name">.</span>
                            <span class="yellow">GetKey</span>
                            <span class="name">(</span>
                            <span class="value">KeyCode</span>
                            <span class="name">.D)</span>
                            <span class="name">;</span><br>
                            <span class="name one-indent">}</span>
                            <br>
                            <span class="blue one-indent">void FixedUpdate</span>
                            <span class="name">() {</span><br>
                            <span class="name two-indent">isGrounded = </span>
                            <span class="method">Physics2D</span>
                            <span class="name">.</span>
                            <span class="yellow">OverlapCircle</span>
                            <span class="name">(groundCheckPoint.position, groundCheckRadius, groundLayer);</span>
                            <br>
                            <br>
                            <span class="blue two-indent">float targetSpeed</span>
                            <span class="name"> = </span>
                            <span class="value">0f</span>
                            <span class="name">;</span>
                            <br>

                            <span class="purple two-indent">if</span>
                            <span class="name"> (APressed)</span>
                            <br>
                            <span class="name two-indent">{</span>
                            <br>
                            <span class="blue three-indent">targetSpeed</span>
                            <span class="name"> = -runSpeed;</span>
                            <br>
                            <span class="name two-indent">}</span>
                            <br>
                            <span class="purple two-indent">else if</span>
                            <span class="name"> (DPressed)</span>
                            <br>
                            <span class="name two-indent">{</span>
                            <br>
                            <span class="blue three-indent">targetSpeed</span>
                            <span class="name"> = runSpeed;</span>
                            <br>
                            <span class="name two-indent">}</span>
                            <br>
                            <br>
                            <span class="name two-indent">body.linearVelocity = </span>
                            <span class="blue">new</span>
                            <span class="value"> Vector2</span>
                            <span class="name">(</span>
                            <span class="blue">targetSpeed</span>
                            <span class="name">, body.linearVelocity.y);</span>
                            <br>
                            <br>
                            <span class="purple two-indent">if </span>
                            <span class="name">(APressed) </span>
                            <span class="name">transform.eulerAngles = </span>
                            <span class="blue">new</span>
                            <span class="value"> Vector3</span>
                            <span class="name">(0, 0, 0);</span>
                            <br>
                            <span class="purple two-indent">else if </span>
                            <span class="name">(DPressed) </span>
                            <span class="name">transform.eulerAngles = </span>
                            <span class="blue">new</span>
                            <span class="value"> Vector3</span>
                            <span class="name">(0, 180, 0);</span>
                            <br>
                            <br>
                            <span class="purple two-indent">if</span>
                            <span class="name"> (jumpPressed && isGrounded)</span>
                            <br>
                            <span class="name two-indent">{</span>
                            <br>
                            <span class="name three-indent">body.linearVelocity = </span>
                            <span class="blue">new</span>
                            <span class="value"> Vector2</span>
                            <span class="name">(body.position.x, jumpForce);</span>
                            <br>
                            <span class="name three-indent">jumpPressed = </span>
                            <span class="blue">false</span>
                            <span class="name">;</span>
                            <br>
                            <span class="name two-indent">}</span>
                            <br>
                            <br>
                            <span class="name" style="margin-left: 40px;">}</span>
                            <br>
                            <span class="name">// Для отладки триггера на землю</span>
                            <br>
                            <span class="blue one-indent">void OnDrawGizmos</span>
                            <span class="name">()</span>
                            <br>
                            <span class="name one-indent">{</span>
                            <br>
                            <span class="method two-indent">Gizmos</span>
                            <span class="name">.color = </span>
                            <span class="value">Color</span>
                            <span class="name">.red;</span>
                            <br>
                            <span class="method two-indent">Gizmos</span>
                            <span class="yellow">.DrawWireSphere</span>
                            <span class="name">(groundCheckPoint.position, groundCheckRadius);</span>
                            <br>
                            <span class="name one-indent">}</span>
                            <br>
                            <span class="name">}</span>
                        </code>
                    </div>
                <li>
                    <h3>Как связать персонажа с картой (Tilemap)</h3>
                    <p>- Убедитесь, что у вашего Tilemap есть Tilemap Collider 2D (как мы делали раньше).</p>
                    <p>- Настройте слой "Ground" для Tilemap:</p>
                    <ul>
                        <li>Выберите <b>Tilemap → в Inspector → Layer → Ground</b></li>
                    </ul>
                    <p>- Соединить оставшиеся объекты у персонажа</p>
                    <ul>
                        <li><p><b>Inspector → Ground Check Point → GroundCheck</b> (Дочерний объект, который вы призывали)</p></li>
                        <li><p><b>Inspector → Ground Check Radius → <span style="font-family: 'Montserrat';">0.55</span></b></p></li>
                        <li><p><b>Inspector → Ground Layer → Ground</b></p></li>
                    </ul>
                    <img src="/images/eighth/link-player.webp" alt="link-player">
                    <ol>
                        <li>
                            <p>Вы можете оставить пустым <b>Body</b> потому что у нас при запуске уже ищет Rigidbody.</p>
                        </li>
                        <li>
                            <p>Далее вставляем наш объект по которому будет происходить чек с <b>Ground</b></p>
                        </li>
                        <li>
                            <p>Даем ему радиус и видим<b>(OnDrawGizmos)</b> как меняется область соприкосновения</p>
                        </li>
                    </ol>
                </li>
                <li>
                    <h3>Организация Hierarchy</h3>
                    <p>Чтобы сцена не превратилась в хаос, структурируйте объекты:</p>
                    <ul>
                        <li><p>
                            <b>Grid</b> (с дочерними Tilemap для разных слоев: земля, декорации).
                        </p></li>
                        <li>
                            <p><b>Player</b> (персонаж).</p>
                        </li>
                        <li>
                            <p><b>Background</b> (фон).</p>
                        </li>
                        <li><p>
                            <b>UI</b> (если есть интерфейс).
                        </p></li>
                    </ul>
                </li>
                <li>
                    <h3>Проверьте результат</h3>
                    <p>Запустите игру (Play):</p>
                    <ul>
                        <li>Персонаж должен двигаться кнопками A/D</li>
                        <li>Прыжок — пробел.</li>
                        <li>Если он проваливается сквозь пол, проверьте коллайдеры на Tilemap и персонаже!</li>
                    </ul>
                </li>
                <li><h3>Если что-то не работает</h3></li>
                <h4>Персонаж не двигается?</h4>
                <ul><li>
                    Проверьте, добавлен ли Rigidbody2D и скрипт PlayerController.
                </li></ul>
                <h4>Персонаж проходит сквозь стены?</h4>
                <ul><li>
                    Убедитесь, что у Tilemap есть Tilemap Collider 2D.</li></ul>
                <h4>Фон не отображается?</h4>
                <ul><li>
                    Проверьте Sorting Layer и Order in Layer у фона.</li></ul>
            </ol>
            <h3>Пример работы</h3>
            
            <img src="/gifs/eighth/result.gif" alt="result">
            <a href="https://gifyu.com/image/bLXSg" target="_blank" class="gif-link">🔗 Альтернативная ссылка на GIF</a>            
            <div class="before-task-block">
                <h3>Добавление сцен</h3>
                <p>Перед тем как начать ваше задание, обратите внимание как добавлять сцены</p>
                <p><b>File → Build Profiles → Scene List → Add Open Scenes</b></p>
                <img src="/images/eighth/add-scene.webp" alt="add-scene">
            </div>
            <div class="final-task-movement">
                <h3 style="background: #1E293B; border-radius: 8px; padding: .4rem; color: aliceblue;">
                    🤑 Задание: Новая сцена
                </h3>
                <ol class="montserrat">
                    <li><p>😶 Создайте новую сцену</p></li>
                    <li><p>🐉 "Нарисуйте" новую сцену (Создайте новый лвл)</p></li>
                    <li><p>🔙 Вернитесь на старый уровень </p></li>
                    <li>
                        <p>👻 Создайте объект в конце уровня</p>
                    </li>
                    <li><p>👹 Дайте коллайдер созданной сущности поставьте галку <b>IsTrigger → ✔️</b> </p></li>
                    <li><p>📜 Напишите скрипт, чтобы нас при касании с этим объектом переносило на другой уровень</p></li>
                    <li><p>🥒 Создайте поднимаемые вещи(Например, гемы в папке с ассетом) на новом уровне</p></li>
                    <li><p>🥲 Теперь сделайте так, чтобы при касании эти гемы пропадали</p></li>
                </ol>
                <div class="hint-block">
                    <p class="special-tip-for-task">🎃 <b>Подсказка 1:</b> Триггер на вход в коллайдер - 📖
                        <a href="https://docs.unity3d.com/ru/2019.4/ScriptReference/MonoBehaviour.OnTriggerEnter2D.html">OnTriggerEnter2D</a>
                    </p>
                    <p class="special-tip-for-task">🤐 <b>Подсказка 2:</b> Перемещение между сценами - 📖
                        <a href="https://docs.unity3d.com/6000.1/Documentation/ScriptReference/SceneManagement.SceneManager.LoadScene.html">LoadScene</a>
                    </p>
                    <p class="special-tip-for-task">🥴 <b>Подсказка 3:</b> Подбирание объектов - 📖
                        <a href="https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Object.Destroy.html">Destroy</a>
                    </p>
                </div>
                <div class="montserrat">
                    <p>🥇 Все как на гифке снизу</p>
                    <p>🥈 Нету скрипта на "поднятие" гемов</p>
                    <p>🥉 Не переходит на сцену </p>
                    <img src="/gifs/eighth/scene-result.gif" alt="scene-result">
                    <a href="https://gifyu.com/image/bsv7U" target="_blank" class="gif-link">🔗 Альтернативная ссылка на GIF</a>            
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped lang="sass">
@import '@/assets/styles/pages/third/second-task.sass'
</style>