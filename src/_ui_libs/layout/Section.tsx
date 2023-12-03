/** @jsxImportSource @emotion/react */
import React, { ForwardedRef, HTMLAttributes, ReactNode, forwardRef } from 'react';
import { FlexTheme, ViewportTheme } from '../_theme';
import { FlexTypes, ViewportTypes } from '../_types';

interface Props
  extends HTMLAttributes<HTMLElement>,
    Omit<ViewportTypes, 'position' | 'zIndex'>,
    Omit<FlexTypes, 'flex'> {
  children: ReactNode;
  backgroundColor?: string;
}

export const Section = forwardRef<HTMLElement, Props>(
  (
    {
      children,
      width = '100%',
      height,
      minWidth,
      maxWidth,
      minHeight,
      maxHeight,
      //
      direction = 'vertical',
      align = 'center',
      crossAlign,
      wrap = 'nowrap',
      gap = 0,
      crossGap = 0,
      //
      backgroundColor,
      ...props
    },
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const viewProps = { width, height, minWidth, maxWidth, minHeight, maxHeight };

    return (
      <section
        ref={ref}
        css={[
          ViewportTheme(viewProps),
          FlexTheme({ direction, align, crossAlign, wrap, gap, crossGap }),
          {
            flex: '1 auto',
            backgroundColor: backgroundColor,
            paddingRight: 'env(safe-area-inset-right)',
            paddingLeft: 'env(safe-area-inset-left)',
          },
        ]}
        {...props}
      >
        {children}
      </section>
    );
  },
);
