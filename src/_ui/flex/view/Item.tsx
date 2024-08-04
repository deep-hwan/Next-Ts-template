/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, forwardRef, useEffect, useState } from 'react'
import { UI_EXTRACT_PROPS, UITypes } from '../../_theme/_UIKit'

interface Props extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'>, UITypes {
    txtSize?: number
    txtColor?: string
    lineHeight?: number
    txtAlign?: 'start' | 'end' | 'center'
    txtWeight?: 'lighter' | 'normal' | 'medium' | 'bold'
    whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line'
    underline?: boolean
    ellipsis?: { ellipsis?: boolean; line?: number; width?: number }
}

const Item = forwardRef(
    (
        {
            txtWeight,
            txtSize = 15,
            txtColor,
            txtAlign,
            whiteSpace,
            lineHeight,
            underline,
            ellipsis = { ellipsis: false },
            ...restProps
        }: Props,
        ref: ForwardedRef<HTMLLIElement>,
    ) => {
        const { styleProps: themes, otherProps } = UI_EXTRACT_PROPS({
            ...restProps,
            direction: restProps.direction ?? 'vertical',
        })

        const [os, setOs] = useState<'desktop' | 'mobile'>('desktop')

        useEffect(() => {
            if (/Macintosh|iPhone|iPad|iPod|Android/.test(navigator.userAgent)) setOs('mobile')
            else if (/desktops/.test(navigator.userAgent)) setOs('desktop')
            else setOs('desktop')
        }, [os])

        const TYPOGRAPH_WEIGHT = {
            lighter: { fontWeight: os === 'desktop' ? '300' : '400' },
            normal: { fontWeight: 400 },
            medium: { fontWeight: os === 'desktop' ? '500' : '600' },
            bold: { fontWeight: os === 'desktop' ? '600' : '700' },
        } as const

        const ellipsisT = {
            maxWidth: ellipsis.width ?? 'auto',
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: ellipsis.line,
        } as any

        return (
            <li
                className="item"
                ref={ref}
                css={{
                    ...themes,
                    position: 'relative',
                    fontWeight: TYPOGRAPH_WEIGHT[txtWeight ?? 'normal'].fontWeight,
                    fontSize: txtSize && `${txtSize / 16}rem`,
                    whiteSpace: ellipsis.ellipsis ? 'normal' : whiteSpace,
                    color: txtColor ?? '#444',
                    lineHeight: lineHeight,
                    textAlign: txtAlign ?? 'start',
                    textDecoration: underline && 'underline',

                    ...(!ellipsis.ellipsis && (themes.Padding as any)),
                    ...(!ellipsis.ellipsis && (themes.Margin as any)),
                    ...(ellipsis.ellipsis && ellipsisT),
                }}
                {...otherProps}
            >
                {otherProps.children}
            </li>
        )
    },
)

export { Item }
