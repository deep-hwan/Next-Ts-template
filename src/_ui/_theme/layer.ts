import { Interpolation, Theme } from '@emotion/react'

export type LayerType = {
    backgroundColor?: string
    background?: string
    backgroundRepeat?: 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat'
    backgroundSize?: 'contain' | 'cover' | string
    backgroundPosition?: 'top' | 'bottom' | 'center' | 'left' | 'right' | 'string'
    backgroundClip?: 'border-box' | 'padding-box' | 'content-box' | 'initial' | 'inherit'
    backgroundImageUrl?: string
    filter?: number | string
    shadow?: {
        x?: number
        y?: number
        blur?: number
        color?: string
    }
    zIndex?: number
    transitionTime?: number
    cursor?: 'default' | 'grab' | 'pointer' | 'zoom'
    opacity?: number
    onClick?: any
    userSelect?: 'none' | 'auto' | 'text' | 'contain' | 'all'
}

export const LayerTheme = (props: LayerType) => {
    return {
        background: props?.background,
        backgroundColor: props?.backgroundColor,
        backgroundRepeat: props?.backgroundRepeat ?? 'no-repeat',
        backgroundSize: props?.backgroundSize ?? 'cover',
        backgroundPosition: props?.backgroundPosition ?? 'center',
        backgroundClip: props?.backgroundClip,
        backgroundImage: props?.backgroundImageUrl && `url(${props?.backgroundImageUrl})`,
        boxShadow: props?.shadow
            ? `${props?.shadow?.x}px ${props?.shadow?.y}px ${props?.shadow?.blur}px ${props?.shadow?.color}`
            : undefined,
        filter: !!props.filter && `blur(${props.filter})`,
        zIndex: props?.zIndex,
        cursor: props?.onClick ? 'pointer' : props?.cursor,
        userSelect: props.userSelect ? props.userSelect : props?.onClick && 'none',
        transition: props?.transitionTime && `${props?.transitionTime}s ease-in-out`,
        opacity: props.opacity,
    } as Interpolation<Theme>
}

export const layerKeys = [
    'backgroundColor',
    'background',
    'backgroundRepeat',
    'backgroundSize',
    'backgroundPosition',
    'backgroundClip',
    'backgroundImageUrl',
    'filter',
    'shadow',
    'zIndex',
    'cursor',
    'userSelect',
    'transitionTime',
    'opacity',
]
