/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, ReactNode, forwardRef, HTMLAttributes } from 'react';
import { PaddingTheme, MarignTheme, FlexTheme, TypographyTheme, ViewportTheme } from '../_theme';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  ellipsis?: { ellipsis?: boolean; line?: number };
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'strong' | 'p';
  maxWidth?: number | string;
  txtAlign?: 'start' | 'end' | 'center';
  direction?: 'horizontal' | 'vertical';
  gap?: number;
  color?: string;
  size?: number | string;
  lineHeight?: number;
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
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

// -----------------------------------------------------
// -------------- Txt [h1~6 / strong / p] --------------
// -----------------------------------------------------
export const Txt = forwardRef(function Txt(
  {
    children,
    ellipsis = { ellipsis: false, line: 1 },
    as = 'p',
    maxWidth,
    direction = 'horizontal',
    gap = 4,
    size,
    weight,
    txtAlign,
    whiteSpace = 'pre-line',
    color = '#333333',
    lineHeight = 1.48,
    padding = { all: 0 },
    margin = { all: 0 },
    ...Props
  }: Props,
  ref?: ForwardedRef<HTMLDivElement>,
) {
  return (
    <>
      {as === 'h1' && (
        <h1
          ref={ref}
          css={[
            PaddingTheme({ padding }),
            MarignTheme({ margin }),
            FlexTheme({ direction, gap, align: 'center' }),
            TypographyTheme({
              size: size ? size : 52,
              weight: weight ? weight : 'bold',
              color,
              txtAlign,
              whiteSpace,
              lineHeight,
            }),
          ]}
          {...Props}
        >
          {children}
        </h1>
      )}

      {as === 'h2' && (
        <h2
          ref={ref}
          css={[
            PaddingTheme({ padding }),
            MarignTheme({ margin }),
            FlexTheme({ direction, gap, align: 'center' }),
            TypographyTheme({
              size: size ? size : 44,
              weight: weight ? weight : 'bold',
              color,
              txtAlign,
              whiteSpace,
              lineHeight,
            }),
          ]}
          {...Props}
        >
          {children}
        </h2>
      )}

      {as === 'h3' && (
        <h3
          ref={ref}
          css={[
            PaddingTheme({ padding }),
            MarignTheme({ margin }),
            FlexTheme({ direction, gap, align: 'center' }),
            TypographyTheme({
              size: size ? size : 38,
              weight: weight ? weight : 'bold',
              color,
              txtAlign,
              whiteSpace,
              lineHeight,
            }),
          ]}
          {...Props}
        >
          {children}
        </h3>
      )}

      {as === 'h4' && (
        <h4
          ref={ref}
          css={[
            PaddingTheme({ padding }),
            MarignTheme({ margin }),
            FlexTheme({ direction, gap, align: 'center' }),
            TypographyTheme({
              size: size ? size : 32,
              weight: weight ? weight : 'bold',
              color,
              txtAlign,
              whiteSpace,
              lineHeight,
            }),
          ]}
          {...Props}
        >
          {children}
        </h4>
      )}

      {as === 'h5' && (
        <h5
          ref={ref}
          css={[
            PaddingTheme({ padding }),
            MarignTheme({ margin }),
            FlexTheme({ direction, gap, align: 'center' }),
            TypographyTheme({
              size: size ? size : 26,
              weight: weight ? weight : 'bold',
              color,
              txtAlign,
              whiteSpace,
              lineHeight,
            }),
          ]}
          {...Props}
        >
          {children}
        </h5>
      )}

      {as === 'h6' && (
        <h6
          ref={ref}
          css={[
            PaddingTheme({ padding }),
            MarignTheme({ margin }),
            FlexTheme({ direction, gap, align: 'center' }),
            TypographyTheme({
              size: size ? size : 20,
              weight: weight ? weight : 'bold',
              color,
              txtAlign,
              whiteSpace,
              lineHeight,
            }),
          ]}
          {...Props}
        >
          {children}
        </h6>
      )}

      {as === 'strong' && (
        <strong
          ref={ref}
          css={[
            PaddingTheme({ padding }),
            MarignTheme({ margin }),
            FlexTheme({ direction, gap, align: 'center' }),
            TypographyTheme({
              size: size ? size : 18,
              weight: weight ? weight : 'medium',
              color,
              txtAlign,
              whiteSpace: ellipsis.ellipsis ? 'normal' : 'pre-line',
              lineHeight,
            }),
            ellipsis.ellipsis
              ? {
                  display: '-webkit-box',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: ellipsis.line,
                }
              : FlexTheme({ direction, gap, align: 'center' }),
          ]}
          {...Props}
        >
          {children}
        </strong>
      )}

      {as === 'p' && (
        <p
          ref={ref}
          css={[
            ViewportTheme({ maxWidth }),
            PaddingTheme({ padding }),
            MarignTheme({ margin }),
            TypographyTheme({
              size: size ? size : 15,
              weight: weight ? weight : 'normal',
              color,
              txtAlign,
              whiteSpace: ellipsis.ellipsis ? 'normal' : 'pre-line',
              lineHeight,
            }),
            ellipsis.ellipsis
              ? {
                  display: '-webkit-box',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: ellipsis.line,
                }
              : FlexTheme({ direction, gap, align: 'center' }),
          ]}
          {...Props}
        >
          {children}
        </p>
      )}
    </>
  );
});
