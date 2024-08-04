import { Interpolation, Theme } from '@emotion/react'

//
export type LayoutSizeType = {
    width?: 'auto' | '100%' | string
    minWidth?: 'auto' | '100vw' | number | string
    maxWidth?: 'auto' | '100vw' | number | string
    height?: 'auto' | '100%' | string
    minHeight?: 'auto' | '100vh' | number | string
    maxHeight?: 'auto' | '100vh' | number | string
}

//
export const LayoutSize = (props: LayoutSizeType) => {
    return {
        width: props?.width,
        minWidth: props?.minWidth,
        maxWidth: props?.maxWidth,
        height: props?.height,
        minHeight: props?.minHeight,
        maxHeight: props?.maxHeight,
    } as Interpolation<Theme>
}

export const layoutKeys = ['width', 'minWidth', 'maxWidth', 'height', 'minHeight', 'maxHeight']
