import { css, Interpolation, Theme } from '@emotion/react'

export const styleSheet = (className: string, css: Interpolation<Theme> = {}) => ({
    className,
    css,
})
