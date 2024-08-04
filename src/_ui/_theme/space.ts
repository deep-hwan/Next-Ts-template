import { Interpolation, Theme } from '@emotion/react'

//
export type SpaceType = {
    padding?: {
        all?: number | string
        horizontal?: number | string
        vertical?: number | string
        top?: number | string
        bottom?: number | string
        left?: number | string
        right?: number | string
    }

    margin?: {
        all?: number | string
        horizontal?: number | string
        vertical?: number | string
        top?: number | string
        bottom?: number | string
        left?: number | string
        right?: number | string
    }
}

//
export const Padding = (props: SpaceType) => {
    return {
        paddingTop: props?.padding?.all || props?.padding?.vertical || props?.padding?.top,
        paddingBottom: props?.padding?.all || props?.padding?.vertical || props?.padding?.bottom,
        paddingRight: props?.padding?.all || props?.padding?.horizontal || props?.padding?.right,
        paddingLeft: props?.padding?.all || props?.padding?.horizontal || props?.padding?.left,
    } as Interpolation<Theme>
}

//
export const Margin = (props: SpaceType) => {
    return {
        marginTop: props?.margin?.all || props?.margin?.vertical || props?.margin?.top,
        marginBottom: props?.margin?.all || props?.margin?.vertical || props?.margin?.bottom,
        marginRight: props?.margin?.all || props?.margin?.horizontal || props?.margin?.right,
        marginLeft: props?.margin?.all || props?.margin?.horizontal || props?.margin?.left,
    } as Interpolation<Theme>
}

export const spaceKeys = ['padding', 'margin']
