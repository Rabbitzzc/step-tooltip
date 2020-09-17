// 常量
const OFFSET = 10

// 简化 selector
export const getElementById = document.getElementById
export const getElement = (selector) => document.querySelector(selector)

// 定位
export const calculatePositions = (el, desc, placement = 'bottom') => {
    let position
    const elRect = el.getBoundingClientRect()
    const descRect = desc.getBoundingClientRect()

    placement = placement[0]
    if (placement === 't' || placement === 'b') {
        position = {
            x: Math.round(elRect.x + elRect.width - descRect.width),
            y:
                placement === 't'
                    ? Math.round(elRect.y - descRect.height - OFFSET)
                    : Math.round(elRect.y + elRect.height + OFFSET)
        }
    } else {
        position = {
            x:
                placement === 'l'
                    ? Math.round(elRect.x - descRect.width - OFFSET)
                    : Math.round(elRect.x + elRect.width + OFFSET),
            y: Math.round(elRect.y + (elRect.height - descRect.height) / 2)
        }
    }

    return position
}
