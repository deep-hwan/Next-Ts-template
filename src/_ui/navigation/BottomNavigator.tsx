/** @jsxImportSource @emotion/react */
import React, { Children, HTMLAttributes, ReactElement, ReactNode, forwardRef } from 'react'
import { css, Interpolation, Theme } from '@emotion/react'
import Link from 'next/link'
import { V, TxtSpan, P, TouchableOpacity } from '../index'
import { colors, MQ } from '@/libs/themes'

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    design?: 'default' | 'shape'
    maxWidth?: number
}

interface MenuProps extends HTMLAttributes<HTMLLinkElement> {
    children: ReactElement
    href: string
    label?: string
    bedge?: boolean
}

interface BottomTabNavigatorComponent
    extends React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLDivElement>> {
    Tab: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLAnchorElement>>
}

const BottomTabNavigatorBase: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (
    { children, design = 'default', maxWidth = 600 },
    ref,
) => {
    let childrenArray = React.Children.toArray(children)

    childrenArray = childrenArray.filter((child) => true)

    if (childrenArray.length < 7) {
        return (
            <>
                {design === 'shape' && (
                    <P.BottomFixed zIndex={1000} height={100}>
                        <V.Container align="center" padding={{ horizontal: 10 }} ref={ref}>
                            <nav css={[NavTheme(design, maxWidth)]}>{childrenArray}</nav>
                        </V.Container>
                    </P.BottomFixed>
                )}

                {design === 'default' && (
                    <P.BottomFixed
                        zIndex={1000}
                        height={70}
                        padding={{ horizontal: 8 }}
                        backgroundColor="#fff"
                        borderTop="1px solid #eee"
                    >
                        <V.ScrollDragHorizontal>
                            <V.Container padding={{ top: 2 }} align="center" backgroundColor="#Fff" ref={ref}>
                                <nav css={[NavTheme(design, maxWidth)]}>{childrenArray}</nav>
                            </V.Container>
                        </V.ScrollDragHorizontal>
                    </P.BottomFixed>
                )}
            </>
        )
    }

    return null
}

export const BottomNavigator = forwardRef(BottomTabNavigatorBase) as BottomTabNavigatorComponent

//
//
const Tab = forwardRef<HTMLAnchorElement, MenuProps>(({ children, href, label, bedge, ...props }, ref) => {
    const child = Children.only(children)

    return (
        <Link ref={ref} href={href} passHref>
            <TouchableOpacity
                padding={{ all: 6 }}
                gap={3}
                direction="vertical"
                align="center"
                crossAlign="center"
                borderRadius={14}
                minWidth={50}
                maxWidth={50}
            >
                <V.Container
                    width="auto"
                    maxHeight={26}
                    minHeight={26}
                    align="center"
                    crossAlign="center"
                    css={[
                        css`
                            svg,
                            img {
                                width: 100%;
                                height: 26px;

                                @media (max-width: 600px) {
                                    height: 23px;
                                }
                            }
                        `,
                        { [MQ[3]]: { maxHeight: '23px', minHeight: '23px' } },
                    ]}
                >
                    {child}

                    {bedge && (
                        <P.Absolute
                            position={{ top: 0, right: -2 }}
                            width="auto"
                            minWidth={8}
                            minHeight={8}
                            borderRadius={100}
                            backgroundColor={colors.red[500]}
                        />
                    )}
                </V.Container>

                <TxtSpan size={12} css={{ [MQ[3]]: { fontSize: '0.68rem' } }} {...props}>
                    {label}
                </TxtSpan>
            </TouchableOpacity>
        </Link>
    )
})

//
//
BottomNavigator.Tab = Tab

//
///
function NavTheme(design: 'default' | 'shape', maxWidth?: number): Interpolation<Theme> {
    const viewThemes = (): Interpolation<Theme> => {
        return {
            maxWidth: `${maxWidth}px`,
            width: '100%',
            height: '100%',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: '0.3s ease-in-out',
            gap: 2,
        }
    }

    if (design === 'default') {
        return { ...(viewThemes() as object) }
    }

    if (design === 'shape') {
        return {
            ...(viewThemes() as object),
            boxShadow: '0 2px 26px rgba(0,0,0,0.08)',
            borderRadius: '10000px',
            backgroundColor: '#ffffff',
        }
    }
}
