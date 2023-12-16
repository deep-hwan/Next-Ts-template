/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Interpolation, Theme } from '@emotion/react';

interface Props {
  ssr?: boolean;
  src: string | StaticImageData;
  alt: string;
  priority?: boolean;
  size?: {
    width?: 'auto' | '100%' | string;
    minWidth?: number | string;
    maxWidth?: number | string;
    height?: 'auto' | '100%' | string;
    minHeight?: number | string;
    maxHeight?: number | string;
  };
  screenRatio?: { x?: number; y?: number };
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | undefined;
  borderRadius?: number | string;
  css?: Interpolation<Theme>;
  onClick?: any;
}

export function Img({
  ssr = true,
  src,
  alt,
  size,
  priority,
  objectFit = 'cover',
  borderRadius = 18,
  screenRatio = { x: 4, y: 3 },
  onClick,
  ...props
}: Props) {
  const [blurDataURL, setBlurDataURL] = useState('');

  useEffect(() => {
    async function fetchBlurDataURL() {
      if (typeof src === 'string' && !src.startsWith('data:image/')) {
        try {
          const response = await fetch(`/api/image-placeholder?url=${encodeURIComponent(src)}`);
          if (!response.ok) {
            throw new Error('Image processing failed');
          }
          const data = await response.json();
          setBlurDataURL(data.base64);
        } catch (error) {
          console.error('Failed to load blur data URL:', error);
        }
      }
    }

    if (ssr) fetchBlurDataURL();
  }, [src, ssr]);

  const sizes = `(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`;

  return (
    <div
      css={{
        position: 'relative',
        width: size?.width ? size.width : '100%',
        height: size?.height ? size.height : 'auto',
        minWidth: size?.minWidth,
        maxWidth: size?.maxWidth,
        minHeight: size?.minHeight,
        maxHeight: size?.maxHeight,
        aspectRatio: `${screenRatio.x}/${screenRatio.y}`,
      }}
      {...props}
    >
      {!!blurDataURL ? (
        <Image
          src={src}
          alt={alt}
          priority={priority}
          fill
          layout="fill"
          placeholder={blurDataURL ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
          objectFit={objectFit}
          onClick={onClick}
          sizes={sizes}
          css={{ borderRadius: borderRadius }}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          priority={priority}
          fill
          layout="fill"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7+//j9/+ry/wDe3NbEqorX1cwAkn9ndUYhjHddAAgEBBIODgcHCB3XE9M/sWuRAAAAAElFTkSuQmCC"
          objectFit={objectFit}
          onClick={onClick}
          sizes={sizes}
          css={{ borderRadius: borderRadius }}
        />
      )}
    </div>
  );
}
