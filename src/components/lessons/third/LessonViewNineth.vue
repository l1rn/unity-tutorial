<template>
    <div>
        <div class="nineth-task-wrapper">
            <h2 style="font-family: 'Montserrat', sans-serif;">Анимации 2D</h2>
            <hr>
            <div class="intro-block">
                <p> 
                    Очень внимательные могли заметить <b>Animator</b> в прошлом уроке и догадаться, что будет в следующем модуле.
                    Так как мы познакомились с Tilemap, спрайтами в целом и дали жизнь 
                    персонажу будет неплохо его анимировать
                </p>
                <h3>🎯 Новая цель: Анимация персонажа</h3>
            </div>
            <ol>
                <li>
                    <h3>Создаение анимаций</h3>
                    <p>Перед тем как анимировать персонажа создадим анимации</p>
                    <ol>
                        <li>
                            <p>
                                Перейдите в <b>Window → Animation → Animation</b>
                            </p>
                        </li>
                        <li>
                            <p>
                                Нажмите по персонажу → Нажимите Create, создайте папку <b>/Assets/Animation</b> и создайте анимацию (Например, "Player_Idle.anim")
                            </p>
                            <img src="/images/nineth/how-to-create-anim.webp" alt="how-to-create-anim">
                        </li>
                        <li>
                            <p>Разверните SunnyLand Artwork <b>/SunnyLand Artwork/Sprites/player/idle</b></p>
                        </li>
                        <li>
                            <p>Перетащите все анимации (Например, "player-idle-1") в <b>Animation</b></p>
                        </li>
                        <li>
                            <p>После можете проиграть сами анимации на кнопку <b>Play</b></p>
                        </li>
                        <li>
                            <p>Создайте таким же образом <b>Player_Run</b> и <b>Player_Jump</b>. Player_Idle → Create New Clip...</p>
                        </li>
                        <img src="/images/nineth/animation-start.webp" alt="animation-start">
                        <li>
                            <p>Включите Sample Rate <b>3 точки → Show Sample Rate</b></p>
                        </li>
                        <li>
                            <p>Выставите такие параметры <b>Samples</b>: <b>Idle: 12, Run: 12, Jump: 2</b>.</p>
                        </li>
                        <img src="/images/nineth/sample-rate.webp" alt="sample-rate">
                    </ol>
                </li>
                <li>
                    <h3>Animator</h3>
                    <p>
                        Если по какой-то причине не создался Animator Controller в папке <b>/Animation</b>. У вас проблемы
                        делайте все пункты по новой, у вас должен появится контроллер <b>Player</b>
                    </p>
                    
                    <ul>
                        <li>
                            <p>Перейдите в сам Animator, нажмите <b>дабл-кликом</b> по <b>Player</b></p>
                            <p>Наши 3 анимации в <b>Animator</b> с которыми мы будем работать</p>
                            <img src="/images/nineth/animations-to-animator.webp" alt="animations-to-animator">
                        </li>
                        <li>
                            <p>Теперь у нас все готово и мы можем приступать к анимации</p>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>Настройка Animator Controller для Player</h3>
                    <p>
                        - Перейдите во вкладку Parameters, найдите там ➕
                    </p>
                    <ul>
                        <li>
                            <p>Нажмите на ➕ и создайте Float → Speed</p>
                        </li>
                    </ul>
                    <p>
                        - Обратно вернитесь к анимациям. Нажмите <b>ПКМ</b> на <b>Player_Idle → Make Transition → ЛКМ на Player_Run</b>. 
                        Нажмите на созданную стрелку
                    </p>
                    <ul>
                        <li><p><b>Inspector → Conditions → ➕ → Speed - Greater - 0.01</b></p></li>
                        <li><p><b>Inspector → Has Exit Time → ❌</b></p></li>
                        <li><p><b>Inspector → Settings → Transition Duration → 0</b></p></li>
                    </ul>
                    <p>
                        - Создайте такую стрелку (Transition - Переход) в обратную сторону. 
                        Нажмите на созданную стрелку
                    </p>
                    <ul>
                        <li><p><b>Inspector → Conditions → ➕ → Speed - Less - 0.01</b></p></li>
                        <li><p><b>Inspector → Has Exit Time → ❌</b></p></li>
                        <li><p><b>Inspector → Settings → Transition Duration → 0</b></p></li>
                    </ul>
                    

                </li>
                <div class="photo-wrapper">
                    <div class="animator-photo-explain">
                        <img src="/images/nineth/make-transition.webp" alt="make-transition">
                    </div>
                    <div class="animator-photo-explain">
                        <img src="/images/nineth/transition-settings.webp" alt="transition-settings">
                    </div>
                </div>
                <li>
                    <h3>Фикс коллайдера тайлов</h3>
                    <p>У вас могла возникнуть проблема, что вы где-то застряли или типо того. Это связано с проблемой коллайдеров. Можем легко все исправить: <b>удалите</b> старый коллайдер, <b>добавьте</b> новый <b>Edge Collider2D</b></p>
                    <ul>
                        <li><p>Далее нажмите <b>Edge Collider2D → Edit Collider</b></p></li>
                        <li><p><b>Тяните</b> зеленую линию за квадраты и образуйте что-то примерное на скрине</p></li>
                        <li><p>Красными линиями показано на картинке, как примерно отредачить коллайдер</p></li>
                    </ul>
                    <img src="/images/nineth/fix-with-collider.webp" alt="fix-with-collider">
                </li>
                <li>
                    <h3>Подключение к скрипту</h3>
                    <p>
                        - Перейдем к коду для линка с анимациями
                    </p>
                    <div class="code-section">
                        <code class="code-sample">
                            <span class="name">// PlayerController</span><br>
                            <span class="blue">public </span>
                            <span class="method">Animator </span>
                            <span class="name">animator;</span>
                        </code>
                    </div>
                    <div class="code-section">
                        <code class="code-sample">
                            <span class="name">// void Update()</span>
                            <br>
                            <span class="name">animator.</span>
                            <span class="yellow">SetFloat</span>
                            <span class="name">("Speed",</span>
                            <span class="value"> Mathf</span>
                            <span class="name">.</span>
                            <span class="yellow">Abs</span>
                            <span class="name">(body.linearVelocity.x));</span>
                        </code>
                    </div>
                    <div class="warning-block">
                        <p>- Если нету <b>Animator</b> в <b>Inspector</b> у <b>Player</b> добавьте контроллер в котором мы работали</p>
                    </div>
                    <p>- Далее сохраните файл и перенесите <b>Animator</b> в <b>Player Controller → Animator</b></p>
                    <img style="max-width: 700px;" src="/images/nineth/animator-select.webp" alt="animator-select">
                </li>
                <li>
                    <h3>Готово! Попробуйте поиграть</h3>
                    <img src="/gifs/nineth/result.gif" alt="result">
                </li>
                <li>
                    <h3>Добавим анимацию прыжка</h3>
                    <p>Осталось совсем чуть-чуть <b>Less = &lt; Greater = ></b></p>
                    <h4>Переходы между состояниями:</h4>
                    <p><b>Any State → Jump:</b></p>
                    <ul>
                        <li><p>Conditions: <b>IsJumping = true</b></p></li>
                        <li><p>Settings:</p>
                        <div class="montserrat">
                            <p>- Has Exit Time: ❌</p>
                            <p>- Transition Duration: 0</p>
                            <p>- Interruption Source: None</p>
                            <p>- Can Transition To Self: ❌</p>
                        </div>
                        </li>
                    </ul>
                    <p><b>Jump → Idle:</b></p>
                    <ul>
                        <li><p>Conditions:</p></li>
                        <p><b>IsJumping = false</b> И <b>Speed &lt; 0.01</b> - Less</p>
                        <li><p>Settings: </p></li>
                        <div class="montserrat">
                            <p>- Has Exit Time: ❌</p>
                            <p>- Transition Duration: 0.01</p>
                        </div>
                    </ul>
                    <p><b>Jump → Run:</b></p>
                    <ul>
                        <li><p>Conditions:</p></li>
                        <p><b>IsJumping = false</b> И <b>Speed > 0.01</b> - Greater</p>
                        <li><p>Settings: </p></li>
                        <div class="montserrat">
                            <p>- Has Exit Time: ❌</p>
                            <p>- Transition Duration: 0.01</p>
                        </div>
                    </ul>
                    <h4>Подключение к скрипту</h4>
                    <div class="code-section">
                        <code class="code-sample">
                            <span class="name">// void Update()</span>
                            <br>
                            <span class="name">animator.</span>
                            <span class="yellow">SetBool</span>
                            <span class="name">("IsJumping"</span>
                            <span class="name">, !isGrounded);</span>
                        </code>
                    </div>
                </li>
                <li><h3>Пример работы:</h3></li>
                <img src="/gifs/nineth/final-result.gif" alt="final-result">
            </ol>
            <hr>
            <div class="final-task-animation">
                <h3 style="background: #1E293B; border-radius: 8px; padding: .4rem; color: aliceblue;">
                    😶‍🌫️ Задание: Crounch - Приседания
                </h3>
                <ol class="montserrat">
                    <li><p>☠️ Реализуйте ползанье</p></li>
                    <li><p>🫏 Сделайте анимацию для этого</p></li>
                    <li><p>📉 Скорость должна быть ниже, чем при беге</p></li>
                    <li><p>🥶 Добавьте еще один коллайдер</p></li>
                    <li><p>🆕 Сделайте новый коллайдер по размеру ползанья</p></li>
                    <li><p>👴 Сделайте так, чтобы старый коллайдер выключался и активировался новый</p></li>
                    <li><p>🫥 Вы должны приседать на клавишу <b>S</b> или <b>LeftCtrl</b></p></li>
                    <li><p>👽 Добавьте припятсвие в "один блок", чтобы проверить результат</p></li>
                </ol>
                <div class="montserrat">
                    <p>🥇 Все как на гифке снизу</p>
                    <p>🥈 Принимается кривая обработка на <b>Can Stand Up</b></p>
                    <p>🥉 Принимается кривая анимация на Crouch</p>
                </div>
            </div>
            <h3>Конец третьего модуля:</h3>
        </div>
    </div>
</template>
<script>
</script>
<style scoped lang="sass">
@import '@/assets/styles/pages/third/third-task.sass' 
</style>