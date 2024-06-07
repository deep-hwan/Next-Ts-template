/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { SpaceTheme, SpaceType } from '../_themes/space'
import { CursorTheme, CursorType } from '../_themes/cursor'

interface Props extends HTMLAttributes<HTMLElement>, SpaceType, CursorType {
    children: ReactNode
    ellipsis?: { ellipsis?: boolean; line?: number; width?: number }
    size?: number
    color?: string
    lineHeight?: number
    txtAlign?: 'start' | 'end' | 'center'
    weight?: 'lighter' | 'normal' | 'medium' | 'bold'
    underline?: boolean
}

export function TxtSpan(props: Props) {
    const [os, setOs] = useState<'window' | 'mac'>('window')

    useEffect(() => {
        if (/Macintosh|iPhone|iPad|iPod|Android/.test(navigator.userAgent)) setOs('mac')
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
        ...rest
    } = props

    const TYPOGRAPH_WEIGHT = {
        lighter: { fontWeight: os === 'window' ? '300' : '400' },
        normal: { fontWeight: 400 },
        medium: { fontWeight: os === 'window' ? '500' : '600' },
        bold: { fontWeight: os === 'window' ? '600' : '700' },
    } as const

    const spaceT = SpaceTheme({ padding, margin }) as any
    const cursorT = CursorTheme({ cursor, onClick: props.onClick })

    return (
        <span
            css={{
                fontWeight: TYPOGRAPH_WEIGHT[weight ?? 'normal'].fontWeight,
                fontSize:
                    os === 'window' ? (size ? `${size / 16}rem` : '0.938rem') : size ? `${(size + 1) / 16}rem` : '1rem',
                whiteSpace: 'nowrap',
                color,
                lineHeight,
                textAlign: txtAlign ?? 'start',
                transition: '0.3s ease-in-out',
                textDecoration: underline && 'underline',
                ...spaceT,
                ...cursorT,
            }}
            {...rest}
        >
            {props.children}
        </span>
    )
}
