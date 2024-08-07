/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react'
import React, { useState, useEffect, useRef } from 'react'

interface ImageProps {
    src: string
    alt: string
    size?: {
        width?: 'auto' | '100%' | string
        minWidth?: number | string
        maxWidth?: number | string
        height?: 'auto' | '100%' | string
        minHeight?: number | string
        maxHeight?: number | string
        borderRadius?: string | number
    }
    ratio?: { x?: number; y?: number }
    objectFit?: 'cover' | 'fill' | 'contain'
    shadow?: {
        x?: number
        y?: number
        blur?: number
        color?: string
    }
}

const Image: React.FC<ImageProps> = ({ src, alt, size, ratio, objectFit, ...props }) => {
    const blurDataURL =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAIAAADETxJQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nAEoANf/AP7+//j9/+ry/wDe3NbEqorX1cwAkn9ndUYhjHddAAgEBBIODgcHCB3XE9M/sWuRAAAAAElFTkSuQmCC'
    const [isLoaded, setIsLoaded] = useState(false)
    const imgRef = useRef<HTMLImageElement>(null)
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true) // Set to true when component mounts (client-side)

        if (typeof window === 'undefined') {
            setIsLoaded(true) // Assume image is loaded on server-side
            return
        }

        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsLoaded(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            {
                rootMargin: '50px',
                threshold: 0.01,
            },
        )

        if (imgRef.current) {
            observer.observe(imgRef.current)
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current)
            }
        }
    }, [src])

    const imageSizeStyle = {
        width: size?.width ?? 'auto',
        height: size?.height ?? 'auto',
        minWidth: size?.minWidth ?? 'none',
        maxWidth: size?.maxWidth ?? 'none',
        minHeight: size?.minHeight ?? 'none',
        maxHeight: size?.maxHeight ?? 'none',
        backgroundImage: isLoaded ? 'none' : `url('${blurDataURL}')`, // Use backgroundImage only when the image is not loaded
        backgroundSize: 'cover',
        filter: isLoaded ? 'none' : 'blur(2px)', // Remove blur filter once the image is loaded
        borderRadius: size?.borderRadius,
        aspectRatio: ratio ? `${ratio.x}/${ratio.y}` : '',
        objectFit: objectFit ?? 'contain',
        boxShadow: props?.shadow
            ? `${props?.shadow?.x}px ${props?.shadow?.y}px ${props?.shadow?.blur}px ${props?.shadow?.color}`
            : undefined,
    } as Interpolation<Theme>

    return (
        <img
            ref={imgRef}
            src={isLoaded ? src : blurDataURL}
            alt={alt}
            loading="lazy"
            css={{ ...(imageSizeStyle as any) }}
            onLoad={() => setIsLoaded(true)}
        />
    )
}

export { Image }
