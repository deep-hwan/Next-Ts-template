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
    Omit<ViewportTypes, 'position' | 'zIndex'>,
    FlexTypes,
    PaddingTypes,
    MarginTypes,
    ScrollTypes,
    Pick<StyleslTypes, 'backgroundColor' | 'transitionTime'> {
  children?: ReactNode;
}

export const Container = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      width = '100%',
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      flex,
      direction = 'vertical',
      align,
      crossAlign,
      wrap = 'nowrap',
      gap = 0,
      crossGap = 0,
      padding,
      margin,
      backgroundColor,
      transitionTime,
      scroll,
      ...props
    },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        css={[
          ViewportTheme({ width, height, minWidth, maxWidth, minHeight, maxHeight }),
          FlexTheme({ flex, direction, align, crossAlign, wrap, gap, crossGap }),
          PaddingTheme({ padding }),
          MarignTheme({ margin }),
          StyleTheme({ backgroundColor, transitionTime }),
          ScrollTheme({ scroll }),
        ]}
        {...props}
      >
        {children}
      </div>
    );
  },
);
