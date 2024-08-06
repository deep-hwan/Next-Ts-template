import { Interpolation, Theme } from '@emotion/react'

//
export type BorderTypes = {
    border?: {
        solid: number
        position?: 'all' | 'left' | 'right' | 'top' | 'bottom'
        color: string
        shape?: 'solid' | 'dotted' | 'dashed' | 'double' | 'outset' | 'inset' | 'groove' | 'ridge'
    }
    borderRadius?: number | string
}

//
export const BorderTheme = (props: BorderTypes) => {
    const { border, borderRadius } = props
    const { solid, position = 'all', color = '#ee2e2e2', shape = 'solid' } = border ?? {}

    return {
        border: !!solid && position === 'all' ? `${solid}px ${shape} ${color}` : undefined,
        borderBottom: position === 'bottom' ? `${solid}px ${shape} ${color}` : undefined,
        borderTop: position === 'top' ? `${solid}px ${shape} ${color}` : undefined,
        borderRight: position === 'right' ? `${solid}px ${shape} ${color}` : undefined,
        borderLeft: position === 'left' ? `${solid}px ${shape} ${color}` : undefined,
        borderRadius: borderRadius,
    } as Interpolation<Theme>
}

export const borderKeys = ['border', 'borderRadius']
