/** @jsxImportSource @emotion/react */
import React, { Children, ForwardedRef, HTMLAttributes, ReactElement, forwardRef } from 'react';
import { css } from '@emotion/react';
import { FlexTheme, PaddingTheme, StyleTheme, ViewportTheme } from '@/_ui_libs/_theme';
import { MQ } from '@/libs/themes/_index';
import { ViewportTypes } from '../_types';

interface IconProps extends HTMLAttributes<HTMLElement>, Pick<ViewportTypes, 'position'> {
  children: ReactElement;
  onClick: () => void;
  size?: number;
  iconSize?: number;
}

export const IconTab = forwardRef(
  (
    { children, position, size, iconSize = 24, onClick, ...props }: IconProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    const child = Children.only(children);

    const svgChild = React.cloneElement(child, {
      css: {
        width: `100%`,
        height: `100%`,
      },
    });

    return (
      <button
        type="button"
        onClick={onClick}
        ref={ref}
        css={[
          ViewportTheme({
            position,
            width: 'auto',
            minWidth: size,
            maxWidth: size,
            minHeight: size,
            maxHeight: size,
          }),
          FlexTheme({ align: 'center', crossAlign: 'center' }),
          StyleTheme({ borderRadius: 8 }),
          PaddingTheme({ padding: { all: 6 } }),
          {
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.03)' },
            [MQ[3]]: { backgroundColor: 'transparent' },
          },
        ]}
      >
        <div
          css={css`
            width: ${`${iconSize}px`};
            height: ${`${iconSize}px`};
            display: flex;
            justify-content: center;
            align-items: center;
            transition: 0.3s ease-in-out;
            white-space: nowrap;
            cursor: pointer;

            svg {
              width: '100%';
              height: '100%';
            }

            img {
              width: '100%';
              height: '100%';
            }
          `}
          {...props}
        >
          {svgChild}
        </div>
      </button>
    );
  },
);
