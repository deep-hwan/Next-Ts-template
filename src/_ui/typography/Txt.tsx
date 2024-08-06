/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react'
import { Typography_Theme, TypographyType } from '../_theme/typography'

type ExtandTypoTypes = TypographyType & HTMLAttributes<HTMLElement>

type Types = {
    children: ReactNode
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'b' | 'i' | 'p'
} & ExtandTypoTypes

export function Txt(props: Types) {
    const { as = 'p', size, weight, whiteSpace = 'pre-line', ...restProps } = props

    const { styleProps, otherProps } = Typography_Theme({
        ...restProps,
        txtAlign: props.txtAlign ?? 'start',
        color: props.color ?? '#4e4e51',
        whiteSpace: props?.ellipsis?.ellipsis ? 'normal' : props.whiteSpace ?? 'pre-line',
    })

    return (
        <>
            {as === 'h1' && (
                <h1
                    className="h1_txt"
                    css={{ ...(styleProps as any), fontSize: size ?? 54, fontWeight: weight ?? 'bold' }}
                    {...otherProps}
                >
                    {props.children}
                </h1>
            )}

            {as === 'h2' && (
                <h2
                    className="h2_txt"
                    css={{ ...(styleProps as any), fontSize: size ?? 44, fontWeight: weight ?? 'bold' }}
                    {...otherProps}
                >
                    {props.children}
                </h2>
            )}

            {as === 'h3' && (
                <h3
                    className="h3_txt"
                    css={{ ...(styleProps as any), fontSize: size ?? 35, fontWeight: weight ?? 'bold' }}
                    {...otherProps}
                >
                    {props.children}
                </h3>
            )}

            {as === 'h4' && (
                <h4
                    className="h4_txt"
                    css={{ ...(styleProps as any), fontSize: size ?? 32, fontWeight: weight ?? 'bold' }}
                    {...otherProps}
                >
                    {props.children}
                </h4>
            )}

            {as === 'h5' && (
                <h5
                    className="h5_txt"
                    css={{ ...(styleProps as any), fontSize: size ?? 28, fontWeight: weight ?? 'bold' }}
                    {...otherProps}
                >
                    {props.children}
                </h5>
            )}

            {as === 'h6' && (
                <h6
                    className="h6_txt"
                    css={{ ...(styleProps as any), fontSize: size ?? 26, fontWeight: weight ?? 'bold' }}
                    {...otherProps}
                >
                    {props.children}
                </h6>
            )}

            {as === 'b' && (
                <b
                    className="b_txt"
                    css={{ ...(styleProps as any), fontSize: size ?? 22, fontWeight: weight ?? 'bold' }}
                    {...otherProps}
                >
                    {props.children}
                </b>
            )}

            {as === 'strong' && (
                <strong
                    className="strong_txt"
                    css={{ ...(styleProps as any), fontSize: size ?? 18, fontWeight: weight ?? 'medium' }}
                    {...otherProps}
                >
                    {props.children}
                </strong>
            )}

            {as === 'i' && (
                <i
                    className="i_txt"
                    css={{ ...(styleProps as any), fontSize: size ?? 15, fontWeight: weight ?? 'normal' }}
                    {...otherProps}
                >
                    {props.children}
                </i>
            )}

            {as === 'p' && (
                <p
                    className="p_txt"
                    css={{ ...(styleProps as any), fontSize: size ?? 15, fontWeight: weight ?? 'normal' }}
                    {...otherProps}
                >
                    {props.children}
                </p>
            )}
        </>
    )
}
