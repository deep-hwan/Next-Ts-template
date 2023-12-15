import React, { ReactNode, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { NextRouter, useRouter } from 'next/router';

// Components
const Header = dynamic(() => import('./Header'), { suspense: true });
const BottomNaviTabBar = dynamic(() => import('./BottomNaviTabBar'), { suspense: true });

// Types
type LayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: LayoutProps): JSX.Element {
  const router: NextRouter = useRouter();

  const errPath = router.pathname === '/404';
  const noneView = router.pathname === '/form-fields';

  return (
    <div id="layout">
      {!errPath && (
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
      )}
      <main>{children}</main>
      {!(errPath || noneView) && (
        <Suspense fallback={<div>Loading Navigation Bar...</div>}>
          <BottomNaviTabBar />
        </Suspense>
      )}
    </div>
  );
}
