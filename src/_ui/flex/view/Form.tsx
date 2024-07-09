/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { FlexTypes } from '../_theme/type'
import { Themes } from '../_theme'

const Form = forwardRef((props: FlexTypes & HTMLAttributes<HTMLFormElement>, ref: ForwardedRef<HTMLFormElement>) => {
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

    const themes = Themes({ props: themes_props })

    return (
        <form
            className="form"
            ref={ref}
            css={{
                ...themes,
                position: 'relative',
                '&:active': { opacity: (!!props.onClick && props?.touchOpacity) ?? 0.8 },
            }}
            {...rest}
        >
            {props.children}
        </form>
    )
})

export { Form }
