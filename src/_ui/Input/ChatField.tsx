/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, forwardRef, useEffect } from 'react'
import { TouchableOpacity, V } from '@/_ui'
import { useUid } from '@/libs/hooks'
import { MQ } from '@/libs/themes'
import { css, keyframes } from '@emotion/react'
import { SendIcon } from './send_field_icon/send-icon'
import { FileIcon } from './send_field_icon/file-icon'

const ChatField = forwardRef((props: ChatFieldType, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const { value, disabled, fileTab, uploadTab, themes, ...rest } = props

    const id = props?.id ?? useUid()
    const {
        backgroundColor = '#f8f8f8',
        borderColor = '#eee',
        txtColor = '#555',
        placeholderColor = '#c0c0c0',
    } = themes ?? {}

    //
    // rasize
    useEffect(() => {
        const handleRasie = () => {
            if (value !== '' && ref && 'current' in ref && ref.current) {
                ref.current.style.height = 'auto'
                ref.current.style.height = ref.current.scrollHeight + 'px'
            } else if (ref && 'current' in ref && ref.current) {
                ref.current.style.height = 'auto'
            }
        }

        handleRasie()
    }, [value, ref])

    const SendTab = () => {
        if (uploadTab?.loading) return <LoadingIcon />
        else
            return (
                <TouchableOpacity
                    as="button"
                    disabled={disabled || uploadTab?.disabled || fileTab?.loading}
                    padding={{ all: 8 }}
                    onClick={() => {
                        if (uploadTab?.disabled) return
                        else uploadTab?.onClick?.()
                    }}
                    css={{ opacity: disabled || uploadTab?.disabled || fileTab?.loading ? '0.3 !important' : 1 }}
                >
                    <SendIcon type={uploadTab?.iconType} iconColor={uploadTab?.iconColor} />
                </TouchableOpacity>
            )
    }

    const FileTab = () => {
        if (fileTab?.loading) return <LoadingIcon />
        else
            return (
                <TouchableOpacity
                    padding={{ all: 8 }}
                    css={{ opacity: disabled || uploadTab?.loading || fileTab?.disabled ? '0.3 !important' : 1 }}
                    onClick={() => {
                        if (fileTab?.disabled) return
                        else fileTab?.onClick?.()
                    }}
                >
                    <FileIcon type={fileTab?.iconType} iconColor={fileTab?.iconColor} />
                    <input
                        type="file"
                        disabled={disabled || uploadTab?.loading || fileTab?.disabled}
                        accept={fileTab?.accept ?? 'image/png, image/jpeg, image/jpg'}
                        css={styleSheet.fileInput}
                        onChange={(e) => fileTab?.onChange?.(e)}
                    />
                </TouchableOpacity>
            )
    }

    return (
        <>
            <V.Row
                height="100%"
                align="end"
                css={{ border: `1px solid ${borderColor}`, backgroundColor, borderRadius: 18 }}
            >
                <textarea
                    ref={ref}
                    id={id}
                    value={value}
                    rows={1}
                    disabled={disabled}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            if (!value || (typeof value === 'string' && value.trim() === '')) e.preventDefault()
                        }
                    }}
                    css={{
                        color: txtColor,
                        ...styleSheet.textarea,
                        ...(styleSheet.globelThemes as any),
                        '::placeholder': { color: placeholderColor },
                    }}
                    {...rest}
                />

                <V.Row width="auto" align="center" minHeight={47} css={styleSheet.tabs as any}>
                    <FileTab />

                    {!!value && <SendTab />}
                </V.Row>
            </V.Row>
        </>
    )
})

export { ChatField }

const LoadingIcon = () => {
    return (
        <V.Column padding={{ all: 7 }} align="center">
            <div css={styleSheet.loadingSpinner} />
        </V.Column>
    )
}

//
//
const styleSheet = {
    textarea: {
        maxHeight: 120,
        fontSize: 15,
        padding: 13,
        [MQ[3]]: { fontSize: 14, padding: '11px 13px', maxHeight: 90 },
    },

    tabs: [
        {
            paddingRight: 4,
            [MQ[3]]: { minHeight: 42 },
        },
        css`
            svg,
            img {
                width: 22px !important;
                height: 22px !important;
            }
        `,
    ],

    loadingSpinner: {
        width: 23,
        minWidth: 23,
        height: 23,
        minHeight: 23,
        border: '2px solid #e0e0e0',
        borderBottomColor: 'transparent',
        borderRadius: '50%',
        display: 'inline-block',
        boxSizing: 'border-box',
        animation: `${keyframes`
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
`} 1s linear infinite`,
    },

    fileInput: {
        width: '100%',
        height: '100%',
        zIndex: 3,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0,
        cursor: 'pointer',
    },

    globelThemes: {
        width: '100%',
        outline: 'none',
        border: 'none',
        resize: 'none',
        backgroundColor: 'transparent',
        WebkitBoxSizing: 'border-box',
        MozBoxSizing: 'border-box',
        boxSizing: 'border-box',
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        backgroundRepeat: 'no-repeat',
        overflow: 'visible',

        '::-webkit-scrollbar': {
            display: 'none',
            width: '4px',
            height: '4px',
        },
        '::-webkit-scrollbar-track': { backgroundColor: 'transparent' },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: '#cccccc',
            borderRadius: '100px',
        },
        '::-webkit-scrollbar-thumb:hover': { background: '#e2e2e2' },
        '::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment': {
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
        },
    },
} as const
