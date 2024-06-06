import React, { ReactNode } from 'react'
import { Fixed } from './Fixed'

interface Props {
    children: ReactNode
    animate: boolean
    height?: number
    padding?: {
        all?: number | string
        horizontal?: number | string
        vertical?: number | string
        top?: number | string
        bottom?: number | string
        left?: number | string
        right?: number | string
    }
    backgroundColor?: string
}

export function BottomFixedAnimate(props: Props) {
    const p_all = props.padding?.all
    const p_V = props.padding?.vertical
    const p_H = props.padding?.horizontal
    const p_T = props.padding?.top
    const p_B = props.padding?.bottom
    const p_L = props.padding?.left
    const p_R = props.padding?.right

    return (
        <div
            css={{
                width: '100%',
                maxHeight: props.animate ? props.height : 0,
                minHeight: props.animate ? props.height : 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: '0.2s ease-in-out',
            }}
        >
            <Fixed
                minHeight={props.height ?? 60}
                maxHeight={props.height ?? 60}
                height="100%"
                position={{ bottom: props.animate ? 0 : ('-100%' as any), left: 0, right: 0 }}
                align="center"
                transitionTime={0.2}
                backgroundColor={props.backgroundColor}
                css={{
                    paddingTop: 'max(0px, env(safe-area-inset-top))',
                    paddingBottom: 'max(0px, env(safe-area-inset-bottom))',
                    paddingInlineStart: 'max(0px, env(safe-area-inset-left))',
                    paddingInlineEnd: 'max(0px, env(safe-area-inset-right))',
                }}
            >
                <div
                    css={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <div
                        css={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingTop: (p_all && p_all) || (p_V && p_V) || (p_T && p_T),
                            paddingBottom: (p_all && p_all) || (p_V && p_V) || (p_B && p_B),
                            paddingLeft: (p_all && p_all) || (p_H && p_H) || (p_L && p_L),
                            paddingRight: (p_all && p_all) || (p_H && p_H) || (p_R && p_R),
                        }}
                    >
                        {props.children}
                    </div>
                </div>
            </Fixed>
        </div>
    )
}
