/** @jsxImportSource @emotion/react */

import React, { ButtonHTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { CursorTheme, CursorType } from '../_themes/cursor'
import { SpaceTheme, SpaceType } from '../_themes/space'

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>, SpaceType, CursorType {
    children: ReactNode
    size?: number
    color?: string
    disabledColor?: string
    lineHeight?: number
    txtAlign?: 'start' | 'end' | 'center'
    weight?: 'lighter' | 'normal' | 'medium' | 'bold'
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line'
    underline?: boolean
}

export function TxtTab(props: Props) {
    const [os, setOs] = useState<'window' | 'mac'>('window')

    useEffect(() => {
        if (/Macintosh|iPhone|iPad|iPod|Android/.test(navigator.userAgent)) setOs('mac')
        else if (/Windows/.test(navigator.userAgent)) setOs('window')
        else setOs('window')
    }, [os])

    const {
        cursor,
        color = '#4788f4',
        size = 14,
        padding,
        margin,
        weight = 'normal',
        disabledColor,
        underline,
        ...rest
    } = props

    const TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: os === 'window' ? '300' : '400' },
        normal: { fontWeight: 400 },
        medium: { fontWeight: os === 'window' ? '500' : '600' },
        bold: { fontWeight: os === 'window' ? '600' : '700' },
    } as const

    const spaceT = SpaceTheme({ padding, margin }) as any
    const cursorT = CursorTheme({ cursor, onClick: props.onClick }) as any

    return (
        <button
            type="button"
            css={{
                whiteSpace: 'nowrap',
                fontWeight: TYPOGRAPH_WEIGHT[weight].fontWeight,
                fontSize: size ? `${size / 16}rem` : '0.938rem',
                color,
                textDecoration: underline && 'underline',
                transition: '0.1s ease-in-out',
                ...spaceT,
                ...cursorT,

                '&:disabled': { color: disabledColor ?? '#ccc', cursor: 'default' },

                '&:active': { opacity: 0.7 },
            }}
            {...rest}
        >
            {props.children}
        </button>
    )
}
