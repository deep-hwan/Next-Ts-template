/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react'
import { Interpolation, Theme } from '@emotion/react'
import { MarginTheme, PaddingTheme, SpaceType } from './space'

//
type ExtandTypoType = {
    size?: number
    lineHeight?: number
    color?: string
    txtAlign?: 'start' | 'end' | 'center'
    weight?: 'lighter' | 'normal' | 'medium' | 'bold'
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line'
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit'
    ellipsis?: { ellipsis?: boolean; line?: number; width?: number }
    underline?: boolean
    transitionTime?: number
    zIndex?: number
    opacity?: number
    cursor?: 'default' | 'grab' | 'pointer' | 'zoom'
    userSelect?: 'none' | 'auto' | 'text' | 'contain' | 'all'
    onClick?: any
} & SpaceType

type MQType = {
    mediaQuery?: {
        s1440?: ExtandTypoType & EffectType
        s1280?: ExtandTypoType & EffectType
        s1080?: ExtandTypoType & EffectType
        s768?: ExtandTypoType & EffectType
        s600?: ExtandTypoType & EffectType
        s428?: ExtandTypoType & EffectType
    }
}

type EffectType = {
    active?: ExtandTypoType
    hover?: ExtandTypoType
}

//
export type TypographyType = ExtandTypoType & EffectType & MQType

//
export const Typography_Theme = (props: TypographyType & { [key: string]: any }) => {
    const [os, setOs] = useState<'window' | 'mobile'>('window')

    useEffect(() => {
        if (/Macintosh|iPhone|iPad|iPod|Android/.test(navigator.userAgent)) setOs('mobile')
        else if (/Windows/.test(navigator.userAgent)) setOs('window')
        else setOs('window')
    }, [os])

    const TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: os === 'window' ? '300' : '400' },
        normal: { fontWeight: 400 },
        medium: { fontWeight: os === 'window' ? '500' : '600' },
        bold: { fontWeight: os === 'window' ? '600' : '600' },
    } as const

    const styleProps: any = {}
    const otherProps: any = {}

    Object.keys(props).forEach((key) => {
        if (stylePropKeys.includes(key)) styleProps[key] = props[key]
        else otherProps[key] = props[key]
    })

    const typo_props = (props: TypographyType) => {
        return {
            fontWeight: TYPOGRAPH_WEIGHT[props.weight ?? 'normal'].fontWeight,
            fontSize: props.size,
            whiteSpace: props.whiteSpace,
            color: props.color,
            lineHeight: props.lineHeight,
            textAlign: props.txtAlign,
            textDecoration: props.underline && 'underline',
            textTransform: props.textTransform,
            zIndex: props?.zIndex,
            transition: props?.transitionTime && `${props?.transitionTime}s ease-in-out`,
            cursor: props?.onClick ? 'pointer' : props?.cursor,
            userSelect: props?.onClick ? 'none' : props.userSelect,
            opacity: props.opacity,
            maxWidth: props?.ellipsis?.width,
            display: '-webkit-box',
            overflow: props.ellipsis?.ellipsis && 'hidden',
            textOverflow: props.ellipsis?.ellipsis && 'ellipsis',
            WebkitBoxOrient: props.ellipsis?.ellipsis && 'vertical',
            WebkitLineClamp: props?.ellipsis?.line,
        } as Interpolation<Theme>
    }

    const screenSize = [1440, 1280, 1080, 768, 600, 428]
    const MQ = screenSize.map((bp) => `@media (max-width: ${bp}px)`)

    return {
        styleProps: {
            ...(typo_props(props) as any),
            ...(PaddingTheme(props) as any),
            ...(MarginTheme(props) as any),
            '&:hover': {
                ...(!!props.hover && (typo_props(props.hover) as any)),
                ...(PaddingTheme(props.hover as any) as any),
                ...(MarginTheme(props.hover as any) as any),
            },
            '&:active': {
                ...(!!props.active && (typo_props(props.active) as any)),
                ...(PaddingTheme(props.active as any) as any),
                ...(MarginTheme(props.active as any) as any),
            },
            ...(props.mediaQuery?.s1440 && {
                [MQ[0]]: {
                    ...(typo_props(props.mediaQuery.s1440) as any),
                    ...(PaddingTheme(props.mediaQuery.s1440) as any),
                    ...(MarginTheme(props.mediaQuery.s1440) as any),
                },
            }),
            ...(props.mediaQuery?.s1280 && {
                [MQ[1]]: {
                    ...(typo_props(props.mediaQuery.s1280) as any),
                    ...(PaddingTheme(props.mediaQuery.s1280) as any),
                    ...(MarginTheme(props.mediaQuery.s1280) as any),
                },
            }),
            ...(props.mediaQuery?.s1080 && {
                [MQ[2]]: {
                    ...(typo_props(props.mediaQuery.s1080) as any),
                    ...(PaddingTheme(props.mediaQuery.s1080) as any),
                    ...(MarginTheme(props.mediaQuery.s1080) as any),
                },
            }),
            ...(props.mediaQuery?.s768 && {
                [MQ[3]]: {
                    ...(typo_props(props.mediaQuery.s768) as any),
                    ...(PaddingTheme(props.mediaQuery.s768) as any),
                    ...(MarginTheme(props.mediaQuery.s768) as any),
                },
            }),
            ...(props.mediaQuery?.s600 && {
                [MQ[4]]: {
                    ...(typo_props(props.mediaQuery.s600) as any),
                    ...(PaddingTheme(props.mediaQuery.s600) as any),
                    ...(MarginTheme(props.mediaQuery.s600) as any),
                },
            }),
            ...(props.mediaQuery?.s428 && {
                [MQ[5]]: {
                    ...(typo_props(props.mediaQuery.s428) as any),
                    ...(PaddingTheme(props.mediaQuery.s428) as any),
                    ...(MarginTheme(props.mediaQuery.s428) as any),
                },
            }),
        } as Interpolation<Theme>,
        otherProps,
    }
}

export const stylePropKeys = [
    'as',
    'size',
    'lineHeight',
    'txtAlign',
    'weight',
    'whiteSpace',
    'textTransform',
    'underline',
    'textTransform',
    'transition',
    'ellipsis',
    'transitionTime',
    'padding',
    'margin',
    'color',
    'zIndex',
    'opacity',
    'cursor',
    'userSelect',
    'mediaQuery',
    'active',
    'hover',
]
