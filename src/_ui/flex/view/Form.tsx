/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { UI_EXTRACT_PROPS, UITypes } from '../../_theme/_UIKit'

const Form = forwardRef((props: UITypes & HTMLAttributes<HTMLFormElement>, ref: ForwardedRef<HTMLFormElement>) => {
    const { styleProps, otherProps } = UI_EXTRACT_PROPS({
        ...props,
        width: props.width ?? '100%',
        direction: props.direction ?? 'vertical',
    })

    return (
        <form
            className="form"
            ref={ref}
            css={{
                ...styleProps,
                position: 'relative',
            }}
            {...otherProps}
        >
            {props.children}
        </form>
    )
})

export { Form }
