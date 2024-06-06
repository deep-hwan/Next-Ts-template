/** @jsxImportSource @emotion/react */
import React, { ReactNode, ButtonHTMLAttributes, forwardRef, ForwardedRef, useState, useEffect } from 'react'
import { colors } from '../../libs/themes/colors'
import { ViewportTypes } from '../_themes/viewport'
import { BorderTheme, BorderType } from '../_themes/border'
import { SpaceTheme, SpaceType } from '../_themes/space'
import { FlexTheme, FlexType } from '../_themes/flex'
import { ShadowTheme, ShadowType } from '../_themes/boxShadow'

interface Props
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
        ViewportTypes,
        Omit<FlexType, 'flex' | 'direction' | 'wrap'>,
        SpaceType,
        ShadowType,
        BorderType {
    children: ReactNode
    as?: 's' | 'm' | 'l'
    variant?: 'fill' | 'stroke'
    txtSize?: number
    txtColor?: string
    buttonColor?: string
    borderRadius?: number | string
}

export const Button = forwardRef<HTMLButtonElement, Props>((props: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        gap,
        crossGap,
        padding,
        margin,
        variant = 'fill',
        as = 'l',
        txtSize,
        txtColor,
        buttonColor,
        border,
        borderRadius,
        shadow,
        ...rest
    } = props

    const [os, setOs] = useState<'window' | 'mac'>('window')

    useEffect(() => {
        if (/Macintosh|iPhone|iPad|iPod/.test(navigator.userAgent)) setOs('mac')
        else if (/Windows|Android/.test(navigator.userAgent)) setOs('window')
        else setOs('window')
    }, [os])

    const TYPE_VARIANTS = {
        fill: {
            backgroundColor: buttonColor ?? colors.keyColor,
            color: txtColor ?? '#fff',
            border: '',
        },
        stroke: {
            backgroundColor: 'transparent',
            color: colors.keyColor,
            border: BorderTheme({ border: { solid: 1, position: 'all', color: colors.keyColor } }),
        },
    }

    const TAB_SIZE = {
        s: {
            minHeight: 'auto',
            padding: '10px 12px',
            fontSize: os === 'window' ? `${12 / 16}rem` : `${13 / 16}rem`,
            borderRadius: 12,
        },
        m: {
            minHeight: 'auto',
            padding: '12px 14px',
            fontSize: os === 'window' ? `${14 / 16}rem` : `${15 / 16}rem`,
            borderRadius: 14,
        },
        l: {
            minHeight: 56,
            padding: '14px 16px',
            fontSize: os === 'window' ? `${15 / 16}rem` : `1rem`,
            borderRadius: 18,
        },
    }

    const viewT = { width, height, minWidth, maxWidth, minHeight, maxHeight }
    const FlexT = FlexTheme({
        direction: 'horizontal',
        align: 'center',
        crossAlign: 'center',
        gap,
        crossGap,
    })
    const borderT = border ? BorderTheme({ border }) : (TYPE_VARIANTS[variant].border as any)
    const paddingT = padding ? SpaceTheme({ padding }) : { padding: TAB_SIZE[as].padding }
    const marginT = SpaceTheme({ margin })
    const shadowT = ShadowTheme({ shadow })

    return (
        <button
            ref={ref}
            type={props.type ?? 'button'}
            css={{
                ...FlexT,
                ...marginT,
                ...paddingT,
                ...viewT,
                ...shadowT,
                ...borderT,
                minHeight: minHeight ? minHeight : TAB_SIZE[as].minHeight,
                backgroundColor: buttonColor ?? TYPE_VARIANTS[variant].backgroundColor,
                color: txtColor ?? TYPE_VARIANTS[variant].color,
                fontSize: txtSize ? txtSize : TAB_SIZE[as].fontSize,
                borderRadius: borderRadius ? borderRadius : TAB_SIZE[as].borderRadius,
                cursor: 'pointer',
                userSelect: 'none',
                transition: '0.2s ease-in-out',
                whiteSpace: 'nowrap',

                '&:disabled': { backgroundColor: '#ccc', color: '#fff', transform: 'scale(1)' },
                '&:hover': { filter: 'saturate(90%)', boxShadow: 'none' },
                '&:active': { transform: 'scale(0.95)', boxShadow: 'none' },
            }}
            {...rest}
        >
            {props.children}
        </button>
    )
})
