import { Interpolation, Theme } from '@emotion/react'
import { UITypes } from './_UIKit'
import { LayerTheme } from './layer'
import { FlexTheme } from './flex'
import { BorderTheme } from './border'
import { LayoutSizeTheme } from './layoutSize'
import { MarginTheme, PaddingTheme } from './space'
import { ScrollTheme } from './scroll'
import { ActiveTheme, HoverTheme } from './hoverActive'
import { TabTypoTheme } from './tab'

type ExtendUITypes = Omit<UITypes, 'mediaQuery' | 'children'>

//
export type MediaQueryType = {
    mediaQuery?: {
        s1440?: ExtendUITypes
        s1280?: ExtendUITypes
        s1080?: ExtendUITypes
        s768?: ExtendUITypes
        s600?: ExtendUITypes
        s428?: ExtendUITypes
    }
}

const screenSize = [1440, 1280, 1080, 768, 600, 428]
const MQ = screenSize.map((bp) => `@media (max-width: ${bp}px)`)

export const MediaQuery = (props: MediaQueryType) => {
    const mediaQueries = {
        ...(props.mediaQuery?.s1440 && {
            [MQ[0]]: {
                ...(LayoutSizeTheme(props.mediaQuery.s1440) as any),
                ...(LayerTheme(props.mediaQuery.s1440) as any),
                ...(FlexTheme(props.mediaQuery.s1440) as any),
                ...(PaddingTheme(props.mediaQuery.s1440) as any),
                ...(MarginTheme(props.mediaQuery.s1440) as any),
                ...(BorderTheme(props.mediaQuery.s1440) as any),
                ...(ScrollTheme(props.mediaQuery.s1440) as any),
                ...(ActiveTheme(props.mediaQuery.s1440) as any),
                ...(HoverTheme(props.mediaQuery.s1440) as any),
                ...TabTypoTheme(props.mediaQuery.s1440 as any),
            },
        }),
        ...(props.mediaQuery?.s1280 && {
            [MQ[1]]: {
                ...(LayoutSizeTheme(props.mediaQuery.s1280) as any),
                ...(LayerTheme(props.mediaQuery.s1280) as any),
                ...(FlexTheme(props.mediaQuery.s1280) as any),
                ...(PaddingTheme(props.mediaQuery.s1280) as any),
                ...(MarginTheme(props.mediaQuery.s1280) as any),
                ...(BorderTheme(props.mediaQuery.s1280) as any),
                ...(ScrollTheme(props.mediaQuery.s1280) as any),
                ...(ActiveTheme(props.mediaQuery.s1280) as any),
                ...(HoverTheme(props.mediaQuery.s1280) as any),
                ...TabTypoTheme(props.mediaQuery.s1280 as any),
            },
        }),
        ...(props.mediaQuery?.s1080 && {
            [MQ[2]]: {
                ...(LayoutSizeTheme(props.mediaQuery.s1080) as any),
                ...(LayerTheme(props.mediaQuery.s1080) as any),
                ...(FlexTheme(props.mediaQuery.s1080) as any),
                ...(PaddingTheme(props.mediaQuery.s1080) as any),
                ...(MarginTheme(props.mediaQuery.s1080) as any),
                ...(BorderTheme(props.mediaQuery.s1080) as any),
                ...(ScrollTheme(props.mediaQuery.s1080) as any),
                ...(ActiveTheme(props.mediaQuery.s1080) as any),
                ...(HoverTheme(props.mediaQuery.s1080) as any),
                ...TabTypoTheme(props.mediaQuery.s1080 as any),
            },
        }),
        ...(props.mediaQuery?.s768 && {
            [MQ[3]]: {
                ...(LayoutSizeTheme(props.mediaQuery.s768) as any),
                ...(LayerTheme(props.mediaQuery.s768) as any),
                ...(FlexTheme(props.mediaQuery.s768) as any),
                ...(PaddingTheme(props.mediaQuery.s768) as any),
                ...(MarginTheme(props.mediaQuery.s768) as any),
                ...(BorderTheme(props.mediaQuery.s768) as any),
                ...(ScrollTheme(props.mediaQuery.s768) as any),
                ...(ActiveTheme(props.mediaQuery.s768) as any),
                ...(HoverTheme(props.mediaQuery.s768) as any),
                ...TabTypoTheme(props.mediaQuery.s768 as any),
            },
        }),
        ...(props.mediaQuery?.s600 && {
            [MQ[4]]: {
                ...(LayoutSizeTheme(props.mediaQuery.s600) as any),
                ...(LayerTheme(props.mediaQuery.s600) as any),
                ...(FlexTheme(props.mediaQuery.s600) as any),
                ...(PaddingTheme(props.mediaQuery.s600) as any),
                ...(MarginTheme(props.mediaQuery.s600) as any),
                ...(BorderTheme(props.mediaQuery.s600) as any),
                ...(ScrollTheme(props.mediaQuery.s600) as any),
                ...(ActiveTheme(props.mediaQuery.s600) as any),
                ...(HoverTheme(props.mediaQuery.s600) as any),
                ...TabTypoTheme(props.mediaQuery.s600 as any),
            },
        }),
        ...(props.mediaQuery?.s428 && {
            [MQ[5]]: {
                ...(LayoutSizeTheme(props.mediaQuery.s428) as any),
                ...(LayerTheme(props.mediaQuery.s428) as any),
                ...(FlexTheme(props.mediaQuery.s428) as any),
                ...(PaddingTheme(props.mediaQuery.s428) as any),
                ...(MarginTheme(props.mediaQuery.s428) as any),
                ...(BorderTheme(props.mediaQuery.s428) as any),
                ...(ScrollTheme(props.mediaQuery.s428) as any),
                ...(ActiveTheme(props.mediaQuery.s428) as any),
                ...(HoverTheme(props.mediaQuery.s428) as any),
                ...TabTypoTheme(props.mediaQuery.s428 as any),
            },
        }),
    }

    return mediaQueries as Interpolation<Theme>
}

export const mediaQueryKeys = ['mediaQuery']
