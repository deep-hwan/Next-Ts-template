import React, { ReactNode } from 'react'
import { NextRouter, useRouter } from 'next/router'

// Components
import { V } from '@/_ui'
import Header from './Header'
import BottomNaviTabBar from './BottomNaviTabBar'

//
export default function App({ children }: { children: ReactNode }): JSX.Element {
    const router: NextRouter = useRouter()

    const errPath = router.pathname === '/404'
    const noneView = router.pathname === '/form-fields'

    return (
        <V.Column height="100%" minHeight="100%" flex="1 auto" id="layout">
            {!errPath && <Header />}
            <main
                css={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    flex: 1,
                }}
            >
                {children}
            </main>
            {!(errPath || noneView) && <BottomNaviTabBar />}
        </V.Column>
    )
}
