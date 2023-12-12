import React, { ChangeEvent, Suspense, lazy, useState } from 'react';
import { NextRouter, useRouter } from 'next/router';

//libs
import { Container, Input, ScrollTopTab, Section, Spacing } from '@/_ui_libs/_index';
import { MQ, screenSize } from '@/libs/themes/_index';

//components
import SEO from '@/seo.config';

const Comp1 = lazy(() => import('@/libs/components/home/Comp1'));
const Comp2 = lazy(() => import('@/libs/components/home/Comp2'));
const Comp3 = lazy(() => import('@/libs/components/home/Comp3'));
const Comp4 = lazy(() => import('@/libs/components/home/Comp4'));
const Comp5 = lazy(() => import('@/libs/components/home/Comp5'));

//
export default function Index() {
  const router: NextRouter = useRouter();
  const [isSearch, setIsSearch] = useState('');

  return (
    <>
      <SEO />
      <Suspense fallback="">
        <Section>
          <Container
            maxWidth={screenSize[3]}
            padding={{ top: 40, bottom: 60, horizontal: 20 }}
            css={{ [MQ[3]]: { paddingTop: 10, paddingBottom: 40 } }}
          >
            <Input.SearchField
              shape="box"
              searchTab
              value={isSearch}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setIsSearch(e.target.value)}
              onClick={() =>
                router.push({ query: { search: isSearch } }, undefined, { scroll: false })
              }
            />

            <Spacing size={16} />
            <Comp1 />
            <Spacing size={12} />
            <Comp2 />
            <Spacing size={54} />
            <Comp3 />
            <Spacing size={44} />
            <Comp4 />
            <Spacing size={44} />
            <Comp5 />
          </Container>
        </Section>

        <ScrollTopTab />
      </Suspense>
    </>
  );
}
