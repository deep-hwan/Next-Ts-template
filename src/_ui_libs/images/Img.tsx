/** @jsxImportSource @emotion/react */
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { CSSObject } from '@emotion/react';

interface Props {
  src: string | StaticImageData;
  alt: string;
  priority?:boolean;
  width?: number;
  height?: number;
  size?: {
    width?: 'auto' | '100%' | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    height?: 'auto' | '100%'| string;
    minHeight?: number | string;
    maxHeight?: number | string;
  };
  screenRatio?: { x?: number; y?: number };
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | undefined;
  borderRadius?: number | string;
  css?: CSSObject;
  onClick?: any;
}

export function Img({
  src,
  alt,
  width = 500,
  height = 500,
  size,
  priority,
  objectFit = 'cover',
  borderRadius = 18,
  screenRatio = { x: 4, y: 3 },
  onClick,
  ...props
}: Props) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        loading= {priority ?"eager" :"lazy"}
        layout="responsive"
        placeholder="blur"
        blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
        width={width}
        height={height}
        onClick={onClick}
      
        css={{
          width: size?.width ? size?.width : '100%',
          height: size?.height ? size?.height : 'auto',
          minWidth:  size?.minWidth,
          maxWidth:  size?.maxWidth,
          minHeight: size?.minHeight,
          maxHeight:  size?.maxHeight,
          objectFit: objectFit,
          borderRadius: borderRadius,
          aspectRatio: `${screenRatio.x}/${screenRatio.y}`,
        }}
        {...props}
      />
    </>
  );
}
