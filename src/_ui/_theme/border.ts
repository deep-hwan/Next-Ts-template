import { Interpolation, Theme } from '@emotion/react'

//
export type BorderTypes = {
    border?: {
        solid: number
        position?: 'all' | 'left' | 'right' | 'top' | 'bottom'
        color?: string
    }
    borderRadius?: number | string
}

//
export const Border = (props: BorderTypes) => {
    return {
        border:
            !props?.border?.position || props?.border?.position === 'all'
                ? `${props?.border?.solid}px solid ${props?.border?.color}`
                : undefined,
        borderBottom:
            props?.border?.position === 'bottom'
                ? `${props?.border?.solid}px solid ${props?.border?.color}`
                : undefined,
        borderTop:
            props?.border?.position === 'top' ? `${props?.border?.solid}px solid ${props?.border?.color}` : undefined,
        borderRight:
            props?.border?.position === 'right' ? `${props?.border?.solid}px solid ${props?.border?.color}` : undefined,
        borderLeft:
            props?.border?.position === 'left' ? `${props?.border?.solid}px solid ${props?.border?.color}` : undefined,
        borderRadius: props?.borderRadius,
    } as Interpolation<Theme>
}

export const borderKeys = ['border', 'borderRadius']
