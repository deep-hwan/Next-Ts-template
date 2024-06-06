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
        '&:active': { opacity: (!!props.onClick && touchOpacity) ?? 0.7 },
    }

    const [os, setOs] = useState<'window' | 'mac'>('window')

    useEffect(() => {
        if (/Macintosh|iPhone|iPad|iPod/.test(navigator.userAgent)) setOs('mac')
        else if (/Windows|Android/.test(navigator.userAgent)) setOs('window')
        else setOs('window')
    }, [os])

    return (
        <>
            {as === 'div' && (
                <div
                    css={{
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        fontSize:
                            os === 'window'
                                ? txtSize
                                    ? `${txtSize / 16}rem`
                                    : '0.938rem'
                                : txtSize
                                  ? `${(txtSize + 1) / 16}rem`
                                  : '1rem',
                        color: txtColor,
                        transition: '0.1s ease-in-out',
                        backgroundColor,
                        borderRadius: borderRadius,
                        userSelect: 'none',
                        opacity,
                        ...viewT,
                        ...FlexT,
                        ...spaceT,
                        ...borderT,
                        ...cursorT,

                        ...active,
                    }}
                    {...rest}
                >
                    {props.children}
                </div>
            )}

            {as === 'li' && (
                <li
                    css={{
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        fontSize: txtSize ? `${txtSize / 16}rem` : '0.938rem',
                        color: txtColor,
                        transition: '0.1s ease-in-out',
                        backgroundColor,
                        borderRadius: borderRadius,
                        userSelect: 'none',
                        opacity,
                        ...viewT,
                        ...FlexT,
                        ...spaceT,
                        ...borderT,
                        ...cursorT,

                        ...active,
                    }}
                    {...rest}
                >
                    {props.children}
                </li>
            )}

            {as === 'span' && (
                <span
                    css={{
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        fontSize: txtSize ? `${txtSize / 16}rem` : '0.938rem',
                        color: txtColor,
                        transition: '0.1s ease-in-out',
                        backgroundColor,
                        borderRadius: borderRadius,
                        userSelect: 'none',
                        opacity,
                        ...viewT,
                        ...FlexT,
                        ...spaceT,
                        ...borderT,
                        ...cursorT,

                        ...active,
                    }}
                    {...rest}
                >
                    {props.children}
                </span>
            )}

            {as === 'button' && (
                <button
                    disabled={disabled}
                    css={{
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        fontSize: txtSize ? `${txtSize / 16}rem` : '0.938rem',
                        color: txtColor,
                        transition: '0.1s ease-in-out',
                        backgroundColor,
                        borderRadius: borderRadius,
                        userSelect: 'none',
                        opacity,
                        ...viewT,
                        ...FlexT,
                        ...spaceT,
                        ...borderT,
                        ...cursorT,

                        ...active,
                    }}
                    {...rest}
                >
                    {props.children}
                </button>
            )}

            {as === 'a' && (
                <Link
                    href={props.href}
                    css={{
                        position: 'relative',
                        whiteSpace: 'nowrap',
                        fontSize: txtSize ? `${txtSize / 16}rem` : '0.938rem',
                        color: txtColor,
                        transition: '0.1s ease-in-out',
                        backgroundColor,
                        borderRadius: borderRadius,
                        userSelect: 'none',
                        opacity,
                        ...viewT,
                        ...FlexT,
                        ...spaceT,
                        ...borderT,
                        ...cursorT,

                        ...active,
                    }}
                    {...rest}
                >
                    {props.children}
                </Link>
            )}
        </>
    )
}
