/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { UI_EXTRACT_PROPS, UITypes } from '../../_theme/_UIKit'

type Types = Omit<UITypes, 'direction'> & HTMLAttributes<HTMLDivElement>

const Row = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
    const { styleProps, otherProps } = UI_EXTRACT_PROPS({
        ...props,
        direction: 'horizontal',
        align: props.align ?? 'stretch',
        width: props.width ?? '100%',
    })

    return (
        <div
            ref={ref}
            className="row"
            css={{
                ...styleProps,
                position: 'relative',
            }}
            {...otherProps}
        >
            {props.children}
        </div>
    )
})

export { Row }
