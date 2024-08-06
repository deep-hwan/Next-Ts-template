/** @jsxImportSource @emotion/react */
import { UI_EXTRACT_PROPS, UITypes } from '@/_ui/_theme/_UIKit'
import React, { ForwardedRef, HTMLAttributes, forwardRef } from 'react'

interface Props extends HTMLAttributes<HTMLUListElement | HTMLOListElement>, Omit<UITypes, 'onClick'> {
    as?: 'ul' | 'ol'
}

const Items = forwardRef((props: Props, ref: ForwardedRef<HTMLUListElement | HTMLOListElement>) => {
    const { as = 'ul', ...restProps } = props
    const { styleProps, otherProps } = UI_EXTRACT_PROPS({
        ...restProps,
        width: restProps.width ?? '100%',
        direction: restProps.direction ?? 'vertical',
    })

    const csss = { ...styleProps, position: 'relative' }

    if (as === 'ul')
        return (
            <ul className="items" ref={ref} css={csss} {...otherProps}>
                {restProps.children}
            </ul>
        )

    if (as === 'ol')
        return (
            <ol className="items" ref={ref as HTMLOListElement | any} css={csss} {...otherProps}>
                {restProps.children}
            </ol>
        )
})

export { Items }
