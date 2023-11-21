/** @jsxImportSource @emotion/react */
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { CSSObject } from '@emotion/react';

interface Props {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  size?: {
    width?: 'auto' | '100%' | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    height?: 'auto' | '100%';
    minHeight?: number | string;
    maxHeight?: number | string;
  };
  objectFit?: 'cover' | 'contain' | 'fill';
  borderRadius?: number | string;
  css?: CSSObject;
  screenRatio?: { x?: number; y?: number };
}

export function Img({
  src,
  alt,
  width = 500,
  height = 500,
  size,
  objectFit = 'cover',
  borderRadius = 18,
  screenRatio = { x: 4, y: 3 },
  ...props
}: Props) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        loading="lazy"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        width={width}
        height={height}
        css={{
          width: size?.width ? size?.width : '100%',
          height: size?.height ? size?.height : 'auto',
          minWidth: typeof size?.minWidth === 'number' ? `${size?.minWidth}px` : size?.minWidth,
          maxWidth: typeof size?.maxWidth === 'number' ? `${size?.maxWidth}px` : size?.maxWidth,
          minHeight: typeof size?.minHeight === 'number' ? `${size?.minHeight}px` : size?.minHeight,
          maxHeight: typeof size?.maxHeight === 'number' ? `${size?.maxHeight}px` : size?.maxHeight,
          objectFit: objectFit,
          borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
          aspectRatio: `${screenRatio.x}/${screenRatio.y}`,
        }}
        {...props}
      />
    </>
  );
}
