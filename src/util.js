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
            x: Math.round(elRect.x + (elRect.width - descRect.width)/2),
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


export const calculateArrowPosition = (el, position, placement='bottom') => {
    const c = placement[0]
    let style = {}

    const elRect = el.getBoundingClientRect()
    if(c === 't' || c === 'b') {
        style.left = Math.round(elRect.width/2 + elRect.x - position.x) + 'px'
        if(c === 't') {
            style.top = '100%'
        } else {
            style.bottom = '100%'
        }

    } else {
        style.top = Math.round(elRect.height/2 + elRect.y - position.y) + 'px'
        if(c === 'l') {
            style.left = '100%'
        } else {
            style.right = '100%'
        }
    }
    return style
}
