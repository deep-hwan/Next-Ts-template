import { UITypes } from './_UIKit'
import { Interpolation, Theme } from '@emotion/react'

export function Themes({ direction = 'vertical', props }: { direction?: 'horizontal' | 'vertical'; props: UITypes }) {
    //
    //
    const Size = {
        width: props?.width ?? '100%',
        minWidth: props?.minWidth,
        maxWidth: props?.maxWidth,
        height: props?.height,
        minHeight: props?.minHeight,
        maxHeight: props?.maxHeight,
    }

    //
    //
    const FLEX_VARIANTS = {
        horizontal: {
            flexDirection: props?.reverse ? 'row-reverse' : 'row',
            align: props?.align ?? 'stretch',
            rowGap: props?.crossGap,
            columnGap: props?.gap,
        },
        vertical: {
            flexDirection: props?.reverse ? 'column-reverse' : 'column',
            align: props?.align ?? 'start',
            rowGap: props?.gap,
            columnGap: props?.crossGap,
        },
    }

    //
    //
    const Flex = {
        display: 'flex',
        flexDirection: FLEX_VARIANTS[direction].flexDirection,
        alignItems: FLEX_VARIANTS[direction].align,
        justifyContent: props?.crossAlign,
        alignContent: props?.alignContent,
        alignSelf: props?.alignSelf,
        flexWrap: props?.wrap ?? 'nowrap',
        flexBasis: props?.basis,
        flexGrow: props?.grow,
        flexShrink: props?.shrink,
        rowGap: FLEX_VARIANTS[direction].rowGap ?? 0,
        columnGap: FLEX_VARIANTS[direction].columnGap ?? 0,
        order: props.order,
    } as Interpolation<Theme>

    //
    //
    const Padding = {
        paddingTop: props?.padding?.all || props?.padding?.vertical || props?.padding?.top,
        paddingBottom: props?.padding?.all || props?.padding?.vertical || props?.padding?.bottom,
        paddingRight: props?.padding?.all || props?.padding?.horizontal || props?.padding?.right,
        paddingLeft: props?.padding?.all || props?.padding?.horizontal || props?.padding?.left,
    } as Interpolation<Theme>

    //
    //
    const Margin = {
        marginTop: props?.margin?.all || props?.margin?.vertical || props?.margin?.top,
        marginBottom: props?.margin?.all || props?.margin?.vertical || props?.margin?.bottom,
        marginRight: props?.margin?.all || props?.margin?.horizontal || props?.margin?.right,
        marginLeft: props?.margin?.all || props?.margin?.horizontal || props?.margin?.left,
    } as Interpolation<Theme>

    //
    //
    const Theme = {
        background: props?.background,
        backgroundColor: props?.backgroundColor,
        backgroundRepeat: props?.backgroundRepeat ?? 'no-repeat',
        backgroundSize: props?.backgroundSize ?? 'cover',
        backgroundPosition: props?.backgroundPosition ?? 'center',
        backgroundClip: props?.backgroundClip,
        backgroundImage: `url(${props?.backgroundImageUrl})`,
        border:
            !props?.border?.position || props?.border?.position === 'all'
                ? `${props?.border?.solid}px solid ${props?.border?.color}`
                : undefined,
        borderBottom:
            props?.border?.position === 'bottom'
                ? `${props?.border?.solid}px solid ${props?.border?.color}`
                : undefined,
        borderTop:
            props?.border?.position === 'top' ? `${props?.border?.solid}px solid ${props?.border?.color}` : undefined,
        borderRight:
            props?.border?.position === 'right' ? `${props?.border?.solid}px solid ${props?.border?.color}` : undefined,
        borderLeft:
            props?.border?.position === 'left' ? `${props?.border?.solid}px solid ${props?.border?.color}` : undefined,
        borderRadius: props?.borderRadius,
        boxShadow: props?.shadow
            ? `${props?.shadow?.x}px ${props?.shadow?.y}px ${props?.shadow?.blur}px ${props?.shadow?.color}`
            : undefined,
    } as Interpolation<Theme>

    //
    //
    const Order = {
        zIndex: props?.zIndex,
        cursor: props?.onClick ? 'pointer' : props?.cursor,
        userSelect: props?.onClick && 'none',
        transition: `${props?.transitionTime ?? 0}s ease-in-out`,
        opacity: props.opacity,
    } as Interpolation<Theme>

    //
    //
    const Scroll = {
        overflow: props?.scroll?.type ?? 'visible',

        '::-webkit-scrollbar': {
            display: props?.scroll?.bar ? 'flex' : 'none',
            width: '4px',
            height: '4px',
        },
        '::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
        },
        '::-webkit-scrollbar-thumb': {
            backgroundColor: '#cccccc',
            borderRadius: '100px',
        },
        '::-webkit-scrollbar-thumb:hover': {
            background: '#e2e2e2',
        },
        '::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment': {
            width: 0,
            height: 0,
            backgroundColor: 'transparent',
        },
    }

    return {
        Size,
        Flex,
        Padding,
        Margin,
        Theme,
        Order,
        Scroll,

        ...(Size as any),
        ...(Flex as any),
        ...(Padding as any),
        ...(Margin as any),
        ...(Theme as any),
        ...(Order as any),
        ...(Scroll as any),
    }
}
