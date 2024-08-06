import { useEffect, useState } from 'react'
import { Interpolation, Theme } from '@emotion/react'
import { stylePropKeys, UITypes } from './_UIKit'
import { ActiveTheme, ActiveType, HoverTheme, HoverType } from './hoverActive'
import { MediaQuery, MediaQueryType } from './mediaQuery'
import { LayoutSizeTheme } from './layoutSize'
import { LayerTheme } from './layer'
import { FlexTheme } from './flex'
import { MarginTheme, PaddingTheme } from './space'
import { BorderTheme } from './border'

type RemoveType = 'onClick' | 'reverse' | 'scroll' | 'userSelect' | 'transitionTime'

type TypoType = {
    txtSize?: number
    txtColor?: string
    txtAlign?: 'start' | 'end' | 'center'
    txtWeight?: 'lighter' | 'normal' | 'medium' | 'bold'
}

type UITypesWithoutRemoveType = Omit<UITypes, RemoveType>

type CleanedHoverType = {
    hover?: UITypesWithoutRemoveType
}

type CleanedActiveType = {
    active?: UITypesWithoutRemoveType
}

type CleanedMediaQueryType = {
    mediaQuery?: {
        s1440?: UITypesWithoutRemoveType
        s1280?: UITypesWithoutRemoveType
        s1080?: UITypesWithoutRemoveType
        s768?: UITypesWithoutRemoveType
        s600?: UITypesWithoutRemoveType
        s428?: UITypesWithoutRemoveType
    }
}

export type TabType = UITypesWithoutRemoveType & CleanedHoverType & CleanedActiveType & CleanedMediaQueryType & TypoType

//
export const TAB_EXTRACT_PROPS = (props: TabType & { [key: string]: any }) => {
    const [os, setOs] = useState<'window' | 'mobile'>('window')

    useEffect(() => {
        if (/Macintosh|iPhone|iPad|iPod|Android/.test(navigator.userAgent)) setOs('mobile')
        else if (/Windows/.test(navigator.userAgent)) setOs('window')
        else setOs('window')
    }, [os])

    const aligns = {
        direction: props?.direction ?? 'horizontal',
        align: props?.align ?? 'center',
        crossAlign: props.crossAlign ?? 'center',
    }

    const layoutSize = LayoutSizeTheme(props)
    const layer = LayerTheme({ ...props, transitionTime: props.transitionTime ?? 0.3 })
    const flex = FlexTheme({ ...props, ...aligns })
    const padding = PaddingTheme(props)
    const margin = MarginTheme(props)
    const border = BorderTheme(props)
    const mediaQuery = MediaQuery({ ...props })
    const active = ActiveTheme({ ...props, active: { opacity: 0.5 } })
    const hover = HoverTheme({ ...props })

    const styleProps: any = {}
    const otherProps: any = {}

    Object.keys(props).forEach((key) => {
        if (stylePropKeys.includes(key)) styleProps[key] = props[key]
        else otherProps[key] = props[key]
    })

    const TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: os === 'window' ? '300' : '400' },
        normal: { fontWeight: 400 },
        medium: { fontWeight: os === 'window' ? '500' : '600' },
        bold: { fontWeight: os === 'window' ? '700' : '700' },
    } as const

    const tab_theme = {
        fontSize: props.txtSize ? `${props.txtSize / 16}rem` : '0.875rem',
        color: props.txtColor ?? '#4788f4',
        fontWeight: TYPOGRAPH_WEIGHT[props.txtWeight ?? 'normal'].fontWeight,
        textAlign: props.txtAlign ?? 'center',
        transition: '0.3s ease-in-out',
    }

    return {
        styleProps: {
            ...(layoutSize as any),
            ...(layer as any),
            ...(flex as any),
            ...(padding as any),
            ...(margin as any),
            ...(border as any),
            ...(mediaQuery as any),
            ...(active as any),
            ...(hover as any),
            ...tab_theme,
            position: 'relative',
            whiteSpace: 'nowrap',
            userSelect: 'none',
        } as Interpolation<Theme>,
        otherProps,
    }
}
