/** @jsxImportSource @emotion/react */
import React, { HTMLAttributes } from 'react'
import Link from 'next/link'
import { Interpolation, Theme } from '@emotion/react'
import { TAB_EXTRACT_PROPS, TabType } from '../_theme/tab'

//
type AttriType = Omit<
    HTMLAttributes<HTMLDivElement | HTMLLIElement | HTMLSpanElement | HTMLButtonElement | HTMLAnchorElement>,
    'color' | 'disabled'
>

type Types = {
    as?: 'div' | 'li' | 'span' | 'button' | 'a'
    href?: any
    target?: '_blank' | '_self' | '_parent' | '_top'
    button_disabled?: boolean | null
} & AttriType &
    TabType

//
export function TouchableOpacity(props: Types) {
    const { as = 'div', disabled, ...restProps } = props

    const { button_disabled = null } = restProps

    const { styleProps: styleSheets, otherProps } = TAB_EXTRACT_PROPS({ ...restProps })

    const Button = () => (
        <button
            className="TouchableOpacity"
            disabled={button_disabled}
            css={{
                ...(styleSheets as any),
                '&:disabled': {
                    fontSize: disabled?.txtSize,
                    fontWeight: disabled?.txtWeight,
                    color: disabled?.txtColor,
                    backgroundColor: disabled?.backgroundColor,
                },
            }}
            {...otherProps}
        >
            {props.children}
        </button>
    )

    return (
        <>
            {typeof button_disabled === 'boolean' ? (
                <Button />
            ) : (
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

                    {as === 'button' && <Button />}

                    {as === 'a' && (
                        <Link className="TouchableOpacity" href={props.href} css={styleSheets} {...otherProps}>
                            {props.children}
                        </Link>
                    )}
                </>
            )}
        </>
    )
}
