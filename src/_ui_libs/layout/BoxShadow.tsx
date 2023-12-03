/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import {
  FlexTypes,
  MarginTypes,
  PaddingTypes,
  ScrollTypes,
  StyleslTypes,
  ViewportTypes,
} from '../_types';
import {
  FlexTheme,
  MarignTheme,
  PaddingTheme,
  ScrollTheme,
  StyleTheme,
  ViewportTheme,
} from '../_theme';

interface Props
  extends HTMLAttributes<HTMLElement>,
    ViewportTypes,
    FlexTypes,
    MarginTypes,
    PaddingTypes,
    Omit<StyleslTypes, 'cursor'>,
    ScrollTypes {
  children?: ReactNode;
}

// -------------- BoxShadow (부모3 : 그림자타입) -----------------
// -----------------------------------------------------------
export const BoxShadow = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      //
      zIndex,
      position,
      width = '100%',
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      //
      flex,
      direction = 'vertical',
      align,
      crossAlign,
      wrap = 'nowrap',
      gap = 0,
      crossGap = 0,
      //
      padding,
      margin,
      //
      border,
      backgroundColor = '#ffffff',
      borderRadius = 18,
      boxShadow = {
        x: 0,
        y: 2,
        blur: 36,
        color: 'rgba(0,0,0,0.075)',
      },
      scroll,
      ...props
    },
    ref?: ForwardedRef<HTMLDivElement>,
  ) => {
    const viewProps = { width, height, minWidth, maxWidth, minHeight, maxHeight, position, zIndex };

    return (
      <div
        ref={ref}
        css={[
          ViewportTheme(viewProps),
          FlexTheme({ flex, direction, align, crossAlign, wrap, gap, crossGap }),
          PaddingTheme({ padding }),
          MarignTheme({ margin }),
          StyleTheme({ backgroundColor, border, borderRadius, boxShadow }),
          ScrollTheme({ scroll }),
        ]}
        {...props}
      >
        {children}
      </div>
    );
  },
);
