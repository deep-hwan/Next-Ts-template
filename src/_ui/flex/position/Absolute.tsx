/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { FlexTypes } from '../_theme/type'
import { Themes } from '../_theme'

type Types = {
    direction?: 'horizontal' | 'vertical'
    position: {
        top?: string | number
        bottom?: string | number
        left?: string | number
        right?: string | number
    }
    axis?: { x?: string | number; y?: string | number }
} & FlexTypes &
    HTMLAttributes<HTMLDivElement>

const Absolute = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
    const theme = Themes({
        props,
        direction: props.direction ? (props.direction === 'horizontal' ? 'row' : 'column') : 'row',
    })

    return (
        <div
            ref={ref}
            css={{
                ...theme,

                width: props.width ?? 'auto',
                position: 'absolute',
                top: props?.position.top,
                bottom: props?.position.bottom,
                left: props?.position.left,
                right: props?.position.right,

                transform: `translate(${props?.axis?.x ?? 0}, ${props?.axis?.y ?? 0})`,
            }}
            {...props}
        >
            {props.children}
        </div>
    )
})

export { Absolute }
