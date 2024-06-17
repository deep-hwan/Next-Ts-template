/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { SpaceTheme, SpaceType } from '../_themes/space'
import { CursorTheme, CursorType } from '../_themes/cursor'

interface Props extends HTMLAttributes<HTMLElement>, SpaceType, CursorType {
    children: ReactNode
    ellipsis?: { ellipsis?: boolean; line?: number; width?: number }
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'b' | 'p'
    size?: number
    color?: string
    lineHeight?: number
    txtAlign?: 'start' | 'end' | 'center'
    weight?: 'lighter' | 'normal' | 'medium' | 'bold'
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line'
    underline?: boolean
    transitionTime?: number
}

export function Txt(props: Props) {
    const [os, setOs] = useState<'window' | 'mobile'>('window')

    useEffect(() => {
        if (/Macintosh|iPhone|iPad|iPod|Android/.test(navigator.userAgent)) setOs('mobile')
        else if (/Windows/.test(navigator.userAgent)) setOs('window')
        else setOs('window')
    }, [os])

    const {
        as = 'p',
        color = '#4e4e51',
        size,
        weight,
        whiteSpace = 'pre-line',
        cursor,
        underline,
        ellipsis = { ellipsis: false },
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
        bold: { fontWeight: os === 'window' ? '700' : '700' },
    } as const

    const spaceT = SpaceTheme({ padding, margin })
    const cursorT = CursorTheme({ cursor, onClick: props.onClick })

    const ellipsisT = {
        maxWidth: ellipsis.width ?? 'auto',
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: ellipsis.line,
    } as any

    const asTypeTheme = ({ s, w }: { s: number; w: 'lighter' | 'normal' | 'medium' | 'bold' }) => {
        return {
            fontWeight: TYPOGRAPH_WEIGHT[w].fontWeight,
            fontSize: s ? `${s / 16}rem` : '0.938rem',
            whiteSpace: ellipsis.ellipsis ? 'normal' : whiteSpace,
            color,
            lineHeight,
            textAlign: txtAlign ?? 'start',
            textDecoration: underline && 'underline',
            transition: `${transitionTime ?? 0}s ease-in-out`,
            ...cursorT,
            ...(!ellipsis.ellipsis && spaceT),
            ...(ellipsis.ellipsis && ellipsisT),
        }
    }

    return (
        <>
            {as === 'h1' && (
                <h1 css={asTypeTheme({ s: size ?? 52, w: weight ?? 'bold' })} {...rest}>
                    {props.children}
                </h1>
            )}

            {as === 'h2' && (
                <h2 css={asTypeTheme({ s: size ?? 44, w: weight ?? 'bold' })} {...rest}>
                    {props.children}
                </h2>
            )}

            {as === 'h3' && (
                <h3 css={asTypeTheme({ s: size ?? 36, w: weight ?? 'bold' })} {...rest}>
                    {props.children}
                </h3>
            )}

            {as === 'h4' && (
                <h4 css={asTypeTheme({ s: size ?? 32, w: weight ?? 'bold' })} {...rest}>
                    {props.children}
                </h4>
            )}

            {as === 'h5' && (
                <h5 css={asTypeTheme({ s: size ?? 28, w: weight ?? 'bold' })} {...rest}>
                    {props.children}
                </h5>
            )}

            {as === 'h6' && (
                <h6 css={asTypeTheme({ s: size ?? 26, w: weight ?? 'bold' })} {...rest}>
                    {props.children}
                </h6>
            )}

            {as === 'b' && (
                <b css={asTypeTheme({ s: size ?? 20, w: weight ?? 'bold' })} {...rest}>
                    {props.children}
                </b>
            )}

            {as === 'strong' && (
                <strong css={asTypeTheme({ s: size ?? 18, w: weight ?? 'medium' })} {...rest}>
                    {props.children}
                </strong>
            )}

            {as === 'p' && (
                <p css={asTypeTheme({ s: size ?? 15, w: weight ?? 'normal' })} {...rest}>
                    {props.children}
                </p>
            )}
        </>
    )
}
