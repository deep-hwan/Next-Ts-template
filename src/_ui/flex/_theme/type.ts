import { ReactNode } from 'react'

//
//
type Size = {
    width?: 'auto' | '100%' | string
    minWidth?: 'auto' | '100vw' | number | string
    maxWidth?: 'auto' | '100vw' | number | string
    height?: 'auto' | '100%' | string
    minHeight?: 'auto' | '100vh' | number | string
    maxHeight?: 'auto' | '100vh' | number | string
}

//
//
type Flex = {
    flex?: number | string
    flexReverse?: boolean
    direction?: 'horizontal' | 'vertical'
    align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
    crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'
    alignSelf?: 'auto' | 'stretch' | 'start' | 'end' | 'center' | 'baseline'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    basis?: number | string | 'auto'
    grow?: number
    shrink?: number
    gap?: number
    crossGap?: number
    order?: number
}

//
//
type Space = {
    padding?: {
        all?: number | string
        horizontal?: number | string
        vertical?: number | string
        top?: number | string
        bottom?: number | string
        left?: number | string
        right?: number | string
    }

    margin?: {
        all?: number | string
        horizontal?: number | string
        vertical?: number | string
        top?: number | string
        bottom?: number | string
        left?: number | string
        right?: number | string
    }
}

//
//
type Theme = {
    backgroundColor?: string
    background?: string
    backgroundRepeat?: 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat'
    backgroundSize?: 'contain' | 'cover' | string
    backgroundPosition?: 'top' | 'bottom' | 'center' | 'left' | 'right' | 'string'
    backgroundClip?: 'border-box' | 'padding-box' | 'content-box' | 'initial' | 'inherit'
    backgroundImageUrl?: string
    border?: {
        solid: number
        position?: 'all' | 'left' | 'right' | 'top' | 'bottom'
        color?: string
    }
    borderRadius?: number | string
    shadow?: {
        x?: number
        y?: number
        blur?: number
        color?: string
    }
}

//
//
type Order = {
    zIndex?: number
    transitionTime?: number
    cursor?: 'default' | 'grab' | 'pointer' | 'zoom'
    opacity?: number
    touchOpacity?: number
}

//
//
type Scroll = {
    scroll?: {
        type?: 'visible' | 'auto' | 'scroll' | 'hidden'
        bar?: boolean
    }
}

//
//
export interface FlexTypes extends Flex, Size, Theme, Order, Space, Scroll {
    onClick?: any
    children?: ReactNode
}
