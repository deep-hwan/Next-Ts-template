/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import {
  MarignTheme,
  PaddingTheme,
  FlexTheme,
  ViewportTheme,
  TypographyTheme,
  StyleTheme,
} from '@/_ui_libs/_theme';
import { MarginTypes, PaddingTypes, StyleslTypes, ViewportTypes } from '../_types';
import { MQ, colors } from '@/libs/themes/_index';
import { Wrap } from '../_index';

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    Omit<ViewportTypes, 'position' | 'zIndex'>,
    PaddingTypes,
    MarginTypes,
    Pick<StyleslTypes, 'borderRadius' | 'boxShadow' | 'border'> {
  children: ReactNode;
  bottomFixed?: boolean;
  txtSize?: number | string;
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  colors?: { button?: string; txt?: string };
}

const color = colors;
export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      bottomFixed,
      //
      width = '100%',
      maxWidth,
      minWidth,
      height = 'auto',
      minHeight = 56,
      maxHeight,
      txtSize = 15,
      //
      weight = 'normal',
      colors = { button: color.keyColor, txt: '#f0f0f0' },
      //
      padding,
      margin,
      //
      borderRadius = 18,
      border,
      boxShadow,
      ...props
    },
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    const typographyProps = { size: txtSize, color: colors.txt, weight };
    const tabProps = { backgroundColor: colors?.button, border, borderRadius, boxShadow };
    const buttonPropsArray = [
      ViewportTheme({ width, maxWidth, minWidth, minHeight }),
      FlexTheme({ align: 'center', crossAlign: 'center' }),
      PaddingTheme({ padding }),
      MarignTheme({ margin }),
      TypographyTheme(typographyProps),
      StyleTheme(tabProps),
      { '&:hover': { opacity: 0.9 }, '&:disabled': { opacity: 0.25 } },
    ];

    if (bottomFixed) {
      return (
        <Wrap height="100%" minHeight={76} maxHeight={76}>
          <Wrap
            align="center"
            position={{ type: 'fixed', bottom: 0, left: 0, right: 0 }}
            backgroundColor="#fff"
            css={[
              PaddingTheme({ safeArea: true, padding: { bottom: 20, horizontal: 20 } }),
              { [MQ[2]]: { paddingBottom: `max(10px, env(safe-area-inset-bottom))` } },
            ]}
          >
            <button ref={ref} css={buttonPropsArray} {...props}>
              {children}
            </button>
          </Wrap>
        </Wrap>
      );
    } else {
      return (
        <button ref={ref} css={buttonPropsArray} {...props}>
          {children}
        </button>
      );
    }
  },
);
