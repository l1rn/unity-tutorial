<template>
    <div>
        <div class="seven-task-wrapper">
            <h2 style="font-family: 'Montserrat', sans-serif;">Первый раз в 2D</h2>
            <hr>
            <div class="intro-block">
                <p> 
                    В целом мы разобрались с Unity и его инструментарием, сейчас помимо 3D, хотелось расмотреть
                    еще и 2D
                </p>
                <p>🎯 Новая цель: Создание TileMap</p>
            </div>
            <div class="explain-block">
                <ol>
                    <li>
                        <h3>Проверьте пакеты Unity</h3>
                        <p>Убедитесь, что у вас установлен 2D Tilemap Editor (это встроенный пакет Unity).</p>
                        <ul>
                            <li><p>Откройте Window → Package Manager.</p></li>
                            <li><p>В списке пакетов найдите 2D Tilemap Editor → Install (если не установлен).</p></li>
                            <li><p>Скачайте новый ассет со спрайтами → <a href="https://assetstore.unity.com/packages/2d/characters/sunny-land-103349" target="_blank">Sunny Land</a></p></li>
                        </ul>
                        <img src="/images/seventh/package-manager.webp" alt="package-manager">
                    </li>
                    <li>
                        <h3>Создайте Tilemap</h3>
                        <p>У вас уже есть Grid (это основа для Tilemap). Теперь добавим сам Tilemap:</p>
                        <ol>
                            <li><p>Правой кнопкой на объекте Grid в Hierarchy.</p></li>
                            <li><p>Выберите 2D Object → Tilemap → Rectangular (это стандартный Tilemap для прямоугольных тайлов).</p></li>
                        </ol>
                        <p>Теперь у вас есть:</p>
                        <ul>
                            <li><p>Grid (родительский объект) → управляет сеткой карты.</p></li>
                            <li><p>Tilemap (дочерний объект) → на нем вы будете рисовать тайлы.</p></li>
                        </ul>
                        <img src="/images/seventh/create-tilemap.webp" alt="create-tilemap">
                    </li>
                    <li>
                        <h3>Настройте Tile Palette</h3>
                        <p>Tile Palette — это панель, где хранятся ваши тайлы для рисования. Если сразу все есть переходите к 4 пункту</p>
                        <ol>
                            <li>
                                <h4>Откройте Tile Palette</h4>
                                <ul><li>Window → 2D → Tile Palette (если не видите, проверьте установку пакета из шага 1).</li></ul>
                            </li>
                            <img src="/images/seventh/tile-palette.webp" alt="tile-palette">
                            <li>
                                <h4>Создайте новую палитру (если нету)</h4>
                                <p>Не делайте это, если у вас уже был Grid, когда вы создавали </p>
                                <p>
                                    1. В окне Tile Palette нажмите кнопку Create New Palette. Назовите палитру (например, "GroundTiles") и сохраните в папку Assets.
                                </p>
                                <p>
                                    2. Назовите палитру (например, "GroundTiles") и сохраните в папку Assets.
                                </p>
                            </li>
                            <li>
                                <h4>Добавьте тайлы в палитру (если нету)</h4>
                                <p>Перетащите ваши ассеты-спрайты (отдельные тайлы или нарезанный тайлсет) из окна Project в Tile Palette.</p>
                                <p>Если спрайт большой и не нарезан:</p>
                                <ul>
                                    <li>
                                        <p>
                                            Выберите его в Project → в Inspector → Sprite Mode → Multiple → нажмите Sprite Editor.
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            В Sprite Editor: Slice → Grid by Cell Size → укажите размер тайла (например, 32x32).
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            Примените изменения (Apply) → спрайт разделится на отдельные тайлы.
                                        </p>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </li>
                    <li>
                        <h3>Начните рисовать карту</h3>
                        <ol>
                            <li><p>В окне Tile Palette выберите любой тайл (кликните по нему).</p></li>
                            <li><p>В верхней части Tile Palette выберите инструмент Brush (Кисть).</p></li>
                            <li><p>В окне Scene (или 2D-виде) кликайте по Tilemap, чтобы рисовать тайлы.</p></li>
                        </ol>
                        Подробнее в документации Unity - <a href="https://docs.unity3d.com/6000.0/Documentation/Manual/tilemaps/tile-palettes/create-tile-palette.html" target="_blank">Tile Palette</a>
                        <h4>Советы:</h4>
                        <ul>
                            <li>
                                <p>
                                    Удерживайте <b>ЛКМ</b> и двигайте мышью, чтобы рисовать непрерывно. Используйте ластик (Eraser) для удаления тайлов. Заливка (Fill) заполнит всю область одним тайлом.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Используйте <b>ластик (Eraser)</b> для удаления тайлов.
                                </p>
                            </li>
                            <li>
                                <p>
                                    <b>Заливка (Fill)</b> заполнит всю область одним тайлом.
                                </p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>Делайте несколько TileMap'ов</h3>
                        <p>В Sprite Render → Additional Settings → Order in Layer. 
                            Выставляйте тайлы так как вам нужно (в каком порядке будут объекты будут распологаться)</p>
                        <img src="/images/seventh/draw-tilemap.webp" alt="draw-tilemap">
                    </li>
                    <li>
                        <h3>Добавьте коллайдеры (чтобы игрок не проваливался)</h3>
                        <ol>
                            <li><p>Выберите ваш <b>Tilemap</b> в Hierarchy.</p></li>
                            <li><p>В Inspector нажмите <b>Add Component → Tilemap Collider 2D.</b></p></li>
                            <li><p>Главное, чтобы у вас был разделен тайл земли и травы</p></li>
                        </ol>
                    </li>
                    <li>
                        <h3>Если что-то пошло не так</h3>
                        <h4>Тайлы не отображаются?</h4>
                        <ul>
                            <li><p>Убедитесь, что Tilemap выбран в Hierarchy, а в Scene включен режим 2D (иконка "2D" вверху окна Scene).</p></li>
                            <li>
                                <p>
                                    Проверьте, что тайлы в палитре не прозрачные (может быть, альфа-канал в текстуре).
                                </p>
                            </li>
                        </ul>
                        <h4>Сетка (Grid) слишком крупная/мелкая?</h4>
                        <ul>
                            <li>Выберите Grid в Hierarchy → в Inspector настройте Cell Size (например, 1x1, если тайлы 32x32 пикселей).</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Готовый результат</h3>
                        <p>Теперь у вас есть:</p>
                        <ul>
                            <li><p><b>Grid</b> → задает сетку.</p></li>
                            <li><p><b>Tilemap</b> → на нем нарисована карта.</p></li>
                            <li><p><b>Tile Palette</b> → хранит тайлы для рисования.</p></li>
                        </ul>
                    </li>
                </ol>
                <hr>
                <div class="task-section">
                    <h3 style="background: #1E293B; border-radius: 8px; padding: .4rem; color: aliceblue;">🗺️ Задание: Tilemap</h3>
                    <ol class="montserrat">
                        <li><p>➕ Добавьте элементов на карту, не обязательно повторять, что у меня</p></li>
                        <li><p>🪴 Воспользуйтесь другими ассетами</p></li>
                        <li><p>🦦 Добавьте спрайт игрока, не в Grid</p></li>
                    </ol>
                    <div class="montserrat">
                    <h2 class="df-jcc">Результат</h2>
                        
                        <p>🥇 Добавили персонажа и окружение</p>
                        <p>🥈 Не добавили окружение</p>
                        <p>🥉 Не добавили персонажа</p>
                        <img src="/images/seventh/result.webp" alt="result">
                    </div>
                </div>
                
            </div>
        </div>
        <hr>
    <div class="summary">
        <h2>🚀 Итоги урока</h2>
        <h3>🤫 Сегодня вы освоили базовые навыки работы с 2D в Unity:</h3>
        <ul class="conclusion">
            <li>🎯 Настроили Tilemap систему</li>
            <li>🖌️ Создали первую интерактивную карту</li>
            <li>⚙️ Разобрались с коллайдерами и слоями</li>
        </ul>
        
        <div>
            <h3>💡 Советы для продвижения:</h3>
            <ul class="pro-tips">
                <li>Используйте <b>Composite Collider 2D</b> для оптимизации физики (объединяет коллайдеры в один)</li>
                <li>Экспериментируйте с разными типами Tilemap:
                    <ul>
                        <li>Isometric — для псевдо-3D эффекта</li>
                        <li>Hexagonal — стратегические игры</li>
                    </ul>
                </li>
            </ul>
        </div>

        <div>
            <h3>⏭️ Что дальше?</h3>
            <div class="next-steps">
                <p>Попробуйте добавить:</p>
                <ol>
                    <li>Анимацию воды через <b>Tilemap Animation</b></li>
                    <li>Динамическую смену тайлов (например, разрушаемые блоки)</li>
                    <li>Параллакс-эффект для фона</li>
                </ol>
            </div>
        </div>

        <div>
        <h3>💩 Вывод</h3>
        <div class="motivation">
            <p>
            🌟 Не останавливайтесь на достигнутом! Ваша первая 2D-среда готова — теперь можно переходить 
            к созданию игровой механики и анимации персонажа.
            </p>
        </div>
    </div>
        
    </div>
   
    </div>
</template>
<script setup>

</script>
<style scoped lang="sass">
@import '@/assets/styles/pages/third/first-task.sass'
    
</style>