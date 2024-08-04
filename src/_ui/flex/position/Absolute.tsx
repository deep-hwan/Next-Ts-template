/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { UI_EXTRACT_PROPS, UITypes } from '../../_theme/_UIKit'

type Types = {
    position: {
        top?: string | number
        bottom?: string | number
        left?: string | number
        right?: string | number
    }
    axis?: { x?: string | number; y?: string | number }
} & UITypes &
    HTMLAttributes<HTMLDivElement>

const Absolute = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
    const { position, axis, ...restProps } = props

    const { styleProps: themes, otherProps } = UI_EXTRACT_PROPS({
        ...restProps,
        direction: 'horizontal',
    })

    return (
        <div
            className="absolute"
            ref={ref}
            css={{
                ...themes,
                position: 'absolute',
                top: position.top,
                bottom: position.bottom,
                left: position.left,
                right: position.right,

                transform: `translate(${axis?.x ?? 0}, ${axis?.y ?? 0})`,
            }}
            {...otherProps}
        >
            {otherProps.children}
        </div>
    )
})

export { Absolute }
