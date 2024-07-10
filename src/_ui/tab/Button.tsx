/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, forwardRef, ForwardedRef, useState, useEffect } from 'react'
import { FlexTypes } from '../flex/_theme/type'
import { Themes } from '../flex/_theme'
import { colors } from '@/libs/themes'

interface Props
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
        Omit<
            FlexTypes,
            | 'backgroundColor'
            | 'onClick'
            | 'transitionTime'
            | 'direction'
            | 'flexReverse'
            | 'reserse'
            | 'align'
            | 'crossAlign'
            | 'cursor'
            | 'touchOpacity'
            | 'transitionTime'
            | 'scroll'
        > {
    as?: 's' | 'm' | 'l'
    txtSize?: number
    txtColor?: string
    buttonColor?: string
}

export const Button = forwardRef<HTMLButtonElement, Props>((props: Props, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        as = 'l',
        txtSize,
        txtColor,
        buttonColor,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        flex,
        alignContent,
        alignSelf,
        wrap,
        basis,
        grow,
        shrink,
        gap,
        crossGap,
        order,
        padding,
        margin,
        background,
        backgroundRepeat,
        backgroundSize,
        backgroundPosition,
        backgroundClip,
        backgroundImageUrl,
        border,
        borderRadius,
        shadow,
        zIndex,
        opacity,
        ...rest
    } = props

    const [os, setOs] = useState<'window' | 'mac'>('window')

    useEffect(() => {
        if (/Macintosh|iPhone|iPad|iPod|Android/.test(navigator.userAgent)) setOs('mac')
        else if (/Windows/.test(navigator.userAgent)) setOs('window')
        else setOs('window')
    }, [os])

    const TAB_SIZE = {
        s: {
            minHeight: 'auto',
            padding: '11px 16px',
            fontSize: `${12 / 16}rem`,
            borderRadius: 12,
        },
        m: {
            minHeight: 'auto',
            padding: '13px 18px',
            fontSize: `${14 / 16}rem`,
            borderRadius: 14,
        },
        l: {
            minHeight: 56,
            padding: '15px 20px',
            fontSize: `${15 / 16}rem`,
            borderRadius: 18,
        },
    }

    const { Size, Flex, Padding, Margin, Theme, Order } = Themes({ props, direction: 'horizontal' })

    return (
        <button
            className="button"
            ref={ref}
            type={props.type ?? 'button'}
            css={{
                ...Size,
                ...Flex,
                ...Padding,
                ...Margin,
                ...Theme,
                ...Order,
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center',
                padding: props.padding ? props.padding : TAB_SIZE[as].padding,
                minHeight: props?.minHeight ? props?.minHeight : TAB_SIZE[as].minHeight,
                backgroundColor: buttonColor ?? colors.keyColor,
                color: txtColor ?? '#FFF',
                fontSize: txtSize ? txtSize : TAB_SIZE[as].fontSize,
                borderRadius: borderRadius ? borderRadius : TAB_SIZE[as].borderRadius,
                cursor: 'pointer',
                userSelect: 'none',
                transition: '0.2s ease-in-out',
                whiteSpace: 'nowrap',

                '&:disabled': { backgroundColor: '#ccc', color: '#fff', transform: 'scale(1)' },
                '&:hover': { filter: 'saturate(90%)', boxShadow: 'none' },
                '&:active': { transform: 'scale(0.98)', opacity: 0.75, boxShadow: 'none' },
            }}
            {...rest}
        >
            {props.children}
        </button>
    )
})
