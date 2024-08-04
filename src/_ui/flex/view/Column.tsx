/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { UI_EXTRACT_PROPS, UITypes } from '../../_theme/_UIKit'

type Types = Omit<UITypes, 'direction'> & HTMLAttributes<HTMLDivElement>

const Column = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
    const { styleProps, otherProps } = UI_EXTRACT_PROPS({
        ...props,
        direction: 'vertical',
        width: props.width ?? '100%',
    })

    return (
        <div
            className="column"
            ref={ref}
            css={{
                ...styleProps,
                position: 'relative',
                cursor: props.onClick && 'pointer',
            }}
            {...otherProps}
        >
            {props.children}
        </div>
    )
})

export { Column }
