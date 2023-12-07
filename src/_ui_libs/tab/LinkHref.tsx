import Link from 'next/link';
import React, { AnchorHTMLAttributes, ReactNode } from 'react';
import { MarignTheme, PaddingTheme, StyleTheme, TypographyTheme } from '../_theme';
import { MarginTypes, PaddingTypes, StyleslTypes, TypographyTypes } from '../_types';

interface Props
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    PaddingTypes,
    MarginTypes,
    Pick<StyleslTypes, 'borderRadius' | 'boxShadow' | 'border'>,
    Pick<TypographyTypes, 'weight'> {
  children: ReactNode;
  a: any;
  blank?: boolean;
  txtSize?: number | string;
  colors?: { button?: string; txt?: string };
}

export function LinkHref({
  a,
  blank,
  children,
  //
  txtSize = 15,
  weight = 'normal',
  colors = { button: '', txt: '#666' },
  //
  borderRadius,
  border,
  boxShadow,
  //
  margin,
  padding,
  ...props
}: Props) {
  return (
    <Link
      href={a}
      target={blank ? '_blank' : ''}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        TypographyTheme({ size: txtSize, weight: weight, color: colors.txt }),
        StyleTheme({ backgroundColor: colors?.button, border, borderRadius, boxShadow }),
      ]}
      {...props}
    >
      {children}
    </Link>
  );
}
