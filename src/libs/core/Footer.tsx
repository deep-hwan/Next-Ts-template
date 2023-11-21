import React from 'react';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

// json
import menus from '../json/menu.json';

//libs
import { MQ, fontSize, colors } from '@/libs/themes/_index';
import { Column, Item, Items, LinkHref, Spacing, Txt, TxtSpan, Wrap } from '@/_ui_libs/_index';

//
interface MenuItem {
  name: string;
  path: string;
}

//
export default function Footer() {
  const menusLust: MenuItem[] = menus;

  return (
    <footer
      css={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.grey000,
        padding: '40px 20px 50px',
      }}
    >
      <Column maxWidth={1080}>
        <Items
          direction="horizontal"
          gap={30}
          crossGap={16}
          css={{ [MQ[3]]: { flexDirection: 'column' } }}
        >
          {menusLust?.map((item: MenuItem, i: number) => (
            <Item width="auto" padding={{ vertical: 5 }} key={i}>
              <LinkHref a={item.path} txtSize={14} colors={{ txt: colors.grey700 }}>
                {item.name}
              </LinkHref>
            </Item>
          ))}
        </Items>

        <Spacing size={32} />

        <Wrap>
          <TxtSpan size={14} weight="medium" color={colors.grey800}>
            딥팩토리 디자인
          </TxtSpan>

          <Spacing size={14} />

          <Txt size={13} color={colors.grey500}>
            이메일 : deep@deepcomu.com | 연락처 : 0507-0178-1277
          </Txt>
          <Spacing size={4} />

          <Txt size={13} color={colors.grey500}>
            주소 : 서울특별시 영등포구 영중로 15 타임스퀘어 오피스A동 20층
          </Txt>
          <Spacing size={4} />

          <Txt size={13} color={colors.grey500}>
            사업자등록번호 : 110-412-598896 | 통신판매등록번호 : 2023-서울영등포-0900호
          </Txt>
        </Wrap>
      </Column>
    </footer>
  );
}
