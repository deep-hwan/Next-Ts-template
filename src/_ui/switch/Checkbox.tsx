/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, InputHTMLAttributes, forwardRef, useState } from 'react'
import { colors } from '../../libs/themes/colors'
import { Txt } from '../typography/Txt'
import { V } from '../flex/V'

//
interface CheckProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    checkSize?: number
    size?: number
    type?: 'checkbox' | 'radio'
    themes?: {
        check?: {
            defaultColor?: string
            checkColor?: string
            hoverColor?: string
            disabledColor?: string
            borderColor?: string
            borderRadius?: string
            checkSize?: string
        }

        label?: {
            titleColor?: string
            titleSize?: number
            titleWeight?: 'lighter' | 'normal' | 'medium' | 'bold'
            txtColor?: string
            txtSize?: number
        }
    }
    label?: {
        title: string
        txt?: string
        txtOnClick?: any
    }
}

export const Checkbox = forwardRef(function Checkbox(props: CheckProps, ref: ForwardedRef<HTMLInputElement>) {
    const uid = generateUUID()

    const { id, type = 'checkbox', disabled, checkSize = 16, label, themes, ...rest } = props

    const { check: checkTheme, label: labelTheme } = themes ?? {}

    const [hover, setHover] = useState(false)

    return (
        <V.Row align="start" gap={3} width="auto">
            <label
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                css={{
                    ...CheckLabelTheme,
                    maxWidth: checkTheme?.checkSize ?? 16 + 10,
                    maxHeight: checkTheme?.checkSize ?? 16 + 10,
                    minWidth: checkTheme?.checkSize ?? 16 + 10,
                    minHeight: checkTheme?.checkSize ?? 16 + 10,
                    cursor: !disabled ? 'cursor' : 'default',
                }}
                htmlFor={id ?? uid}
            >
                <div
                    css={{
                        ...HBoxTheme,
                        backgroundColor: checkTheme?.hoverColor ?? '#f2f2f2',
                        transform: !disabled && hover ? 'scale(1)' : 'scale(0)',
                    }}
                />
                <input
                    ref={ref}
                    type={type}
                    css={{
                        ...CheckThemes,
                        zIndex: 1,
                        width: checkSize,
                        minWidth: checkSize,
                        height: checkSize,
                        minHeight: checkSize,
                        backgroundColor: checkTheme?.defaultColor ?? '#e0e0e0',
                        borderRadius: checkTheme?.borderRadius ?? 6,
                        '&:checked': { backgroundColor: checkTheme?.checkColor ?? colors.keyColor },
                        '&:disabled': {
                            backgroundColor: checkTheme?.disabledColor ?? '#c8cada',
                            border: `1px solid ${checkTheme?.borderColor ?? '#ccc'}`,
                            cursor: 'default',
                        },
                    }}
                    disabled={disabled}
                    id={id ?? uid}
                    {...rest}
                />
            </label>

            {!!label && (
                <V.Column gap={4}>
                    <label
                        htmlFor={id ?? uid}
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        css={{
                            ...labelThemes,
                            cursor: disabled ? 'default' : 'pointer',
                        }}
                    >
                        <Txt
                            weight={labelTheme?.titleWeight ?? 'medium'}
                            size={labelTheme?.titleSize ?? 14}
                            color={labelTheme?.titleColor ?? '#555'}
                            css={{ userSelect: 'none' }}
                        >
                            {label.title}
                        </Txt>
                    </label>

                    <Txt
                        size={labelTheme?.txtSize ?? 12}
                        color={labelTheme?.txtColor ?? '#888'}
                        onClick={label.txtOnClick}
                    >
                        {label.txt}
                    </Txt>
                </V.Column>
            )}
        </V.Row>
    )
})

const labelThemes: any = {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 3,
    userSelect: 'none',
    paddingTop: 2,
}

const CheckLabelTheme: any = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

const HBoxTheme: any = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transition: '0.3s ease-in-out',
    borderRadius: 100,
}

const CheckThemes: any = {
    zIndex: 1,
    border: '0px solid gainsboro',
    appearance: 'none',
    userSelect: 'none',
    transition: '0.2s ease-in-out',
    backgroundImage:
        "url('data:image/svg+xml,%3csvg viewBox=%220 0 16 16%22 fill=%22white%22 xmlns=%22http://www.w3.org/2000/svg%22%3e%3cpath d=%27M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z%27/%3e%3c/svg%3e')",

    '&:checked': {
        borderColor: 'transparent',
        backgroundSize: '100% 100%',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        borderRadius: '5px',
    },

    '&:disabled': {
        borderColor: 'transparent',
        backgroundSize: '100% 100%',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat',
        borderRadius: '5px',
        cursor: 'default',
    },
}

const generateUUID = () => {
    let dt = new Date().getTime()
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (dt + Math.random() * 16) % 16 | 0
        dt = Math.floor(dt / 16)
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
    })
    return uuid
}
