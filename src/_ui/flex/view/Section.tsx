/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, HTMLAttributes } from 'react'
import { UI_EXTRACT_PROPS, UITypes } from '../../_theme/_UIKit'

type Types = Omit<
    UITypes,
    'direction' | 'flex' | 'align' | 'height' | 'cursor' | 'onClick' | 'hover' | 'active' | 'userSelect'
> &
    HTMLAttributes<HTMLElement>

const Section = forwardRef((props: Types, ref: ForwardedRef<HTMLElement>) => {
    const { styleProps, otherProps } = UI_EXTRACT_PROPS(props)

    return (
        <section
            ref={ref}
            css={{
                ...styleProps,
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                position: 'relative',
            }}
            {...otherProps}
        >
            {props.children}
        </section>
    )
})

export { Section }
