/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, ForwardedRef, ReactNode, forwardRef } from 'react';
import { MarignTheme, PaddingTheme, TypographyTheme } from '@/_ui_libs/_theme';
import { colors } from '@/libs/themes/_index';
import { MarginTypes, PaddingTypes, TypographyTypes } from '../_types';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface TabProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    PaddingTypes,
    MarginTypes,
    Pick<TypographyTypes, 'weight' | 'txtAlign' | 'size' | 'color'> {
  children: ReactNode;
  type?: 'button' | 'submit';
}

// ------------------------------------
// -------------- TxtTab --------------
// ------------------------------------
export const TxtTab = forwardRef(function TxtTab(
  {
    children,
    type = 'button',
    size = 14,
    txtAlign,
    weight,
    color = colors.keyColor,
    //
    padding,
    margin,
    ...props
  }: TabProps,
  ref?: ForwardedRef<HTMLButtonElement>,
) {
  return (
    <button
      type={type}
      ref={ref}
      css={[
        PaddingTheme({ padding }),
        MarignTheme({ margin }),
        TypographyTheme({ size, color, weight, whiteSpace: 'nowrap', txtAlign }),
        { '&:hover': { fontWeight: '500' }, '&:disabled': { opacity: 0.4 } },
      ]}
      {...props}
    >
      {children}
    </button>
  );
});
