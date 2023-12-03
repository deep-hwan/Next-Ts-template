/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { FlexTheme, MarignTheme, PaddingTheme, TypographyTheme } from '@/_ui_libs/_theme';
import { MarginTypes, PaddingTypes, TypographyTypes } from '../_types';

interface Props
  extends HTMLAttributes<HTMLElement>,
    PaddingTypes,
    MarginTypes,
    Omit<TypographyTypes, 'lineHeight'> {
  children: ReactNode;
}

export const TxtSpan = forwardRef(
  (
    {
      children,
      size = 13,
      txtAlign,
      weight = 'normal',
      color = '#9a9a9a',
      whiteSpace = 'nowrap',
      //
      padding = { all: 0 },
      margin = { all: 0 },
      ...props
    }: Props,
    ref?: ForwardedRef<HTMLSpanElement>,
  ) => {
    return (
      <span
        ref={ref}
        css={[
          TypographyTheme({ size, weight, color, whiteSpace }),
          PaddingTheme({ padding }),
          MarignTheme({ margin }),
          FlexTheme({ align: 'center', direction: 'horizontal', gap: 4 }),
        ]}
        {...props}
      >
        {children}
      </span>
    );
  },
);
