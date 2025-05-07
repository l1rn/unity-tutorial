<template>
    <div>
        <div class="nineth-task-wrapper">
            <h2 style="font-family: 'Montserrat', sans-serif;">Анимации 2D</h2>
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
                                Нажимайте Create, создайте папку <b>/Assets/Animation</b> и создайте анимацию (Например, "Player_Idle.anim")
                            </p>
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
                            <p>Создайте таким же образом <b>Player_Run</b> и <b>Player_Jump</b></p>
                        </li>
                        <img src="/images/nineth/animation-start.webp" alt="animation-start">
                        <li>
                            <p>Включите Sample Rate <b>3 точки → Show Sample Rate</b></p>
                        </li>
                        <li>
                            <p>Выставите такие параметры: <b>Idle: 12, Run: 12, Jump: 2</b></p>
                        </li>
                        <img src="/images/nineth/sample-rate.webp" alt="sample-rate">
                    </ol>
                </li>
                <li>
                    <h3>Animator</h3>

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