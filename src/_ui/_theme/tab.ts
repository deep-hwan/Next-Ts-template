/** @jsxImportSoure @emotion/react */

import { Interpolation, Theme } from '@emotion/react'
import { stylePropKeys, UITypes } from './_UIKit'
import { ActiveTheme, HoverTheme } from './hoverActive'
import { MediaQuery } from './mediaQuery'
import { LayoutSizeTheme } from './layoutSize'
import { LayerTheme } from './layer'
import { FlexTheme } from './flex'
import { MarginTheme, PaddingTheme } from './space'
import { BorderTheme } from './border'

//
type RemoveType = 'onClick' | 'reverse' | 'scroll' | 'userSelect' | 'transitionTime'

export type TabTypoType = {
    txtSize?: number
    txtColor?: string
    txtAlign?: 'start' | 'end' | 'center'
    txtWeight?: 'lighter' | 'normal' | 'medium' | 'bold'
}

type ExtandUITypes = Omit<UITypes, RemoveType> & TabTypoType

type CleanedHoverType = {
    hover?: ExtandUITypes & TabTypoType
    active?: ExtandUITypes & TabTypoType
    disabled?: {
        txtSize?: number
        txtColor?: string
        txtWeight?: 'lighter' | 'normal' | 'medium' | 'bold'
        backgroundColor?: string
    }
}

type CleanedMediaQueryType = {
    mediaQuery?: {
        s1440?: ExtandUITypes
        s1280?: ExtandUITypes
        s1080?: ExtandUITypes
        s768?: ExtandUITypes
        s600?: ExtandUITypes
        s428?: ExtandUITypes
    }
}

export type TabType = ExtandUITypes & CleanedHoverType & CleanedMediaQueryType & TabTypoType

//
//
export const TabTypoTheme = (props: TabTypoType) => {
    const TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: 300 },
        normal: { fontWeight: 400 },
        medium: { fontWeight: 500 },
        bold: { fontWeight: 700 },
    } as const

    return {
        fontSize: props.txtSize ? `${props.txtSize / 16}rem` : '0.875rem',
        color: props.txtColor ?? '#4788f4',
        fontWeight: TYPOGRAPH_WEIGHT[props.txtWeight ?? 'normal'].fontWeight,
        textAlign: props.txtAlign,
    }
}

//
//
export const TAB_EXTRACT_PROPS = (props: TabType & { [key: string]: any }) => {
    const aligns = {
        direction: props?.direction ?? 'horizontal',
        align: props?.align ?? 'center',
        crossAlign: props.crossAlign ?? 'center',
    }

    //
    const layoutSize = LayoutSizeTheme(props)
    const layer = LayerTheme(props)
    const flex = FlexTheme({ ...props, ...aligns })
    const padding = PaddingTheme(props)
    const margin = MarginTheme(props)
    const border = BorderTheme(props)
    const tabTypo = TabTypoTheme(props)

    const mediaQuery = MediaQuery(props)
    const active = ActiveTheme({ ...props, active: { ...props.active, opacity: 0.5 } })
    const hover = HoverTheme(props)

    const styleProps: any = {}
    const otherProps: any = {}

    Object.keys(props).forEach((key) => {
        if ([...stylePropKeys, 'txtSize', 'txtColor', 'txtAlign', 'txtWeight'].includes(key))
            styleProps[key] = props[key]
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
            ...(mediaQuery as any),
            ...(!props.button_disabled && (active as any)),
            ...(!props.button_disabled && (hover as any)),
            ...tabTypo,
            position: 'relative',
            whiteSpace: 'nowrap',
            userSelect: 'none',
            transition: '0.3s ease-in-out',
        } as Interpolation<Theme>,
        otherProps,
    }
}
