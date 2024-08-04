import { useEffect, useState } from 'react'
import { Interpolation, Theme } from '@emotion/react'
import { stylePropKeys, UITypes } from './_UIKit'
import { Active, ActiveType, Hover, HoverType } from './hoverActive'
import { MediaQuery, MediaQueryType } from './mediaQuery'
import { LayoutSize } from './layoutSize'
import { Layer } from './layer'
import { Flex } from './flex'
import { Margin, Padding } from './space'
import { Border } from './border'

type RemoveType = 'onClick' | 'flexReverse' | 'scroll'

type TypoType = {
    txtSize?: number
    txtColor?: string
    txtAlign?: 'start' | 'end' | 'center'
    txtWeight?: 'lighter' | 'normal' | 'medium' | 'bold'
}

export type TabType = Omit<UITypes, RemoveType> &
    Omit<HoverType, RemoveType> &
    Omit<ActiveType, RemoveType> &
    Omit<MediaQueryType, RemoveType> &
    TypoType

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

    const layoutSize = LayoutSize(props)
    const layer = Layer({ ...props, transitionTime: props.transitionTime ?? 0.3 })
    const flex = Flex({ ...props, ...aligns })
    const padding = Padding(props)
    const margin = Margin(props)
    const border = Border(props)
    const mediaQuery = MediaQuery({ ...props })
    const active = Active({ ...props, active: { opacity: 0.5 } })
    const hover = Hover({ ...props })

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
