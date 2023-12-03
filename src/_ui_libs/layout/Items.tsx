/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import {
  FlexTheme,
  MarignTheme,
  PaddingTheme,
  ScrollTheme,
  StyleTheme,
  ViewportTheme,
} from '@/_ui_libs/_theme';
import {
  FlexTypes,
  MarginTypes,
  PaddingTypes,
  ScrollTypes,
  StyleslTypes,
  ViewportTypes,
} from '../_types';

interface ItemsProps
  extends HTMLAttributes<HTMLUListElement>,
    Omit<ViewportTypes, 'position'>,
    FlexTypes,
    PaddingTypes,
    MarginTypes,
    Pick<StyleslTypes, 'backgroundColor' | 'borderRadius'>,
    ScrollTypes {
  children: ReactNode;
}

interface ItemProps
  extends HTMLAttributes<HTMLLIElement>,
    Omit<ViewportTypes, 'position'>,
    FlexTypes,
    PaddingTypes,
    MarginTypes,
    StyleslTypes,
    ScrollTypes {
  children: ReactNode;
}

// -----------------------------------
// -------------- Items --------------
// -----------------------------------
export const Items = forwardRef<HTMLUListElement, ItemsProps>(
  (
    {
      children,

      //
      zIndex,
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
      padding = { all: 0 },
      margin = { all: 0 },
      backgroundColor,
      borderRadius,
      scroll,
      ...props
    },
    ref?: ForwardedRef<HTMLUListElement>,
  ) => {
    return (
      <ul
        ref={ref}
        css={[
          ViewportTheme({ zIndex, width, height, minWidth, maxWidth, minHeight, maxHeight }),
          FlexTheme({
            flex,
            direction,
            align: align ? align : direction === 'horizontal' ? 'stretch' : 'center',
            crossAlign,
            wrap,
            gap,
            crossGap,
          }),
          PaddingTheme({ padding }),
          MarignTheme({ margin }),
          StyleTheme({ backgroundColor, borderRadius }),
          ScrollTheme({ scroll }),
        ]}
        {...props}
      >
        {children}
      </ul>
    );
  },
);

// ----------------------------------
// -------------- Item --------------
// ----------------------------------
export const Item = forwardRef<HTMLLIElement, ItemProps>(
  (
    {
      children,
      //
      zIndex,
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
      padding = { all: 0 },
      margin = { all: 0 },
      //
      border,
      backgroundColor,
      borderRadius,
      boxShadow,
      cursor,
      scroll,
      ...props
    },
    ref?: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <li
        ref={ref}
        css={[
          ViewportTheme({ zIndex, width, height, minWidth, maxWidth, minHeight, maxHeight }),
          FlexTheme({ flex, direction, align, crossAlign, wrap, gap, crossGap }),
          PaddingTheme({ padding }),
          MarignTheme({ margin }),
          StyleTheme({ backgroundColor, border, borderRadius, boxShadow, cursor }),
          ScrollTheme({ scroll }),
        ]}
        {...props}
      >
        {children}
      </li>
    );
  },
);
