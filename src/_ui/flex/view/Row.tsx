/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { FlexTypes } from '../_theme/type'
import { Themes } from '../_theme'

type Types = Omit<FlexTypes, 'direction'> & HTMLAttributes<HTMLDivElement>

const Row = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
    const {
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
        ...rest
    } = props

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

    const themes = Themes({ props: themes_props, direction: 'horizontal' })

    return (
        <div
            ref={ref}
            className="row"
            css={{
                ...themes,
                position: 'relative',
                '&:active': { opacity: (!!props.onClick && props?.touchOpacity) ?? 0.8 },
            }}
            {...rest}
        >
            {props.children}
        </div>
    )
})

export { Row }
