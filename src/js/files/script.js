// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import SmoothScroll from 'smoothscroll-for-websites'


SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime: 600,
    // Размер шага в пикселях
    stepSize: 75,

    // Дополнительные настройки:

    // Ускорение
    accelerationDelta: 30,
    // Максимальное ускорение
    accelerationMax: 2,

    // Поддержка клавиатуры
    keyboardSupport: true,
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll: 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
})

// Вращение элемента по движению курсора
const rotate3d = (
    elSelector,
    {
        sensitivity = .6,
        thickness = 3.625
    } = ''
) => {

    const targets = document.querySelectorAll(elSelector)

    if (targets.length === 0) return

    for (let el of targets) {
        let layers

        // Создать объём

        createLayers()

        function createLayers() {

            el.style.perspective = '900px'

            const innerHTML = el.innerHTML

            layers = document.createElement('div')
            layers.className = 'z-layers'
            layers.innerHTML = innerHTML
            layers.style.position = 'relative'
            layers.style.transformStyle = 'preserve-3d'
            layers.style.width = '100%'
            layers.style.height = '100%'

            el.innerHTML = ''
            el.append(layers)

            for (let i = 0; i < 7; i++) {
                const clone = layers.cloneNode()

                clone.classList.remove('z-layers')
                clone.classList.add('z-layer')
                clone.innerHTML = innerHTML

                clone.style.position = 'absolute'
                clone.style.top = 0
                clone.style.left = 0
                clone.style.right = 0
                clone.style.bottom = 0
                clone.style.pointerEvents = 'none'
                clone.style.userSelect = 'none'

                clone.style.transform = `translateZ(-${(i + 1) * (thickness)}px)`
                clone.style.opacity = `${(7 - i) * (0.0625)}`

                layers.append(clone)
            }
        }
    }


}

rotate3d('.home-hero__img-diamond')