/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { FlexTypes } from '../_theme/type'
import { Themes } from '../_theme'

type Types = Omit<FlexTypes, 'direction' | 'flex' | 'align' | 'height' | 'touchOpacity' | 'cursor'> &
    HTMLAttributes<HTMLElement>

const Section = forwardRef((props: Types, ref: ForwardedRef<HTMLElement>) => {
    const themes = Themes({ props })

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
            {...props}
        >
            {props.children}
        </section>
    )
})

export { Section }
