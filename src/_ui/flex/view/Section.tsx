/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { FlexTypes } from '../_theme/type'
import { Themes } from '../_theme'

type Types = Omit<FlexTypes, 'direction' | 'flex' | 'align' | 'height' | 'touchOpacity' | 'cursor'> &
    HTMLAttributes<HTMLElement>

const Section = forwardRef((props: Types, ref: ForwardedRef<HTMLElement>) => {
    const {
        width,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        flexReverse,
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
        opacity,
        ...rest
    } = props

    const themes_props = {
        width,
        minWidth,
        maxWidth,
        minHeight,
        maxHeight,
        flexReverse,
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
        opacity,
    }

    const themes = Themes({ props: themes_props })

    return (
        <section
            ref={ref}
            css={{
                ...themes,
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                position: 'relative',
            }}
            {...rest}
        >
            {props.children}
        </section>
    )
})

export { Section }
