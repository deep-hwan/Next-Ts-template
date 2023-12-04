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
  extends HTMLAttributes<HTMLDivElement>,
    ViewportTypes,
    FlexTypes,
    MarginTypes,
    PaddingTypes,
    Omit<StyleslTypes, 'cursor'>,
    ScrollTypes {
  children?: ReactNode;
}

export const Column = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
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
      align = 'start',
      crossAlign,
      wrap = 'nowrap',
      gap = 0,
      crossGap = 0,
      //
      padding,
      margin,
      //
      backgroundColor,
      borderRadius,
      boxShadow,
      border,
      scroll,
      transitionTime,
      ...props
    },
    ref: ForwardedRef<HTMLDivElement>,
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
          StyleTheme({ backgroundColor, border, borderRadius, boxShadow, transitionTime }),
          ScrollTheme({ scroll }),
        ]}
        {...props}
      >
        {children}
      </div>
    );
  },
);
