import React, { ReactNode, Suspense, lazy } from 'react';
import { NextRouter, useRouter } from 'next/router';

//components
const Header = lazy(() => import('./Header'));
const BottomNaviTabBar = lazy(() => import('./BottomNaviTabBar'));

//
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
        <Suspense fallback="loading...">
          <Header />
        </Suspense>
      )}
      <main>{children}</main>

      {!(errPath || noneView) && (
        <Suspense fallback="loading...">
          <BottomNaviTabBar />
        </Suspense>
      )}
    </div>
  );
}
