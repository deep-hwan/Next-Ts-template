/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, forwardRef } from 'react'
import { Themes } from '../_theme'
import { FlexTypes } from '../_theme/type'

interface Props extends HTMLAttributes<HTMLUListElement | HTMLOListElement>, Omit<FlexTypes, 'onClick'> {
    as?: 'ul' | 'ol'
    direction?: 'horizontal' | 'vertical'
}

const Items = forwardRef(
    (
        { as = 'ul', direction = 'vertical', ...props }: Props,
        ref: ForwardedRef<HTMLUListElement | HTMLOListElement>,
    ) => {
        const themes = Themes({
            props,
            direction: direction ? (direction === 'horizontal' ? 'row' : 'column') : 'row',
        })

        const csss = { ...themes, position: 'relative' }

        if (as === 'ul')
            return (
                <ul ref={ref} css={csss} {...props}>
                    {props.children}
                </ul>
            )

        if (as === 'ol')
            return (
                <ol ref={ref as HTMLOListElement | any} css={csss} {...props}>
                    {props.children}
                </ol>
            )
    },
)

export { Items }
