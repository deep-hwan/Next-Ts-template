export interface FlexType {
    flex?: number | string
    direction?: 'horizontal' | 'vertical' | 'horizontal-reverse' | 'vertical-reverse'
    align?: 'start' | 'end' | 'center' | 'stretch'
    crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around'
    alignContent?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
    basis?: number | string
    grow?: number
    shrink?: number
    gap?: number
    crossGap?: number
}

export const FlexTheme = ({
    flex,
    direction = 'vertical',
    align,
    crossAlign,
    gap,
    crossGap,
    wrap = 'nowrap',
    basis,
    grow,
    shrink,
}: FlexType) => {
    const FLEX_VARIANTS = {
        horizontal: {
            flexDirection: 'row' as const,
            align: align ?? 'stretch',
            rowGap: crossGap,
            columnGap: gap,
        },
        vertical: {
            flexDirection: 'column' as const,
            align: align ?? 'start',
            rowGap: gap,
            columnGap: crossGap,
        },
        'horizontal-reverse': {
            flexDirection: 'row' as const,
            align: align ?? 'stretch',
            rowGap: crossGap,
            columnGap: gap,
        },
        'vertical-reverse': {
            flexDirection: 'column' as const,
            align: align ?? 'start',
            rowGap: gap,
            columnGap: crossGap,
        },
    }

    return {
        display: 'flex',
        flex: flex,
        justifyContent: crossAlign,
        flexDirection: FLEX_VARIANTS[direction].flexDirection ?? 'column',
        alignItems: FLEX_VARIANTS[direction].align ?? 'start',
        rowGap: FLEX_VARIANTS[direction].rowGap ?? 0,
        columnGap: FLEX_VARIANTS[direction].columnGap ?? 0,
        flexWrap: wrap ?? 'nowrap',
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
    }
}
