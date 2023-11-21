import Link from 'next/link';
import React, { AnchorHTMLAttributes, ReactNode } from 'react';
import { MarignTheme, PaddingTheme, TabTheme, TypographyTheme } from '../_theme';
import { colors, borderRadius } from '@/libs/themes/_index';

//
interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  a: any;
  txtSize?: number | string;
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  colors?: { button?: string; txt?: string };
  borderRadius?: number | string;
  boxShadow?: {
    x?: number;
    y?: number;
    blur?: number;
    color?: string;
  };
  border?: {
    solid: number;
    color?: string;
  };
  padding?: {
    all?: number | string;
    horizontal?: number | string;
    vertical?: number | string;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
  margin?: {
    all?: number | string;
    horizontal?: number | string;
    vertical?: number | string;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
}

//
export function LinkHref({
  a,
  children,
  txtSize = 15,
  weight = 'normal',
  padding,
  colors = { button: '', txt: '#555' },
  borderRadius,
  border,
  boxShadow,
  margin,
  ...props
}: Props) {
  return (
    <Link
      href={a}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        TypographyTheme({ size: txtSize, weight: weight, color: colors.txt }),
        TabTheme({
          backgroundColor: colors?.button,
          border,
          borderRadius,
          boxShadow,
        }),
      ]}
      {...props}
    >
      {children}
    </Link>
  );
}
