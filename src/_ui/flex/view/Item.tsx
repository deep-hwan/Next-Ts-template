/** @jsxImportSource @emotion/react */
import React, {
  ForwardedRef,
  HTMLAttributes,
  ReactNode,
  forwardRef,
  useEffect,
  useState,
} from 'react';
import { SpaceTheme, SpaceType } from '../../_themes/space';
import { FlexTheme, FlexType } from '../../_themes/flex';
import { ViewportTypes } from '../../_themes/viewport';
import { ScrollTheme, ScrollType } from '../../_themes/scroll';
import { BorderTheme, BorderType } from '../../_themes/border';
import { ShadowTheme, ShadowType } from '../../_themes/boxShadow';
import { CursorTheme, CursorType } from '../../_themes/cursor';

interface Props
  extends HTMLAttributes<HTMLLIElement>,
    ViewportTypes,
    FlexType,
    SpaceType,
    BorderType,
    ShadowType,
    ScrollType,
    CursorType {
  children?: ReactNode;
  borderRadius?: number | string;
  backgroundColor?: string;
  transitionTime?: number;
  txtSize?: number;
  txtColor?: string;
  lineHeight?: number;
  txtAlign?: 'start' | 'end' | 'center';
  txtWeight?: 'lighter' | 'normal' | 'medium' | 'bold';
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-wrap' | 'pre-line';
  underline?: boolean;
  ellipsis?: { ellipsis?: boolean; line?: number; width?: number };
}

const Item = forwardRef((props: Props, ref: ForwardedRef<HTMLLIElement>) => {
  const {
    zIndex,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    backgroundColor,
    borderRadius,
    transitionTime,
    flex,
    direction,
    align,
    crossAlign,
    wrap,
    gap,
    crossGap,
    basis,
    grow,
    shrink,
    padding,
    margin,
    scroll,
    border,
    shadow,
    cursor,
    txtWeight,
    txtSize = 15,
    txtColor,
    txtAlign,
    whiteSpace,
    lineHeight,
    underline,
    ellipsis = { ellipsis: false },
    ...rest
  } = props;

  const FlexT = FlexTheme({
    flex,
    direction: direction ?? 'vertical',
    align: align ?? 'start',
    crossAlign,
    wrap,
    gap,
    crossGap,
    basis,
    grow,
    shrink,
  });

  const spaceT = SpaceTheme({ padding, margin });
  const scrollT = ScrollTheme({ scroll });
  const borderT = BorderTheme({ border: border });
  const shadowT = ShadowTheme({ shadow: shadow });
  const cursorT = CursorTheme({ cursor: cursor, onClick: rest.onClick });

  const [os, setOs] = useState<'window' | 'mac'>('window');

  useEffect(() => {
    if (/Macintosh|iPhone|iPad|iPod/.test(navigator.userAgent)) setOs('mac');
    else if (/Windows|Android/.test(navigator.userAgent)) setOs('window');
    else setOs('window');
  }, [os]);

  const TYPOGRAPH_WEIGHT = {
    lighter: { fontWeight: os === 'window' ? '300' : '400' },
    normal: { fontWeight: 400 },
    medium: { fontWeight: os === 'window' ? '500' : '600' },
    bold: { fontWeight: os === 'window' ? '600' : '700' },
  } as const;

  const ellipsisT = {
    maxWidth: ellipsis.width ?? 'auto',
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: ellipsis.line,
  } as any;

  return (
    <li
      ref={ref}
      css={{
        zIndex: zIndex,
        width: width ?? '100%',
        minWidth: minWidth,
        maxWidth: maxWidth,
        height: height,
        minHeight: minHeight,
        maxHeight: maxHeight,

        position: 'relative',
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        transition: `${transitionTime ?? 0}s ease-in-out`,
        fontWeight: TYPOGRAPH_WEIGHT[txtWeight ?? 'normal'].fontWeight,
        fontSize: props.txtSize && `${txtSize / 16}rem`,
        whiteSpace: ellipsis.ellipsis ? 'normal' : whiteSpace,
        color: txtColor ?? '#444',
        lineHeight: lineHeight,
        textAlign: txtAlign ?? 'start',
        textDecoration: underline && 'underline',
        ...cursorT,
        ...(!ellipsis.ellipsis && spaceT),
        ...(ellipsis.ellipsis && ellipsisT),

        ...FlexT,
        ...spaceT,
        ...scrollT,
        ...borderT,
        ...shadowT,
        ...cursorT,
      }}
      {...props}
    >
      {props.children}
    </li>
  );
});

export { Item };
