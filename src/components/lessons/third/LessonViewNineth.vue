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
                            <p>Выставите такие параметры: <b>Idle: 10, Run: 10, Jump: 2</b></p>
                        </li>
                        <img src="/images/nineth/sample-rate.webp" alt="sample-rate">
                    </ol>
                </li>
                <li>
                    <h3>Animator</h3>
                    <p>
                        Если по какой-то причине не создался Animator Controller в папке <b>/Animation</b>. У вас проблемы
                        делайте все пункты по новой, у вас должен появится контроллер <b>Player</b> в папке
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
                    <p>
                        - Перейдем к коду для линка с анимациями
                    </p>
                    <div class="code-section">
                        <code class="code-sample">
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
                    
                </li>
                <li>
                    <h3>Опробуйте результат</h3>
                </li>
            </ol>
        </div>
    </div>
</template>
<script>
</script>
<style scoped lang="sass">
@import '@/assets/styles/pages/third/third-task.sass' 
</style>