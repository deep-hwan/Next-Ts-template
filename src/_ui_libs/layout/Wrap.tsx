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

interface Props extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

type WrapProps = Props &
  ViewportTypes &
  FlexTypes &
  PaddingTypes &
  MarginTypes &
  StyleslTypes &
  ScrollTypes;

export const Wrap = forwardRef<HTMLDivElement, WrapProps>(
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
      align,
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
      cursor,
      transitionTime,
      scroll,
      ...props
    },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const viewProps = { width, height, minWidth, maxWidth, minHeight, maxHeight, position, zIndex };
    const flexProps = { flex, direction, align, crossAlign, wrap, gap, crossGap };
    const stylesProps = {
      backgroundColor,
      border,
      borderRadius,
      boxShadow,
      transitionTime,
      cursor,
    };

    return (
      <div
        ref={ref}
        css={[
          ViewportTheme(viewProps),
          FlexTheme(flexProps),
          PaddingTheme({ padding }),
          MarignTheme({ margin }),
          StyleTheme(stylesProps),
          ScrollTheme({ scroll }),
        ]}
        {...props}
      >
        {children}
      </div>
    );
  },
);
