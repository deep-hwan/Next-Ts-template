import { Interpolation, Theme } from '@emotion/react'
import { UITypes } from './_UIKit'
import { LayerTheme } from './layer'
import { FlexTheme } from './flex'
import { BorderTheme } from './border'
import { LayoutSizeTheme } from './layoutSize'
import { MarginTheme, PaddingTheme } from './space'
import { ScrollTheme } from './scroll'

export type ActiveType = {
    active?: UITypes
    onClick?: any
}

export const ActiveTheme = (props: ActiveType) => {
    const actives = {
        ...(props.active && {
            ':active': {
                ...(LayoutSizeTheme(props.active) as any),
                ...(LayerTheme(props.active) as any),
                ...(FlexTheme(props.active) as any),
                ...(PaddingTheme(props.active) as any),
                ...(MarginTheme(props.active) as any),
                ...(BorderTheme(props.active) as any),
                ...(ScrollTheme(props.active) as any),
                opacity: (!!props.onClick && props?.active.opacity) ?? 0.7,
                transition: `${props.active.transitionTime ?? 0.3}s ease-in-out`,
            },
        }),
    }

    return actives as Interpolation<Theme>
}

export type HoverType = { hover?: UITypes }

export const HoverTheme = (props: HoverType) => {
    const hovers = {
        ...(props.hover && {
            ':hover': {
                ...(LayoutSizeTheme(props.hover) as any),
                ...(LayerTheme(props.hover) as any),
                ...(FlexTheme(props.hover) as any),
                ...(PaddingTheme(props.hover) as any),
                ...(MarginTheme(props.hover) as any),
                ...(BorderTheme(props.hover) as any),
                ...(ScrollTheme(props.hover) as any),
                transition: `${props.hover.transitionTime ?? 0.3}s ease-in-out`,
            },
        }),
    }

    return hovers as Interpolation<Theme>
}

export const hoverActiveKeys = ['active', 'hover']
