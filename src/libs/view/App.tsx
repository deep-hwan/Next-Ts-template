import React, { ReactNode } from 'react'
import { NextRouter, useRouter } from 'next/router'

// Components
import Header from './Header'
import BottomNaviTabBar from './BottomNaviTabBar'

//
export default function App({ children }: { children: ReactNode }): JSX.Element {
    const router: NextRouter = useRouter()

    const errPath = router.pathname === '/404'
    const noneView = router.pathname === '/form-fields'

    return (
        <div id="layout" {...(styleSheet as any)}>
            {!errPath && <Header />}

            <main id="main_layer" {...(styleSheet as any)}>
                {children}
            </main>

            {!(errPath || noneView) && <BottomNaviTabBar />}
        </div>
    )
}

const styleSheet = {
    css: { width: '100%', height: '100%', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' },
}
