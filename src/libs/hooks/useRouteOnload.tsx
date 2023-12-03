import { useRouter } from 'next/router';
import React, { EventHandler, useEffect } from 'react';

export function useRouteOnload(handleOnLoad: EventHandler<any>) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', handleOnLoad);
    return () => {
      router.events.off('routeChangeStart', handleOnLoad);
    };
  }, [handleOnLoad, router.events]);

  useEffect(() => {
    router.events.on('routeChangeComplete', handleOnLoad);
    return () => {
      router.events.off('routeChangeComplete', handleOnLoad);
    };
  }, [handleOnLoad, router.events]);
}
