/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { FlexTypes } from '../_theme/type'
import { Themes } from '../_theme'

type Types = {
    position: {
        top?: string | number
        bottom?: string | number
        left?: string | number
        right?: string | number
    }
    axis?: { x?: string | number; y?: string | number }
} & FlexTypes &
    HTMLAttributes<HTMLDivElement>

const Sticky = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
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
    }

    const theme = Themes({
        props: themes_props,
        direction: props.direction ?? 'horizontal',
    })

    return (
        <div
            className="sticky"
            ref={ref}
            css={{
                ...theme,
                width: props.width ?? 'auto',
                position: 'sticky',
                top: props?.position.top,
                bottom: props?.position.bottom,
                left: props?.position.left,
                right: props?.position.right,

                transform: `translate(${props?.axis?.x ?? 0}, ${props?.axis?.y ?? 0})`,
            }}
            {...rest}
        >
            {props.children}
        </div>
    )
})

export { Sticky }
