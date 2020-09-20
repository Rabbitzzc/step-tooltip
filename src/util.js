// 常量
export const OFFSET = 15

// 简化 selector
export const getElement = (selector) => document.querySelector(selector)

// 定位
export const calculatePositions = (el, desc, placement = 'bottom') => {
    let position
    const elRect = el.getBoundingClientRect()
    const descRect = desc.getBoundingClientRect()

    const c = placement[0]
    if (c === 't' || c === 'b') {
        position = {
            x: Math.round(elRect.x + elRect.width - descRect.width),
            y: c === 't' ?
                Math.round(elRect.y - descRect.height - OFFSET) : Math.round(elRect.y + elRect.height + OFFSET)
        }
    } else {
        position = {
            x: c === 'l' ?
                Math.round(elRect.x - descRect.width - OFFSET) : Math.round(elRect.x + elRect.width + OFFSET),
            y: Math.round(elRect.y + (elRect.height - descRect.height) / 2)
        }
    }

    return position
}
