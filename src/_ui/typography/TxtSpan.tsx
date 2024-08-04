/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { Themes } from '../_theme'
import { UITypes } from '../_theme/_UIKit'

interface Props
    extends HTMLAttributes<HTMLElement>,
        Pick<UITypes, 'padding'>,
        Pick<UITypes, 'margin'>,
        Pick<UITypes, 'cursor'> {
    children: ReactNode
    ellipsis?: { ellipsis?: boolean; line?: number; width?: number }
    size?: number
    color?: string
    lineHeight?: number
    txtAlign?: 'start' | 'end' | 'center'
    weight?: 'lighter' | 'normal' | 'medium' | 'bold'
    underline?: boolean
    transitionTime?: number
}

export function TxtSpan(props: Props) {
    const [os, setOs] = useState<'window' | 'mobile'>('window')

    useEffect(() => {
        if (/Macintosh|iPhone|iPad|iPod|Android/.test(navigator.userAgent)) setOs('mobile')
        else if (/Windows/.test(navigator.userAgent)) setOs('window')
        else setOs('window')
    }, [os])

    const {
        color = '#888',
        size = 13,
        weight,
        cursor,
        underline,
        lineHeight,
        txtAlign = 'start',
        padding = { all: 0 },
        margin = { all: 0 },
        transitionTime,
        ...rest
    } = props

    const TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: os === 'window' ? '300' : '400' },
        normal: { fontWeight: 400 },
        medium: { fontWeight: os === 'window' ? '500' : '600' },
        bold: { fontWeight: os === 'window' ? '600' : '700' },
    } as const

    const { Margin, Padding, Order } = Themes({ props })

    return (
        <span
            className="txtSpan"
            css={{
                fontWeight: TYPOGRAPH_WEIGHT[weight ?? 'normal'].fontWeight,
                fontSize: size ? `${size / 16}rem` : '0.813rem',
                whiteSpace: 'nowrap',
                color,
                lineHeight,
                textAlign: txtAlign ?? 'start',
                textDecoration: underline && 'underline',
                ...(Padding as any),
                ...(Margin as any),
                ...(Order as any),
            }}
            {...rest}
        >
            {props.children}
        </span>
    )
}
