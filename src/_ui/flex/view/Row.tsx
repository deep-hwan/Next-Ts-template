/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { FlexTypes } from '../_theme/type'
import { Themes } from '../_theme'

type Types = FlexTypes & HTMLAttributes<HTMLDivElement>

const Row = forwardRef((props: Types, ref: ForwardedRef<HTMLDivElement>) => {
    const themes = Themes({ props, direction: 'row' })

    return (
        <div
            ref={ref}
            css={{
                ...themes,
                position: 'relative',
                '&:active': { opacity: (!!props.onClick && props?.touchOpacity) ?? 0.8 },
            }}
            {...props}
        >
            {props.children}
        </div>
    )
})

export { Row }
