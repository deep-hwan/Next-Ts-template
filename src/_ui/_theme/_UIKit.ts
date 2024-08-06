import { ReactNode } from 'react'
import { LayerTheme, layerKeys, LayerType } from './layer'
import { FlexTheme, flexKeys, FlexType } from './flex'
import { BorderTheme, borderKeys, BorderTypes } from './border'
import { layoutKeys, LayoutSizeTheme, LayoutSizeType } from './layoutSize'
import { MarginTheme, PaddingTheme, spaceKeys, SpaceType } from './space'
import { scollKeys, ScrollTheme, ScrollType } from './scroll'
import { MediaQuery, mediaQueryKeys, MediaQueryType } from './mediaQuery'
import { ActiveTheme, ActiveType, HoverTheme, hoverActiveKeys, HoverType } from './hoverActive'

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
    const layoutSize = LayoutSizeTheme(props)
    const layer = LayerTheme(props)
    const flex = FlexTheme(props)
    const padding = PaddingTheme(props)
    const margin = MarginTheme(props)
    const border = BorderTheme(props)
    const scroll = ScrollTheme(props)
    const mediaQuery = MediaQuery(props)
    const active = ActiveTheme(props)
    const hover = HoverTheme(props)

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
