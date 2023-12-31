/** @jsxImportSource @emotion/react */
import {
  FlexTypes,
  PaddingTypes,
  ViewportTypes,
  MarginTypes,
  ScrollTypes,
  StyleslTypes,
  TypographyTypes,
} from './_types';
import { Interpolation, Theme } from '@emotion/react';
import { colors } from '../libs/themes/colors';

// ---------------------------
// -------- Viewport ---------
// ---------------------------
export function ViewportTheme({
  zIndex,
  width = '100%',
  height = 'auto',
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  position = { type: 'relative' },
}: ViewportTypes): Interpolation<Theme> {
  return {
    zIndex: zIndex,
    width: width,
    height: height,
    minWidth: minWidth,
    maxWidth: maxWidth,
    minHeight: minHeight,
    maxHeight: maxHeight,
    position: position?.type,
    top: position.top,
    bottom: position.bottom,
    right: position.right,
    left: position.left,
  };
}

// -----------------------
// -------- Flex ---------
// -----------------------
export function FlexTheme({
  flex,
  direction,
  align,
  crossAlign,
  wrap = 'nowrap',
  gap,
  crossGap,
}: FlexTypes): Interpolation<Theme> {
  return {
    display: 'flex',
    flex: flex,
    flexDirection: direction === 'horizontal' ? 'row' : 'column',
    alignItems: align ? align : direction === 'horizontal' ? 'stretch' : 'flex-start',
    justifyContent: crossAlign && crossAlign,
    rowGap:
      direction === 'vertical'
        ? `${gap}px`
        : undefined || direction === 'horizontal'
          ? `${crossGap}px`
          : undefined,
    columnGap:
      direction === 'horizontal'
        ? `${gap}px`
        : undefined || direction === 'vertical'
          ? `${crossGap}px`
          : undefined,
    flexWrap: wrap,
  };
}

// -------------------------
// -------- Padding --------
// -------------------------
export function PaddingTheme({
  padding,
  safeArea = false,
}: {
  safeArea?: boolean;
  padding: PaddingTypes['padding'];
}): Interpolation<Theme> {
  return {
    paddingTop: safeArea
      ? (padding?.all && `max(${padding?.all}px, env(safe-area-inset-top))`) ||
        (padding?.vertical && `max(${padding?.vertical}px, env(safe-area-inset-top))`) ||
        (padding?.top && `max(${padding?.top}px, env(safe-area-inset-top))`)
      : (padding?.all && padding?.all) ||
        (padding?.vertical && padding?.vertical) ||
        (padding?.top && padding?.top),

    paddingBottom: safeArea
      ? (padding?.all && `max(${padding?.all}px, env(safe-area-inset-bottom))`) ||
        (padding?.vertical && `max(${padding?.vertical}px, env(safe-area-inset-bottom))`) ||
        (padding?.bottom && `max(${padding?.bottom}px, env(safe-area-inset-bottom))`)
      : (padding?.all && padding?.all) ||
        (padding?.vertical && padding?.vertical) ||
        (padding?.bottom && padding?.bottom),
    paddingLeft: safeArea
      ? (padding?.all && `max(${padding?.all}px, env(safe-area-inset-left))`) ||
        (padding?.horizontal && `max(${padding?.horizontal}px, env(safe-area-inset-left))`) ||
        (padding?.left && `max(${padding?.left}px, env(safe-area-inset-left))`)
      : (padding?.all && padding?.all) ||
        (padding?.horizontal && padding?.horizontal) ||
        (padding?.left && padding?.left),
    paddingRight: safeArea
      ? (padding?.all && `max(${padding?.all}px, env(safe-area-inset-right))`) ||
        (padding?.horizontal && `max(${padding?.horizontal}px, env(safe-area-inset-right))`) ||
        (padding?.right && `max(${padding?.right}px, env(safe-area-inset-right))`)
      : (padding?.all && padding?.all) ||
        (padding?.horizontal && padding?.horizontal) ||
        (padding?.right && padding?.right),
  };
}

// ------------------------
// -------- Margin --------
// ------------------------
export function MarignTheme({ margin }: MarginTypes): Interpolation<Theme> {
  return {
    marginTop:
      (margin?.all && margin?.all) ||
      (margin?.vertical && margin?.vertical) ||
      (margin?.top && margin?.top),
    marginBottom:
      (margin?.all && margin?.all) ||
      (margin?.vertical && margin?.vertical) ||
      (margin?.bottom && margin?.bottom),
    marginLeft:
      (margin?.all && margin?.all) ||
      (margin?.horizontal && margin?.horizontal) ||
      (margin?.left && margin?.left),
    marginRight:
      (margin?.all && margin?.all) ||
      (margin?.horizontal && margin?.horizontal) ||
      (margin?.right && margin?.right),
  };
}

// -----------------------------
// -------- Typography ---------
// -----------------------------
export function TypographyTheme({
  size,
  color,
  weight,
  txtAlign,
  whiteSpace,
  lineHeight,
}: TypographyTypes): Interpolation<Theme> {
  const TYPOGRAPH_WEIGHT = {
    lighter: { fontWeight: '300' },
    normal: { fontWeight: '400' },
    medium: { fontWeight: '500' },
    bold: { fontWeight: '600' },
  } as const;

  return {
    fontSize:
      typeof size === 'number' ? (size ? `${size / 16}rem` : '0.938rem') : size ? size : '0.938rem',
    color: color,
    textAlign: txtAlign,
    whiteSpace: whiteSpace,
    lineHeight: lineHeight,
    position: 'relative',
    transition: '0.3s ease-in-out',
    ...TYPOGRAPH_WEIGHT[weight ? weight : 'normal'],
  };
}

// ------------------------
// -------- Stlye ---------
// ------------------------
export function StyleTheme({
  backgroundColor,
  border,
  borderRadius,
  boxShadow,
  cursor,
  transitionTime = 0.3,
}: StyleslTypes): Interpolation<Theme> {
  return {
    backgroundColor: backgroundColor,
    transition: `${transitionTime}s ease-in-out`,
    border:
      border?.position !== 'bottom' && 'top' && 'right' && 'left'
        ? `${border?.solid}px solid ${border?.color}`
        : undefined,
    borderBottom:
      border?.position === 'bottom' ? `${border?.solid}px solid ${border?.color}` : undefined,
    borderTop: border?.position === 'top' ? `${border?.solid}px solid ${border?.color}` : undefined,
    borderRight:
      border?.position === 'right' ? `${border?.solid}px solid ${border?.color}` : undefined,
    borderLeft:
      border?.position === 'left' ? `${border?.solid}px solid ${border?.color}` : undefined,
    borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
    boxShadow: boxShadow
      ? `${boxShadow?.x}px ${boxShadow?.y}px ${boxShadow?.blur}px ${boxShadow?.color}`
      : undefined,
    cursor: cursor,
  };
}

// -------------------------
// -------- Scroll ---------
// -------------------------
export function ScrollTheme({
  scroll = { type: 'visible', bar: true },
}: ScrollTypes): Interpolation<Theme> {
  return {
    overflow: scroll.type,

    '::-webkit-scrollbar': {
      display: scroll.bar ? 'flex' : 'none',
      width: '4px',
      height: '6px',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#cccccc',
      borderRadius: '100px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#e2e2e2',
    },
    '::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment': {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
    },
  };
}

// ------------------------
// -------- Label ---------
// ------------------------
export function LabelTheme(error: boolean): Interpolation<Theme> {
  return {
    color: error ? '#ED5C5C' : '#888888',
    display: 'inline-block',
    fontSize: '0.813rem',
    marginBottom: '6px',

    '&:focus-within': {
      fontWeight: 500,
    },
  };
}

// -----------------------------------------------
// -------- FieldBoxTheme : 인풋 박스 스타일 ---------
// -----------------------------------------------
export function FieldBoxTheme(shape: 'default' | 'box', error?: boolean | string) {
  let styles: Record<string, string | any> = {};

  if (shape === 'default') {
    styles = {
      borderBottom: error ? `1px solid #ED5C5C` : `1px solid #e2e2e2`,
      backgroundColor: error ? '#FFF8F8' : '#f8f9fc',
      '&:focus, &:hover, &:active': {
        backgroundColor: error ? '#FFF4F4' : '#f5f7fc',
      },
    };
  } else if (shape === 'box') {
    styles = {
      border: error ? `1px solid #ED5C5C` : `1px solid #e2e2e2`,
      backgroundColor: error ? '#FFF8F8' : '#ffffff',
      borderRadius: '14px',
      '&:focus, &:hover, &:active': {
        backgroundColor: error ? '#FFF4F4' : '#fafafa',
      },
    };
  }

  return styles;
}

// -------------------------------------
// -------- Global_Input_Styles --------
// -------------------------------------
export function GlobalInputTheme(): Interpolation<Theme> {
  return {
    '::placeholder': { color: '#cccccc' },

    "&[type='number']::-webkit-outer-spin-button, &[type='number']::-webkit-inner-spin-button": {
      WebkitAppearance: 'none',
      margin: 0,
    },

    '&:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active':
      {
        WebkitTextFillColor: '#797979',
        WebkitBoxShadow: '0 0 0px 1000px transparent inset',
        boxShadow: '0 0 0px 1000px transparent inset',
        transition: 'background-color 5000s ease-in-out 0s',
        transitionDelay: '9999s',
      },

    '&:autofill, &:autofill:hover, &:autofill:focus, &:autofill:active': {
      WebkitTextFillColor: '#797979',
      WebkitBoxShadow: '0 0 0px 1000px transparent inset',
      boxShadow: '0 0 0px 1000px transparent inset',
      transition: 'background-color 5000s ease-in-out 0s',
    },

    '::-webkit-scrollbar': {
      display: 'none',
    },
  };
}
