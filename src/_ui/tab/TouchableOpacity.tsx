/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes, useEffect, useState } from 'react'
import Link from 'next/link'
import { FlexTypes } from '../flex/_theme/type'
import { Interpolation, Theme } from '@emotion/react'
import { Themes } from '../flex/_theme'

interface Props
    extends Omit<
            HTMLAttributes<HTMLDivElement | HTMLLIElement | HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement>,
            'color' | 'disabled'
        >,
        Omit<FlexTypes, 'onClick' | 'flexReverse' | 'scroll'> {
    as?: 'div' | 'li' | 'span' | 'button' | 'a'
    direction?: 'horizontal' | 'vertical'
    txtSize?: number
    txtColor?: string
    txtAlign?: 'start' | 'end' | 'center'
    txtWeight?: 'lighter' | 'normal' | 'medium' | 'bold'
    disabledColor?: string
    href?: any
    disabled?: boolean
}

export function TouchableOpacity(props: Props) {
    const {
        as = 'div',
        direction = 'horizontal',
        txtColor = '#4788f4',
        width,
        txtSize = 14,
        disabledColor,
        touchOpacity,
        borderRadius,
        disabled,
        txtAlign,
        txtWeight,
        transitionTime = 0.3,
        ...rest
    } = props

    const { Size, Flex, Padding, Margin, Theme, Order } = Themes({
        props,
        direction: direction ?? 'horizontal',
    })

    const active = {
        '&:disabled': { color: disabledColor ?? '#ccc', cursor: 'default' },
        '&:active': { opacity: (!!props.onClick && touchOpacity) ?? 0.75 },
    }

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
        bold: { fontWeight: os === 'window' ? '700' : '700' },
    } as const

    const styleSheets = {
        ...Size,
        ...Flex,
        ...Padding,
        ...Margin,
        ...Theme,
        ...Order,
        ...active,
        width: width ?? 'auto',
        position: 'relative',
        alignItems: rest.align ?? 'center',
        justifyContent: rest.crossAlign ?? 'center',
        whiteSpace: 'nowrap',
        fontSize: txtSize ? `${txtSize / 16}rem` : '0.875rem',
        color: txtColor,
        fontWeight: TYPOGRAPH_WEIGHT[txtWeight ?? 'normal'].fontWeight,
        textAlign: txtAlign,
        transition: `${transitionTime ?? 0}s ease-in-out`,
        userSelect: 'none',
    } as Interpolation<Theme>

    return (
        <>
            {as === 'div' && (
                <div className="TouchableOpacity" css={styleSheets} {...rest}>
                    {props.children}
                </div>
            )}

            {as === 'li' && (
                <li className="TouchableOpacity" css={styleSheets} {...rest}>
                    {props.children}
                </li>
            )}

            {as === 'span' && (
                <span className="TouchableOpacity" css={styleSheets} {...rest}>
                    {props.children}
                </span>
            )}

            {as === 'button' && (
                <button className="TouchableOpacity" disabled={disabled} css={styleSheets} {...rest}>
                    {props.children}
                </button>
            )}

            {as === 'a' && (
                <Link className="TouchableOpacity" href={props.href} css={styleSheets} {...rest}>
                    {props.children}
                </Link>
            )}
        </>
    )
}
