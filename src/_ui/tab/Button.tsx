/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, forwardRef, ForwardedRef } from 'react'
import { colors } from '@/libs/themes'
import { TAB_EXTRACT_PROPS, TabType } from '../_theme/tab'


//
type AttriType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color' | 'disabled'>

//
type Types = {
    as?: 's' | 'm' | 'l'
    button_disabled?: boolean
} & AttriType &
    Omit<TabType, 'active' | 'hover'>


    //
export const Button = forwardRef<HTMLButtonElement, Types>((props: Types, ref: ForwardedRef<HTMLButtonElement>) => {
    const { as = 'l', disabled, ...restProps } = props

    const { button_disabled } = restProps

    const { styleProps: styleSheets, otherProps } = TAB_EXTRACT_PROPS({
        ...restProps,
        padding:
            (as === 's' && { vertical: 11, horizontal: 16 }) ||
            (as === 'm' && { vertical: 13, horizontal: 18 }) ||
            (as === 'l' && { vertical: 15, horizontal: 20 }) ||
            restProps.padding,
    })

    const TAB_SIZE = {
        s: {
            minHeight: 'auto',
            fontSize: `${12 / 16}rem`,
            borderRadius: 12,
        },
        m: {
            minHeight: 'auto',
            fontSize: `${14 / 16}rem`,
            borderRadius: 14,
        },
        l: {
            minHeight: 56,
            fontSize: `${15 / 16}rem`,
            borderRadius: 18,
        },
    }

    return (
        <button
            className="button"
            ref={ref}
            type={restProps.type ?? 'button'}
            disabled={button_disabled}
            css={{
                ...(styleSheets as any),
                cursor: 'pointer',
                transition: '0.2s ease-in-out',
                minHeight: restProps.minHeight ?? TAB_SIZE[as].minHeight,
                fontSize: restProps.txtSize ?? TAB_SIZE[as].fontSize,
                color: restProps.txtColor ?? '#fff',
                borderRadius: restProps.borderRadius ?? TAB_SIZE[as].borderRadius,
                backgroundColor: (restProps?.backgroundColor as string) ?? colors.keyColor,

                '&:disabled': { backgroundColor: '#ccc', color: '#fff', transform: 'scale(1)' },
                '&:hover': { filter: 'saturate(88%)', boxShadow: 'none' },
                '&:active': { scale: button_disabled ? 1 : 0.98, opacity: 0.8, boxShadow: 'none' },
            }}
            {...otherProps}
        >
            {props.children}
        </button>
    )
})
