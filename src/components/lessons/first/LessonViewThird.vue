<template>
    <div>
    <h2>🔥 Первый скрипт</h2>
    <hr />
    <div class="third-task-container">
        <div class="first-section">
            <p>Да, наконец-то — первый скрипт! 🎉 Перед тем как начать, очистите ваше окружение: уберите все стенки, которые вы делали ранее. Оставьте только <b>🧱 Куб</b> и <b>🛖 Платформу</b>.</p>
            <div class="note">
                <p>В этом уроке вы научитесь <b>оживлять</b> сущности. ✨ Мы разберем самый простой способ. В будущем вы освоите более сложные подходы.</p>
            </div>
            <p>Сейчас предлагаю научиться пользоваться <b>🕹️ Input Manager</b>. Подробнее о нём можно прочитать в 📖<a href="https://docs.unity3d.com/Manual/class-InputManager.html" target="_blank">документации Unity</a>.</p>
            <p>Чтобы открыть Input Manager, выполните следующие действия:</p>
            <ul>
                <li><b>Services ➔ General Settings ➔ Input Manager</b> ⚙️</li>
            </ul>
            <img src="/images/third/input-manager.webp" alt="Input Manager" />
        </div>
        <div class="second-section">
            <p>Нас будут интересовать оси <b>↔️ Horizontal</b> и <b>↕️ Vertical</b>.</p>
            <div class="note">
                <p>Перед тем как приступить к написанию кода, подготовим структуру проекта 🗂️:</p>
            </div>
            <ul>
                <li><b>Project/Assets</b> ➔ ПКМ по пустому месту ➔ <b>Create ➔ Folder</b> ➔ Назовите папку <b>Scripts 📁</b>.</li>
                <li><b>Project/Assets/Scripts</b> ➔ ПКМ по пустому ➔ <b>Create ➔ MonoBehaviour Script</b> ➔ Назовите скрипт <b>Movement 📄</b>.</li>
                <li><b>Movement</b> ➔ Дабл-клик ➔ Откроется редактор (Visual Studio или Rider) 🖥️.</li>
            </ul>
        </div>
        <div class="third-section">
            <p>Я буду использовать Visual Studio, поэтому скриншоты будут из неё. После открытия скрипта вы увидите стандартную структуру:</p>
            <ol>
                <li>Класс <b>Movement</b> 📚</li>
                <li>Функция <b>Start()</b> 🏁</li>
                <li>Функция <b>Update()</b> 🔄</li>
            </ol>
            <img src="/images/third/vs-unity-env.webp" alt="VS Unity Environment" />
            <h4>🧠 Перед тем как начать писать код, давайте разберёмся, что это за функции и зачем они нужны.</h4>
            <div class="explain-functions">
                <ul>
                    <li><b>Start() 🏁</b> — как вы можете видеть по комментарию на английском представляет собой функцию, которая запускается один раз перед запуском <b>Update() 🔄</b></li>
                    <li><b>Update() 🔄</b> — эта функция будет вызываться каждый кадр</li>
                </ul>
            </div>
            <h4>✍️ После теории можно приступать к практике!</h4>
            <ol class="script-explain">
                <li>
                    <p>Перед тем как начать, нужно добавить скрипт к нашей сущности (кубу). Как это сделать, спросите вы? Очень легко! Есть несколько способов, но я расскажу только про <b>один</b>:<br />
                        <b>Зажмите</b> ЛКМ на скрипте <b>'Movement'</b> ➔ Перетащите его на сам куб.</p>
                </li>
                <li>
                    <p>
                        После этого нажмите на куб, и в <b>Inspector 🔍</b> появится ваш скрипт.
                    </p>
                </li>
                <li>
                    <p>
                        Теперь давайте зададим переменную скорости для нашего объекта. Для этого после объявления класса, перед методом <b>Start()</b>, добавим следующее: 
                    </p>             
                </li>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="serialize">[SerializeField] </span><span class="variable">public float</span><span class="name"> speed</span><span class="equals"> = </span><span class="value">5f</span><span class="equals">;</span>
                    </code>
                </div>
                <div class="serialize-pic">
                    <p><b>ℹ️ Информация! — [SerializeField]</b> позволяет менять значение переменной напрямую в редакторе.<img class="" src="/images/third/serialize-field.webp" /></p>
                </div>
                
                <li>
                    <p>
                        Метод <b>Start()</b> пока пропустим и перейдём к методу <b>Update()</b>. В нём мы зададим обработку инпутов:<br />
                    </p>
                </li>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="variable">float</span>
                        <span class="name"> moveX</span>
                        <span class="equals"> = </span>
                        <span class="class">Input</span>
                        <span class="equals">.</span>
                        <span class="method">GetAxis</span>
                        <span class="equals">("Horizontal");</span>
                    </code>
                </div>
                <br />
                <div class="code-section">
                    <code class="code-sample">
                        <span class="variable">float</span>
                        <span class="name"> moveZ</span>
                        <span class="equals"> = </span>
                        <span class="class">Input</span>
                        <span class="equals">.</span>
                        <span class="method">GetAxis</span>
                        <span class="equals">("Vertical");</span>
                    </code>
                </div>
                <br>
                <ul>
                        <li>
                            <b>moveX</b> — если вы не пропустили теорию выше, вам будет понятно, откуда мы берём <b>Input</b>. В <b>Input Manager</b> ось <b>Horizontal</b> отвечает за движение по оси X. Соответственно, триггерами будут клавиши <b>A</b> и <b>D</b>.
                        </li>
                        <li>
                            <b>moveZ</b> — аналогично, только эта ось отвечает за движение по оси Z. Здесь триггерами станут клавиши <b>W</b> и <b>S</b>.
                        </li>
                    </ul>
                    <p class="special-tip">⚠️ Если что-то осталось непонятным, обратитесь к 📖<a href="https://docs.unity3d.com/6000.1/Documentation/ScriptReference/Input.GetAxis.html" target="_blank">документации Unity</a>.</p>
                <li>
                    <p>
                        После того как мы получили значения для движения по осям X (moveX) и Z (moveZ), нам нужно объединить их в один вектор, чтобы передать в систему физики или движения объекта.
                    </p>
                </li>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="value">Vector3</span>
                        <span class="name"> move</span>
                        <span class="equals"> = </span>
                        <span class="variable">new </span>
                        <span class="value">Vector3</span>
                        <span class="equals">(</span>
                        <span class="name">moveX, </span>
                        <span class="value">0</span>
                        <span class="name">, moveZ)</span>
                    </code>
                </div>
                <p style="font-weight: 600;">Что происходит в этой строчке? 🔍</p>
                <ul>
                    <li>
                        <span style="font-family: 'Cascadia Code', 'Consolas', 'Courier New', monospace;">Vector3</span> — 
                        это стандартная структура в Unity, которая хранит сразу три значения: по осям X, Y и Z.
                    </li>
                    <li>Мы создаём новый вектор, где:</li>
                    <ul>
                        <li>
                            <span style="font-family: 'Cascadia Code', 'Consolas', 'Courier New', monospace;">moveX</span> 
                            — отвечает за движение по горизонтали (влево-вправо),</li>
                        <li>
                            <span style="font-family: 'Cascadia Code', 'Consolas', 'Courier New', monospace;">0</span> 
                            — по оси Y, потому что сейчас мы не хотим, чтобы объект прыгал или падал (движение остаётся в плоскости),
                        </li>
                        <li>
                            <span style="font-family: 'Cascadia Code', 'Consolas', 'Courier New', monospace;">moveZ</span> 
                            — отвечает за движение вперёд-назад.
                        </li>
                    </ul>
                </ul>
                <li>
                    <p>
                        Мы создали все зависимости, осталось только заставить двигаться наш объект:
                    </p>
                </li>
                <div class="code-section">
                    <code class="code-sample">
                        <span class="name">transform</span>
                        <span class="name">.</span>
                        <span class="yellow">Translate</span>
                        <span class="name">(</span>
                        <span class="light-blue">move</span>
                        <span class="yellow"> * </span>
                        <span class="name">speed</span>
                        <span class="yellow"> * </span>
                        <span class="method">Time</span>
                        <span class="name">.deltaTime);</span>
                    </code>
                </div>
                    <br>
                <li>
                    <p>
                        Все готово! Можете задать скорость, как вам угодно, нажать кнопку Play сверху и взглянуть на результат
                    </p>
                </li>
            </ol>
            <h4>После чего у вас должен получиться вот такой результат.</h4>
        </div>
        <div class="gif-section"><img src="/gifs/third/movement-example.gif" /></div>
        <a href="https://gifyu.com/image/bLXH5" target="_blank" class="gif-link">🔗 Альтернативная ссылка на GIF</a>            

        <hr>
        <h4 style="background: #1E293B; border-radius: 8px; padding: .4rem; color: aliceblue;">🚨 ЗАДАНИЕ 🚨</h4>
        <p style="max-width: 800px;">Ваша задача будет состоять в том, что нужно реализовать <b>спринт для куба.</b> Надо, чтобы при зажатом, <b>Shift</b> скорость увеличивалась</p>
        <div>
            <div class="special-tip-for-task">
                <p><b>✏️ Подсказка #1</b> — Сделайте новую переменную</p>
            </div>
            <div class="special-tip-for-task">
                <p><b>🖌️ Подсказка #2</b> — Обратитесь к Input.GetKey()</p>
            </div>
        </div>
        <div>
            <h4>Результат будет примерно такой</h4>
            <div class="gif-section"><img src="/gifs/third/task-done.gif" /></div>
            <a href="https://gifyu.com/image/bLXK2" target="_blank" class="gif-link">🔗 Альтернативная ссылка на GIF</a>            
            <p>👏 Поздравляю вас, если вы дошли до сюда, теперь вы представляете себе примерно, как вообще примерно пишутся скрипты, ну и полагаю, что можно приступать к следующему модулю</p>
        </div>
    </div>
</div>
</template>
<script>

</script>
<style scoped lang="">

</style>