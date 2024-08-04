import { ReactNode } from 'react'
import { Layer, layerKeys, LayerType } from './layer'
import { Flex, flexKeys, FlexType } from './flex'
import { Border, borderKeys, BorderTypes } from './border'
import { layoutKeys, LayoutSize, LayoutSizeType } from './layoutSize'
import { Margin, Padding, spaceKeys, SpaceType } from './space'
import { scollKeys, Scroll, ScrollType } from './scroll'
import { MediaQuery, mediaQueryKeys, MediaQueryType } from './mediaQuery'
import { Active, ActiveType, Hover, hoverActiveKeys, HoverType } from './hoverActive'

//
export interface UITypes
    extends LayerType,
        FlexType,
        LayoutSizeType,
        BorderTypes,
        SpaceType,
        ScrollType,
        MediaQueryType,
        HoverType,
        ActiveType {
    children?: ReactNode
}

export const stylePropKeys = [
    layoutKeys,
    ...layerKeys,
    ...flexKeys,
    ...spaceKeys,
    ...borderKeys,
    ...scollKeys,
    ...mediaQueryKeys,
    ...hoverActiveKeys,
]

//
export const UI_EXTRACT_PROPS = (props: UITypes & { [key: string]: any }) => {
    const layoutSize = LayoutSize(props)
    const layer = Layer(props)
    const flex = Flex(props)
    const padding = Padding(props)
    const margin = Margin(props)
    const border = Border(props)
    const scroll = Scroll(props)
    const mediaQuery = MediaQuery(props)
    const active = Active(props)
    const hover = Hover(props)

    const styleProps: any = {}
    const otherProps: any = {}

    Object.keys(props).forEach((key) => {
        if (stylePropKeys.includes(key)) styleProps[key] = props[key]
        else otherProps[key] = props[key]
    })

    return {
        styleProps: {
            ...(layoutSize as any),
            ...(layer as any),
            ...(flex as any),
            ...(padding as any),
            ...(margin as any),
            ...(border as any),
            ...(scroll as any),
            ...(mediaQuery as any),
            ...(active as any),
            ...(hover as any),
        },
        otherProps,
    }
}
