/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react'

import { FlexTheme, FlexType } from '../../_themes/flex'
import { ViewportTypes } from '../../_themes/viewport'

interface Props extends HTMLAttributes<HTMLElement>, ViewportTypes, FlexType {
    children: ReactNode
    variant?: 'light' | 'dark'
    backgroundColor?: string
    safeArea?: { top: boolean; botom: boolean; left: boolean; right: boolean }
}

const Section = forwardRef((props: Props, ref: ForwardedRef<HTMLElement>) => {
    const {
        zIndex,
        width = '100%',
        minWidth,
        maxWidth,
        height = '100%',
        minHeight,
        maxHeight,
        flex,
        direction = 'vertical',
        align = 'center',
        crossAlign,
        wrap,
        gap,
        crossGap,
        backgroundColor,
        safeArea = { top: false, botom: false, left: false, right: false },
        ...rest
    } = props

    const FlexThemes = FlexTheme({
        direction,
        flex: flex ?? '1 auto',
        align,
        crossAlign,
        wrap,
        gap,
        crossGap,
    })

    return (
        <section
            ref={ref}
            css={[
                {
                    ...FlexThemes,
                    zIndex,
                    width,
                    height,
                    flex: 1,
                    minWidth,
                    maxWidth,
                    minHeight,
                    maxHeight,
                    backgroundColor,
                    paddingTop: safeArea.top ? 'env(safe-area-inset-top)' : 0,
                    paddingBottom: safeArea.botom ? 'env(safe-area-inset-bottom)' : 0,
                    paddingRight: safeArea.right ? 'env(safe-area-inset-right)' : 0,
                    paddingLeft: safeArea.left ? 'env(safe-area-inset-left)' : 0,
                },
            ]}
            {...rest}
        >
            {rest.children}
        </section>
    )
})

export { Section }
