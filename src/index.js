import {
    getElement,
    calculatePositions,
    calculateArrowPosition,
    OFFSET
} from './util.js'

import './index.css'
class StepTip {
    // 默认定位
    static defaultPlacement = 'bottom'
    // 整体的背景墙
    static backdropHTML = '<div id="step-tooltip-backdrop" class="step-tooltip-backdrop"></div>'
    // 底部按钮  Done Back Next
    constructor(options) {
        // 配置项
        this.options = {...{
            initialText: '哈喽，准备好了解 step-tooltip 了么？',
            steps: [], // {element, container}
            backdropColor: 'rgb(0 0 0 / 0.56)',
            options: {
                backLabel: '上一步',
                nextLabel: '下一步',
                skipLabel: '我知道了',
                doneLabel: '完成',
            }
        },...options}

        this.startStep()
    }

    setListener() {
        getElement('#step-tooltip-back').addEventListener('click', () => this.toggleStep(-1))
        getElement('#step-tooltip-next').addEventListener('click', () => this.toggleStep(1))
        getElement('#step-tooltip-end').addEventListener('click', () => this.endStep())
    }

    removeListener() {
        getElement('#step-tooltip-back').removeEventListener('click', () => {})
        getElement('#step-tooltip-next').removeEventListener('click', () => {})
        getElement('#step-tooltip-end').removeEventListener('click', () => {})
    }

    startStep() {
        // 当前 stepIndex
        this.stepIndex = 0

        getElement("body").innerHTML += StepTip.backdropHTML
        this.backdrop = getElement('#step-tooltip-backdrop')
        this.selfStyle = document.head.appendChild(document.createElement("style"))

        this.setup()
        this.setListener()
    }
    // 初始化工作
    setup() {
        const {
            steps
        } = this.options

        if (!steps || !steps.length) return

        const current = steps[this.stepIndex]

        const {
            element,
            container,
        } = current

        let placement = current.hasOwnProperty('placement') ? current.placement : StepTip.defaultPlacement

        const innerWidth = window.innerWidth
        // 对于宽度很小的场景，应该考虑展示在下方或者上面
        if (innerWidth <= 400 && (placement === 'left' || placement === 'right')) placement = StepTip.defaultPlacement

        const elm = getElement(element)

        // 错误
        if (!elm) throw new Error('Cant\'t find' + element + ', please check for spelling mistakes.')

        // 禁止 body 滚动
        getElement('body').classList.add('scroll-disabled')

        // 让元素滚动到可视区域内 scrollIntoViewIfNeeded 兼容性不行
        elm.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })

        const elmRect = elm.getBoundingClientRect()

        // 生成一个DOM元素
        const activeElm = this.createActiveMatte(elmRect, getComputedStyle(elm))
        const containerElm = this.createContainer(container)

        // 创建 arrow css
        const placements = ['top', 'left', 'bottom', 'right']
        placements.forEach(v => containerElm.classList.remove(`step-tooltip-arrow-${v}`))
        containerElm.removeAttribute('data-top')
        containerElm.removeAttribute('data-left')

        containerElm.classList.add(`step-tooltip-arrow-${placement}`)

        let position = calculatePositions(elm, containerElm, placement)

        let {
            width
        } = containerElm.getBoundingClientRect()


        // 是否在可视区域
        if (position.x + width >= innerWidth) {
            // 向左移
            position.x = Math.round(elmRect.right - width + OFFSET)
        } else if (position.x <= 0) {
            // 向右移
            position.x = Math.round(elmRect.x - OFFSET)

            // 如果宽度小于浏览器宽度，则需要调整宽度
            if (width >= innerWidth) {
                containerElm.style.width = (innerWidth - position.x * 2) + 'px'
            }
        }

        const arrowStyle = calculateArrowPosition(activeElm, position, placement)
        document.head.removeChild(this.selfStyle)
        this.selfStyle = document.head.appendChild(document.createElement("style"))
        if (placement === 'left' || placement === 'right') {
            this.selfStyle.innerHTML = `.step-tooltip-arrow-left :after {top:${arrowStyle.top}} .step-tooltip-arrow-right :after {top:${arrowStyle.top}}`
        } else {
            this.selfStyle.innerHTML = `.step-tooltip-arrow-bottom :after {left:${arrowStyle.left}} .step-tooltip-arrow-top :after {left:${arrowStyle.left}}`
        }

        // 有了 DOM ，也有了偏移量
        containerElm.style.transform = `translate(${position.x}px,${position.y}px)`

    }

    // 切换前后
    toggleStep(move) {
        const {
            steps
        } = this.options

        this.stepIndex += move

        if (this.stepIndex >= 0 && this.stepIndex < steps.length) {
            return this.setup()
        } else {
            this.endStep()
        }
    }

    // 终止整个流程
    endStep() {
        getElement('body').classList.remove('scroll-disabled')
        document.head.removeChild(this.selfStyle)

        this.removeListener()

        this.backdrop.parentNode.removeChild(this.backdrop)
        this.backdrop = null

        this.stepIndex = 0

        // TODO 调用 onComplete 事件
    }

    // 创建 active 蒙版 div
    createActiveMatte(elmRect,styles) {
        const { backdropColor } = this.options
        let activeElm = getElement("#step-tooltip-backdrop .step-tooltip-active-matte")
        if (!activeElm) {
            activeElm = document.createElement("div")
            activeElm.setAttribute("id", "step-tooltip-active-matte")
            activeElm.classList.add("step-tooltip-active-matte")
            this.backdrop.append(activeElm)
        }
        activeElm.style.top = Math.round(elmRect.top) + "px"
        activeElm.style.left = Math.round(elmRect.left) + "px"
        activeElm.style.height = elmRect.height + "px"
        activeElm.style.width = elmRect.width + "px"
        activeElm.style.borderRadius = styles.borderRadius
        activeElm.style.boxShadow = "0 0 0 9999px " + backdropColor
        return activeElm
    }

    // 创建一个容器，添加配置信息
    createContainer(container) {
        const {
            steps
        } = this.options

        let containerElm = getElement('#step-tooltip-backdrop .step-tooltip-active-container')

        // 如果不存在则需要重新创建
        if (!containerElm) {
            containerElm = document.createElement('div')

            // 分层，提高动画性能
            containerElm.style.willChange = 'transform'
            containerElm.classList.add('step-tooltip-active-container')
            // 自定义内容
            containerElm.innerHTML += "<div id='step-tooltip-active-container-text'></div>"
            // 自定义footer
            containerElm.innerHTML += `<div class='step-tooltip-footer'><button id='step-tooltip-end' class='step-tooltip-end'>${this.options.options.skipLabel}</button><div><button id='step-tooltip-back' class='step-tooltip-back'>${this.options.options.backLabel}</button><button id='step-tooltip-next' class='step-tooltip-next'>${this.options.options.nextLabel}</button></div></div>`

            this.backdrop.append(containerElm)
        }

        // button 内置样式
        const backBtn = getElement('#step-tooltip-back')
        const nextBtn = getElement('#step-tooltip-next')

        // 第一次的时候，禁用 pre
        if (this.stepIndex === 0) {
            backBtn.setAttribute('disabled', true)
            backBtn.classList.add('step-tooltip-disabled-btn')
        } else {
            backBtn.removeAttribute('disabled', true)
            backBtn.classList.remove('step-tooltip-disabled-btn')
        }

        nextBtn.innerText = this.stepIndex === steps.length - 1 ? this.options.options.doneLabel : this.options.options.nextLabel

        // 内容区域展示配置信息
        getElement('#step-tooltip-active-container-text').innerHTML = container

        return containerElm
    }
}

// 返回一个函数，返回实例
export default options => new StepTip(options)
