/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, forwardRef } from 'react'
import { Themes } from '../_theme'
import { FlexTypes } from '../_theme/type'

interface Props extends HTMLAttributes<HTMLUListElement | HTMLOListElement>, Omit<FlexTypes, 'onClick'> {
    as?: 'ul' | 'ol'
}

const Items = forwardRef(
    (
        {
            as = 'ul',
            direction = 'vertical',
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
            ...props
        }: Props,
        ref: ForwardedRef<HTMLUListElement | HTMLOListElement>,
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
        }

        const themes = Themes({
            props: themes_props,
            direction: direction ?? 'horizontal',
        })

        const csss = { ...themes, position: 'relative' }

        if (as === 'ul')
            return (
                <ul className="items" ref={ref} css={csss} {...props}>
                    {props.children}
                </ul>
            )

        if (as === 'ol')
            return (
                <ol className="items" ref={ref as HTMLOListElement | any} css={csss} {...props}>
                    {props.children}
                </ol>
            )
    },
)

export { Items }
