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

interface Props
  extends HTMLAttributes<HTMLElement>,
    Omit<ViewportTypes, 'position'>,
    FlexTypes,
    MarginTypes,
    PaddingTypes,
    Pick<StyleslTypes, 'borderRadius' | 'boxShadow' | 'transitionTime'>,
    ScrollTypes {
  children?: ReactNode;
  imgSrc: string;
}

export const BackgroundImgBox = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      zIndex,
      width = '100%',
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      //
      direction = 'vertical',
      align,
      crossAlign,
      wrap = 'nowrap',
      gap = 0,
      crossGap = 0,
      //
      padding,
      margin,
      //
      borderRadius,
      boxShadow,
      scroll,
      //
      imgSrc,
      transitionTime,
      ...props
    },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const viewProps = { width, height, minWidth, maxWidth, minHeight, maxHeight, zIndex };
    const flexProps = { direction, align, crossAlign, wrap, gap, crossGap };

    return (
      <div
        ref={ref}
        css={[
          ViewportTheme(viewProps),
          FlexTheme(flexProps),
          PaddingTheme({ padding }),
          MarignTheme({ margin }),
          StyleTheme({ borderRadius, boxShadow, transitionTime }),
          ScrollTheme({ scroll }),
          {
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          },
        ]}
        {...props}
      >
        {children}
      </div>
    );
  },
);
