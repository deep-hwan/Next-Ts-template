/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { css } from '@emotion/react';
import {
  FlexTheme,
  MarignTheme,
  PaddingTheme,
  ScrollTheme,
  StyleTheme,
  ViewportTheme,
} from '@/_ui_libs/_theme';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  zIndex?: number;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'center' | 'stretch' | 'end';
  crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  crossGap?: number;
  width?: 'auto' | '100%';
  height?: 'auto' | '100%';
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  backgroundColor?: string;
  borderRadius?: number | string;
  imgSrc: string;
  boxShadow?: {
    x?: number;
    y?: number;
    blur?: number;
    color?: string;
  };
  border?: {
    solid: number;
    position?: 'left' | 'right' | 'top' | 'bottom';
    color?: string;
  };
  padding?: {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  margin?: {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  scroll?: {
    type?: 'visible' | 'auto' | 'scroll' | 'hidden';
    bar?: boolean;
  };

  position?: {
    type?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    top?: number | string;
    bottom?: number | string;
    right?: number | string;
    left?: number | string;
  };
}

// -----------------------------------------
// -------------- Wrap (부모1) --------------
// -----------------------------------------
export const BackgroundImgBox = forwardRef(function Wrap(
  {
    children,
    zIndex,
    position,
    direction = 'vertical',
    align,
    crossAlign,
    wrap = 'nowrap',
    gap = 0,
    crossGap = 0,
    width = '100%',
    height,
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    border,
    backgroundColor,
    borderRadius,
    boxShadow,
    padding,
    margin,
    scroll,
    imgSrc,
    ...props
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      css={[
        ViewportTheme({
          width,
          height,
          minWidth,
          maxWidth,
          minHeight,
          maxHeight,
          position,
          zIndex,
        }),
        FlexTheme({ direction, align, crossAlign, wrap, gap, crossGap }),
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        StyleTheme({ backgroundColor, border, borderRadius, boxShadow }),
        ScrollTheme({ scroll }),
        {
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },
      ]}
      {...props}
    >
      {children}
    </div>
  );
});
