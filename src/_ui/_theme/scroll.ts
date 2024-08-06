import { Interpolation, Theme } from '@emotion/react'

//
export type ScrollType = {
    scroll?: {
        x?: 'visible' | 'auto' | 'scroll' | 'hidden'
        y?: 'visible' | 'auto' | 'scroll' | 'hidden'
        type?: 'visible' | 'auto' | 'scroll' | 'hidden'
        bar?: boolean
    }
}

export const ScrollTheme = (props: ScrollType) => {
    return {
        overflowX: props?.scroll?.x,
        overflowY: props?.scroll?.y,

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
    } as Interpolation<Theme>
}

export const scollKeys = ['scroll']
