import { Interpolation, Theme } from '@emotion/react'
import { UITypes } from './_UIKit'
import { Layer } from './layer'
import { Flex } from './flex'
import { Border } from './border'
import { LayoutSize } from './layoutSize'
import { Margin, Padding } from './space'
import { Scroll } from './scroll'

//
export type MediaQueryType = {
    mediaQuery?: {
        s1440?: UITypes
        s1280?: UITypes
        s1080?: UITypes
        s768?: UITypes
        s600?: UITypes
        s428?: UITypes
    }
}

const screenSize = [1440, 1280, 1080, 768, 600, 428]
const MQ = screenSize.map((bp) => `@media (max-width: ${bp}px)`)

export const MediaQuery = (props: MediaQueryType) => {
    const mediaQueries = {
        ...(props.mediaQuery?.s1440 && {
            [MQ[0]]: {
                ...(LayoutSize(props.mediaQuery.s1440) as any),
                ...(Layer(props.mediaQuery.s1440) as any),
                ...(Flex(props.mediaQuery.s1440) as any),
                ...(Padding(props.mediaQuery.s1440) as any),
                ...(Margin(props.mediaQuery.s1440) as any),
                ...(Border(props.mediaQuery.s1440) as any),
                ...(Scroll(props.mediaQuery.s1440) as any),
            },
        }),
        ...(props.mediaQuery?.s1280 && {
            [MQ[1]]: {
                ...(LayoutSize(props.mediaQuery.s1280) as any),
                ...(Layer(props.mediaQuery.s1280) as any),
                ...(Flex(props.mediaQuery.s1280) as any),
                ...(Padding(props.mediaQuery.s1280) as any),
                ...(Margin(props.mediaQuery.s1280) as any),
                ...(Border(props.mediaQuery.s1280) as any),
                ...(Scroll(props.mediaQuery.s1280) as any),
            },
        }),
        ...(props.mediaQuery?.s1080 && {
            [MQ[2]]: {
                ...(LayoutSize(props.mediaQuery.s1080) as any),
                ...(Layer(props.mediaQuery.s1080) as any),
                ...(Flex(props.mediaQuery.s1080) as any),
                ...(Padding(props.mediaQuery.s1080) as any),
                ...(Margin(props.mediaQuery.s1080) as any),
                ...(Border(props.mediaQuery.s1080) as any),
                ...(Scroll(props.mediaQuery.s1080) as any),
            },
        }),
        ...(props.mediaQuery?.s768 && {
            [MQ[3]]: {
                ...(LayoutSize(props.mediaQuery.s768) as any),
                ...(Layer(props.mediaQuery.s768) as any),
                ...(Flex(props.mediaQuery.s768) as any),
                ...(Padding(props.mediaQuery.s768) as any),
                ...(Margin(props.mediaQuery.s768) as any),
                ...(Border(props.mediaQuery.s768) as any),
                ...(Scroll(props.mediaQuery.s768) as any),
            },
        }),
        ...(props.mediaQuery?.s600 && {
            [MQ[4]]: {
                ...(LayoutSize(props.mediaQuery.s600) as any),
                ...(Layer(props.mediaQuery.s600) as any),
                ...(Flex(props.mediaQuery.s600) as any),
                ...(Padding(props.mediaQuery.s600) as any),
                ...(Margin(props.mediaQuery.s600) as any),
                ...(Border(props.mediaQuery.s600) as any),
                ...(Scroll(props.mediaQuery.s600) as any),
            },
        }),
        ...(props.mediaQuery?.s428 && {
            [MQ[5]]: {
                ...(LayoutSize(props.mediaQuery.s428) as any),
                ...(Layer(props.mediaQuery.s428) as any),
                ...(Flex(props.mediaQuery.s428) as any),
                ...(Padding(props.mediaQuery.s428) as any),
                ...(Margin(props.mediaQuery.s428) as any),
                ...(Border(props.mediaQuery.s428) as any),
                ...(Scroll(props.mediaQuery.s428) as any),
            },
        }),
    }

    return mediaQueries as Interpolation<Theme>
}

export const mediaQueryKeys = ['mediaQuery']
