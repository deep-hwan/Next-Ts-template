export interface ViewportTypes {
  zIndex?: number;
  width?: 'auto' | '100%' | '100vw';
  height?: 'auto' | '100%' | '100vh';
  minWidth?: number | string;
  maxWidth?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  position?: {
    type?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
}

export interface FlexTypes {
  flex?: number | string;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'stretch';
  crossAlign?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: number;
  crossGap?: number;
}

export interface PaddingTypes {
  padding?: {
    all?: number | string;
    horizontal?: number | string;
    vertical?: number | string;
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
}

export interface MarginTypes {
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

export interface StyleslTypes {
  cursor?: 'default' | 'grab' | 'pointer' | 'zoom';
  backgroundColor?: string;
  borderRadius?: number | string;
  boxShadow?: {
    x?: number;
    y?: number;
    blur?: number;
    color?: string;
  };
  border?: {
    solid: number;
    position?: 'left' | 'right' | 'top' | 'bottom';
    color?: string;
  };
}

export interface ScrollTypes {
  scroll?: {
    type?: 'visible' | 'auto' | 'scroll' | 'hidden';
    bar?: boolean;
  };
}

export interface TypographyTypes {
  size?: number | string;
  color?: string;
  lineHeight?: number;
  txtAlign?: 'start' | 'end' | 'center';
  weight?: 'lighter' | 'normal' | 'medium' | 'bold';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
}
