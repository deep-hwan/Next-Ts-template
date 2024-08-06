/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react'
import { Typography_Theme, TypographyType } from '../_theme/typography'

//
type ExtandTypoTypes = Omit<TypographyType, 'ellipsis'> & HTMLAttributes<HTMLElement>

type Types = {
    children: ReactNode
} & ExtandTypoTypes

//
export function TxtSpan(props: Types) {
    const { size, weight, whiteSpace = 'pre-line', ...restProps } = props

    const { styleProps, otherProps } = Typography_Theme({
        ...restProps,
        size: props.size ? `${props.size / 16}rem` : ('0.813rem' as any),
        txtAlign: 'start',
        color: props.color ?? '#999',
        weight: props.weight ?? 'normal',
        whiteSpace: props.whiteSpace ?? 'nowrap',
    })

    return (
        <span
            className="txtSpan"
            css={{
                ...(styleProps as any),
            }}
            {...otherProps}
        >
            {props.children}
        </span>
    )
}
