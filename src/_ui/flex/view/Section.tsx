/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { FlexTypes } from '../_theme/type'
import { Themes } from '../_theme'

type Types = FlexTypes & HTMLAttributes<HTMLElement>

const Section = forwardRef((props: Types, ref: ForwardedRef<HTMLElement>) => {
    const themes = Themes({ props })

    return (
        <section
            ref={ref}
            css={{
                ...themes,
                alignItems: 'center',
                flex: 1,
                height: '100%',
                position: 'relative',
                '&:active': { opacity: (!!props.onClick && props?.touchOpacity) ?? 0.8 },
            }}
            {...props}
        >
            {props.children}
        </section>
    )
})

export { Section }
