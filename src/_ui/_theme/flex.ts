import { Interpolation, Theme } from '@emotion/react'

//
export type FlexType = {
    display?: 'none' | 'flex'
    flex?: number | string
    reverse?: boolean
    direction?: 'horizontal' | 'vertical'
    align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
    crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'
    alignSelf?: 'auto' | 'stretch' | 'start' | 'end' | 'center' | 'baseline'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    basis?: number | string | 'auto'
    grow?: number
    shrink?: number
    gap?: number
    crossGap?: number
    order?: number
}

//
export const FlexTheme = ({ direction, ...props }: FlexType) => {
    const FLEX_VARIANTS = {
        horizontal: {
            flexDirection: props?.reverse ? 'row-reverse' : 'row',
            align: props?.align,
            rowGap: props?.crossGap,
            columnGap: props?.gap,
        },
        vertical: {
            flexDirection: props?.reverse ? 'column-reverse' : 'column',
            align: props?.align,
            rowGap: props?.gap,
            columnGap: props?.crossGap,
        },
    }

    return {
        display: props?.display ?? 'flex',
        flexDirection: !!direction && FLEX_VARIANTS[direction].flexDirection,
        alignItems: !!direction && FLEX_VARIANTS[direction].align,
        justifyContent: props?.crossAlign,
        alignContent: props?.alignContent,
        alignSelf: props?.alignSelf,
        flexWrap: props?.wrap,
        flexBasis: props?.basis,
        flexGrow: props?.grow,
        flexShrink: props?.shrink,
        rowGap: !!direction && FLEX_VARIANTS[direction].rowGap,
        columnGap: !!direction && FLEX_VARIANTS[direction].columnGap,
        order: props.order,
    } as Interpolation<Theme>
}

export const flexKeys = [
    'display',
    'flex',
    'direction',
    'reverse',
    'align',
    'crossAlign',
    'alignContent',
    'alignSelf',
    'wrap',
    'basis',
    'grow',
    'shrink',
    'gap',
    'crossGap',
    'order',
]
