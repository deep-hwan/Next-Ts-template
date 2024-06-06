/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react'

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    children: ReactNode
    type?: 'submit' | 'reset' | 'button' | undefined
    tabColor?: string
    hoverColor?: string
}

export const IconTab = forwardRef<HTMLButtonElement, Props>((props, ref: ForwardedRef<HTMLButtonElement>) => {
    const { type, tabColor, hoverColor, ...rest } = props

    return (
        <button
            ref={ref}
            type={type ?? 'button'}
            css={css`
                ${{
                    padding: 8,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: tabColor,
                    borderRadius: 12,
                    transition: '0.2s ease-in-out',
                    userSelect: 'none',
                    aspectRatio: 1 / 1,

                    '&:hover': { backgroundColor: hoverColor ?? '#f5f5f5' },
                }}

                &:active {
                    .icon-wrap {
                        transform: scale(0.78);
                    }
                }
            `}
            {...rest}
        >
            <div
                className="icon-wrap"
                css={css`
                    ${{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        transition: '0.3s ease-in-out',
                        userSelect: 'none',
                        aspectRatio: 1 / 1,
                    }}
                    svg {
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            >
                {props.children}
            </div>
        </button>
    )
})
