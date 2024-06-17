/** @jsxImportSource @emotion/react */

import React, { HTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { CursorTheme, CursorType } from '../_themes/cursor'
import { SpaceTheme, SpaceType } from '../_themes/space'
import { ViewportTypes } from '../_themes/viewport'
import { FlexTheme, FlexType } from '../_themes/flex'
import Link from 'next/link'
import { BorderTheme, BorderType } from '../_themes/border'

interface Props
    extends Omit<
            HTMLAttributes<HTMLDivElement | HTMLLIElement | HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement>,
            'color' | 'disabled'
        >,
        ViewportTypes,
        FlexType,
        BorderType,
        SpaceType,
        CursorType {
    as?: 'div' | 'li' | 'span' | 'button' | 'a'
    children: ReactNode
    txtSize?: number
    txtColor?: string
    disabledColor?: string
    touchOpacity?: number
    backgroundColor?: string
    borderRadius?: number
    href?: any
    opacity?: number
    disabled?: boolean
    transitionTime?: number
}

export function TouchableOpacity(props: Props) {
    const {
        as = 'div',
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        flex,
        direction = 'horizontal',
        align = 'center',
        crossAlign,
        wrap,
        gap,
        crossGap,
        border,
        opacity,
        cursor,
        txtColor = '#4788f4',
        txtSize = 14,
        disabledColor,
        touchOpacity,
        backgroundColor,
        borderRadius,
        padding,
        margin,
        disabled,
        transitionTime,
        ...rest
    } = props

    const spaceT = SpaceTheme({ padding, margin }) as any
    const borderT = BorderTheme({ border })
    const cursorT = CursorTheme({ cursor, onClick: props.onClick }) as any
    const viewT = { width, height, minWidth, maxWidth, minHeight, maxHeight }
    const FlexT = FlexTheme({
        flex,
        direction,
        align: align ?? 'center',
        crossAlign: crossAlign ?? 'center',
        wrap,
        gap,
        crossGap,
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

    const styleSheets = {
        ...viewT,
        ...FlexT,
        ...spaceT,
        ...borderT,
        ...cursorT,
        ...active,
        position: 'relative',
        whiteSpace: 'nowrap',
        fontSize: txtSize ? `${txtSize / 16}rem` : '0.875rem',
        color: txtColor,
        transition: `${transitionTime ?? 0}s ease-in-out`,
        backgroundColor,
        borderRadius: borderRadius,
        userSelect: 'none',
        opacity,
    }

    return (
        <>
            {as === 'div' && (
                <div css={styleSheets} {...rest}>
                    {props.children}
                </div>
            )}

            {as === 'li' && (
                <li css={styleSheets} {...rest}>
                    {props.children}
                </li>
            )}

            {as === 'span' && (
                <span css={styleSheets} {...rest}>
                    {props.children}
                </span>
            )}

            {as === 'button' && (
                <button disabled={disabled} css={styleSheets} {...rest}>
                    {props.children}
                </button>
            )}

            {as === 'a' && (
                <Link href={props.href} css={styleSheets} {...rest}>
                    {props.children}
                </Link>
            )}
        </>
    )
}
