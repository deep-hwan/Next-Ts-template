/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { FlexTypes, MarginTypes, ScrollTypes, StyleslTypes, ViewportTypes } from '../_types';
import {
  FlexTheme,
  MarignTheme,
  PaddingTheme,
  ScrollTheme,
  StyleTheme,
  ViewportTheme,
} from '@/_ui_libs/_theme';

interface Props
  extends HTMLAttributes<HTMLElement>,
    ViewportTypes,
    FlexTypes,
    MarginTypes,
    ScrollTypes,
    Omit<StyleslTypes, 'cursor'> {
  children?: ReactNode;
  safeArea?: boolean;
  all?: number;
  horizontal?: number;
  vertical?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export const Padding = forwardRef<HTMLDivElement, Props>(
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
      safeArea,
      all,
      horizontal,
      vertical,
      top,
      bottom,
      left,
      right,
      margin,
      //
      border,
      backgroundColor,
      borderRadius,
      boxShadow,
      scroll,
      ...props
    },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const padding = { all, horizontal, vertical, top, bottom, left, right };
    const viewProps = { width, height, minWidth, maxWidth, minHeight, maxHeight, position, zIndex };
    return (
      <div
        ref={ref}
        css={[
          ViewportTheme(viewProps),
          PaddingTheme({ safeArea, padding }),
          MarignTheme({ margin }),
          FlexTheme({ flex, direction, align, crossAlign, wrap, gap, crossGap }),
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
