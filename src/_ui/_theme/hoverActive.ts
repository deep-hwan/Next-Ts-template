import { Interpolation, Theme } from '@emotion/react'
import { UITypes } from './_UIKit'
import { Layer } from './layer'
import { Flex } from './flex'
import { Border } from './border'
import { LayoutSize } from './layoutSize'
import { Margin, Padding } from './space'
import { Scroll } from './scroll'

export type ActiveType = {
    active?: UITypes
    onClick?: any
}

export const Active = (props: ActiveType) => {
    const actives = {
        ...(props.active && {
            ':active': {
                ...(LayoutSize(props.active) as any),
                ...(Layer(props.active) as any),
                ...(Flex(props.active) as any),
                ...(Padding(props.active) as any),
                ...(Margin(props.active) as any),
                ...(Border(props.active) as any),
                ...(Scroll(props.active) as any),
                opacity: (!!props.onClick && props?.active.opacity) ?? 0.7,
                transition: `${props.active.transitionTime ?? 0.3}s ease-in-out`,
            },
        }),
    }

    return actives as Interpolation<Theme>
}

export type HoverType = { hover?: UITypes }

export const Hover = (props: HoverType) => {
    const hovers = {
        ...(props.hover && {
            ':hover': {
                ...(LayoutSize(props.hover) as any),
                ...(Layer(props.hover) as any),
                ...(Flex(props.hover) as any),
                ...(Padding(props.hover) as any),
                ...(Margin(props.hover) as any),
                ...(Border(props.hover) as any),
                ...(Scroll(props.hover) as any),
                transition: `${props.hover.transitionTime ?? 0.3}s ease-in-out`,
            },
        }),
    }

    return hovers as Interpolation<Theme>
}

export const hoverActiveKeys = ['active', 'hover']
