/** @jsxImportSource @emotion/react */
import React, {
  Children,
  ForwardedRef,
  HTMLAttributes,
  OptionHTMLAttributes,
  ReactElement,
  ReactNode,
  SelectHTMLAttributes,
  cloneElement,
  forwardRef,
  memo,
} from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { Column, Txt } from '../_index';
import {
  FieldBoxTheme,
  GlobalInputTheme,
  LabelTheme,
  PaddingTheme,
  TypographyTheme,
  ViewportTheme,
} from '@/_ui_libs/_theme';

// --------------------------------------------
// -------------- Type Interface --------------
// --------------------------------------------
interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  labelEdge?: string;
  children: ReactElement;
  maxWidth?: number;
}

interface SelectBoxProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children?: ReactNode;
  shape?: 'default' | 'box';
  placeholder?: string;
  error?: boolean;
  errorMsg?: string;
  tolTip?: string;
  options?: {
    data?: any;
    value?: any;
    name?: any;
  };
}

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
}

// -------------------------------------------
// -------------- Input (Label) --------------
// -------------------------------------------
export function Select({ children, label, labelEdge, maxWidth, ...props }: SelectProps) {
  const child = Children.only(children);
  const id = child.props.id ?? 1;
  const error: boolean = child.props.error ?? false;
  const errorMsg: string = child.props.errorMsg ?? undefined;
  const tolTip: string = child.props.tolTip ?? undefined;

  return (
    <Column maxWidth={maxWidth} {...props}>
      {label && (
        <label htmlFor={id} css={[LabelTheme(error)]}>
          {label}
          {labelEdge && (
            <span css={{ fontSize: '0.65rem', color: '#ed5c5c', marginLeft: '4px' }}>
              {labelEdge}
            </span>
          )}
        </label>
      )}

      {cloneElement(child, {
        id,
        ...child.props,
      })}

      {error && (
        <Txt color="#ed5c5c" size={12} margin={{ top: 6 }}>
          {errorMsg}
        </Txt>
      )}

      {tolTip && !error && (
        <Txt color="#999999" size={13} margin={{ top: 6 }}>
          {tolTip}
        </Txt>
      )}
    </Column>
  );
}

// ---------------------------------------
// -------------- SelectBox --------------
// ---------------------------------------
Select.SelectBox = forwardRef(function SelectBox(
  { children, shape = 'default', placeholder, error, options, ...props }: SelectBoxProps,
  ref?: ForwardedRef<HTMLSelectElement>,
) {
  const { value } = props;

  return (
    <>
      {cloneElement(
        <select
          ref={ref}
          css={[
            FieldBoxTheme(shape, error),
            SelectTheme(shape, value as boolean | string | number),
          ]}
          {...props}
        >
          {placeholder && (
            <option value="" disabled selected>
              {placeholder}
            </option>
          )}
          {options?.data ? (
            <>
              {options?.data?.map((item: any, i: number) => (
                <option key={i} value={item?.value}>
                  {item?.name}
                </option>
              ))}
            </>
          ) : (
            <>{children}</>
          )}
        </select>,
      )}
    </>
  );
});

// ------------------------------------
// -------------- Option --------------
// ------------------------------------
export const Option = memo(function Option({ children, ...props }: OptionProps) {
  return cloneElement(<option {...props}>{children}</option>);
});

// -----------------------------------------
// -------------- THEME_STYLE --------------
// -----------------------------------------
function SelectTheme(
  shape: 'default' | 'box',
  value: boolean | string | number,
): Interpolation<Theme> {
  return [
    GlobalInputTheme(),
    ViewportTheme({ width: '100%', minWidth: 100 }),
    TypographyTheme({ size: 15, color: value !== '' ? '#555555' : '#e2e2e2' }),
    shape === 'default' && PaddingTheme({ padding: { all: 12 } }),
    shape === 'box' && PaddingTheme({ padding: { vertical: 14, horizontal: 12 } }),
    {
      display: 'flex',
      fontSize: '0.938rem !important',
      font: 'inherit',
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box',
      boxSizing: 'border-box',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      cursor: 'pointer',
      backgroundImage:
        'linear-gradient(-45deg, transparent 50%, #cccccc 50%),linear-gradient(45deg, transparent 50%, #cccccc 50%)',
      backgroundPosition: 'calc(100% - 10px) 50%, calc(100% - 15px) 50%',
      backgroundSize: '5px 5px, 5px 5px',
      backgroundRepeat: 'no-repeat',
      outline: '0',
      paddingRight: '30px',

      '&:disabled': {
        backgroundColor: '#f2f2f2',
        color: '#999',
        opacity: '0.9',
      },
    },
  ];
}
