/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { FlexTheme, MarignTheme, PaddingTheme, StyleTheme, ViewportTheme } from '@/_ui_libs/_theme';
import { FlexTypes, MarginTypes, PaddingTypes, StyleslTypes, ViewportTypes } from '../_types';

interface Props
  extends HTMLAttributes<HTMLElement>,
    Omit<ViewportTypes, 'position'>,
    FlexTypes,
    MarginTypes,
    PaddingTypes,
    Omit<StyleslTypes, 'cursor'> {
  children?: ReactNode;
}

export const Form = forwardRef<HTMLFormElement, Props>(
  (
    {
      children,
      //
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
      backgroundColor,
      borderRadius,
      boxShadow,
      transitionTime,
      ...props
    },
    ref?: ForwardedRef<HTMLFormElement>,
  ) => {
    return (
      <form
        ref={ref}
        css={[
          ViewportTheme({ width, height, minWidth, maxWidth, minHeight, maxHeight }),
          FlexTheme({ flex, direction, align, crossAlign, wrap, gap, crossGap }),
          PaddingTheme({ padding }),
          MarignTheme({ margin }),
          StyleTheme({ backgroundColor, border, borderRadius, boxShadow, transitionTime }),
        ]}
        {...props}
      >
        {children}
      </form>
    );
  },
);
