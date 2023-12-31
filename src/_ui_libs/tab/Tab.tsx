/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import {
  FlexTheme,
  MarignTheme,
  PaddingTheme,
  StyleTheme,
  TypographyTheme,
  ViewportTheme,
} from '@/_ui_libs/_theme';
import {
  FlexTypes,
  MarginTypes,
  PaddingTypes,
  StyleslTypes,
  TypographyTypes,
  ViewportTypes,
} from '../_types';

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ViewportTypes, 'position' | 'zIndex'>,
    MarginTypes,
    PaddingTypes,
    Pick<FlexTypes, 'gap'>,
    Pick<TypographyTypes, 'weight'>,
    Pick<StyleslTypes, 'borderRadius' | 'boxShadow' | 'border' | 'transitionTime'> {
  children: ReactNode;
  variant?: 'border' | 'box';
  type?: 'button' | 'submit';
  txtSize?: number | string;
  colors?: { button?: string; txt?: string };
}

type ThemeStyleProps = Omit<Props, 'children'>;

export const Tab = forwardRef(function Tab(
  {
    children,
    variant = 'box',
    type = 'button',
    width = 'auto',
    maxWidth,
    minWidth,
    txtSize = 14,
    weight,
    gap = 8,
    colors = {
      button: variant === 'box' ? '#f5f7fc' : '#ffffff',
      txt: variant === 'box' ? '#797979' : '#999999',
    },
    border = {
      solid: variant === 'border' ? 1 : 0,
      color: variant === 'border' ? '#e2e2e2' : 'transparent',
    },
    borderRadius = 15,
    boxShadow,
    padding = { all: 12 },
    margin,
    transitionTime,
    ...props
  }: Props,
  ref?: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      type={type}
      ref={ref}
      css={[
        getThemeStyles({ variant }),
        TypographyTheme({ size: txtSize, color: colors.txt, weight, whiteSpace: 'nowrap' }),
        ViewportTheme({ width, maxWidth, minWidth }),
        FlexTheme({ direction: 'horizontal', align: 'center', crossAlign: 'center', gap }),
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        StyleTheme({
          backgroundColor: colors?.button,
          border,
          borderRadius,
          boxShadow,
          transitionTime,
        }),
      ]}
      {...props}
    >
      {children}
    </button>
  );
});

// ------------------------------------
// -------------- Styles --------------
// ------------------------------------
function getThemeStyles({ variant }: ThemeStyleProps): Interpolation<Theme> {
  return {
    '&:hover': {
      opacity: variant === 'box' ? '0.85' : undefined,
      backgroundColor: variant === 'border' ? '#fafafa' : undefined,
    },
    '&:disabled': {
      opacity: variant === 'box' ? '0.55' : undefined,
      backgroundColor: variant === 'border' ? '#fafafa' : undefined,
      color: variant === 'border' ? '#aaaaaa' : undefined,
      cursor: 'default',
    },
  };
}
