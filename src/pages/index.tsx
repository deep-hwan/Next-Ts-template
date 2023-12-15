import React, { ChangeEvent, Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import { NextRouter, useRouter } from 'next/router';

//libs
import { Container, Input, ScrollTopTab, Section, Spacing } from '@/_ui_libs/_index';
import { MQ, screenSize } from '@/libs/themes/_index';

//components
import SEO from '@/seo.config';

const Comp1 = dynamic(() => import('@/libs/components/home/Comp1'), { suspense: true });
const Comp2 = dynamic(() => import('@/libs/components/home/Comp2'), { suspense: true });
const Comp3 = dynamic(() => import('@/libs/components/home/Comp3'), { suspense: true });
const Comp4 = dynamic(() => import('@/libs/components/home/Comp4'), { suspense: true });
const Comp5 = dynamic(() => import('@/libs/components/home/Comp5'), { suspense: true });

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
