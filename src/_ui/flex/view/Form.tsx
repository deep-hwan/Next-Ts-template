/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { FlexTypes } from '../_theme/type'
import { Themes } from '../_theme'

const Form = forwardRef((props: FlexTypes & HTMLAttributes<HTMLFormElement>, ref: ForwardedRef<HTMLFormElement>) => {
    const themes = Themes({ props })

    return (
        <form
            ref={ref}
            css={{
                ...themes,
                position: 'relative',
                '&:active': { opacity: (!!props.onClick && props?.touchOpacity) ?? 0.8 },
            }}
            {...props}
        >
            {props.children}
        </form>
    )
})

export { Form }
