/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react'
import { SpaceTheme, SpaceType } from '../../_themes/space'
import { FlexTheme, FlexType } from '../../_themes/flex'
import { ViewportTypes } from '../../_themes/viewport'
import { ScrollTheme, ScrollType } from '../../_themes/scroll'
import { BorderTheme, BorderType } from '../../_themes/border'
import { ShadowTheme, ShadowType } from '../../_themes/boxShadow'
import { CursorTheme, CursorType } from '../../_themes/cursor'

interface Props
    extends HTMLAttributes<HTMLDivElement>,
        ViewportTypes,
        FlexType,
        SpaceType,
        BorderType,
        ShadowType,
        ScrollType,
        CursorType {
    children?: ReactNode
    borderRadius?: number | string
    backgroundColor?: string
    transitionTime?: number
    position: {
        top?: string | number
        bottom?: string | number
        left?: string | number
        right?: string | number
    }
    order?: number
    axis?: { x?: string | number; y?: string | number }
}

const Absolute = forwardRef((props: Props, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        zIndex,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,
        backgroundColor,
        borderRadius,
        transitionTime,
        flex,
        direction,
        align,
        crossAlign,
        wrap,
        gap,
        crossGap,
        basis,
        grow,
        shrink,
        padding,
        margin,
        scroll,
        border,
        shadow,
        cursor,
        position,
        axis,
        order,
        ...rest
    } = props

    const FlexT = FlexTheme({
        flex,
        direction: direction ?? 'horizontal',
        align: align ?? 'stretch',
        crossAlign,
        wrap,
        gap,
        crossGap,
        basis,
        grow,
        shrink,
    })
    const spaceT = SpaceTheme({ padding, margin })
    const scrollT = ScrollTheme({ scroll })
    const borderT = BorderTheme({ border: border })
    const shadowT = ShadowTheme({ shadow: shadow })
    const cursorT = CursorTheme({ cursor: cursor, onClick: rest.onClick })

    return (
        <div
            ref={ref}
            css={{
                zIndex: zIndex,
                width: width ?? 'auto',
                minWidth: minWidth,
                maxWidth: maxWidth,
                height: height,
                minHeight: minHeight,
                maxHeight: maxHeight,

                position: 'absolute',
                top: position.top,
                bottom: position.bottom,
                left: position.left,
                right: position.right,

                backgroundColor: backgroundColor,
                borderRadius: borderRadius,
                order: order,
                transition: `${transitionTime ?? 0}s ease-in-out`,
                transform: `translate(${axis?.x ?? 0}, ${axis?.y ?? 0})`,

                ...FlexT,
                ...spaceT,
                ...scrollT,
                ...borderT,
                ...shadowT,
                ...cursorT,
            }}
            {...rest}
        >
            {rest.children}
        </div>
    )
})

export { Absolute }
