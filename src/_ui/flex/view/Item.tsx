/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, forwardRef, useEffect, useState } from 'react'
import { Themes } from '../_theme'
import { FlexTypes } from '../_theme/type'

interface Props extends Omit<HTMLAttributes<HTMLLIElement>, 'onClick'>, FlexTypes {
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
            width = 'auto',
            minWidth,
            maxWidth,
            height,
            minHeight,
            maxHeight,
            flex,
            flexReverse,
            align,
            crossAlign,
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
            backgroundColor,
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
            transitionTime,
            cursor,
            opacity,
            touchOpacity,
            txtWeight,
            txtSize = 15,
            txtColor,
            txtAlign,
            whiteSpace,
            lineHeight,
            underline,
            ellipsis = { ellipsis: false },
            scroll,
            ...props
        }: Props,
        ref: ForwardedRef<HTMLLIElement>,
    ) => {
        const themes_props = {
            width,
            minWidth,
            maxWidth,
            height,
            minHeight,
            maxHeight,
            flex,
            flexReverse,
            align,
            crossAlign,
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
            backgroundColor,
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
            transitionTime,
            cursor,
            opacity,
            touchOpacity,
            scroll,
        }

        const themes = Themes({ props: themes_props })

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
            bold: { fontWeight: os === 'window' ? '600' : '700' },
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
                {...props}
            >
                {props.children}
            </li>
        )
    },
)

export { Item }
