/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes } from 'react'
import Link from 'next/link'
import { Interpolation, Theme } from '@emotion/react'
import { TAB_EXTRACT_PROPS, TabType } from '../_theme/tab'

type AttriType = Omit<
    HTMLAttributes<HTMLDivElement | HTMLLIElement | HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement>,
    'color' | 'disabled'
>

type Types = {
    as?: 'div' | 'li' | 'span' | 'button' | 'a'
    href?: any
    target?: '_blank' | '_self' | '_parent' | '_top'
    disabled?: boolean
} & AttriType &
    TabType

//
export function TouchableOpacity(props: Types) {
    const { as = 'div', disabled, ...restProps } = props

    const { styleProps: styleSheets, otherProps } = TAB_EXTRACT_PROPS(restProps)

    return (
        <>
            {as === 'div' && (
                <div className="TouchableOpacity" css={styleSheets} {...otherProps}>
                    {props.children}
                </div>
            )}

            {as === 'li' && (
                <li className="TouchableOpacity" css={styleSheets} {...otherProps}>
                    {props.children}
                </li>
            )}

            {as === 'span' && (
                <span className="TouchableOpacity" css={styleSheets} {...otherProps}>
                    {props.children}
                </span>
            )}

            {as === 'button' && (
                <button className="TouchableOpacity" disabled={disabled} css={styleSheets} {...otherProps}>
                    {props.children}
                </button>
            )}

            {as === 'a' && (
                <Link className="TouchableOpacity" href={props.href} css={styleSheets} {...otherProps}>
                    {props.children}
                </Link>
            )}
        </>
    )
}
