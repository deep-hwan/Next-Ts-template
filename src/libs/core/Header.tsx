import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { Interpolation, Theme } from '@emotion/react';

//components
import { Drawer } from './Drawer';

//libs
import { AppBar, IconTab, Items, Item, Wrap, Row } from '@/@_ui_libs/_index';
import { borderRadius, fontSize, colors, MQ } from '@/libs/themes/_index';

//assets
import { LogoIcon, ToastIcon } from '@/libs/assets/icons';

//menu
import menus from '../json/menu.json';

//
export default function Header() {
  const [isDrawer, setIsDrawer] = useState<boolean>(false);
  const handleActiveDrawer = useCallback(() => setIsDrawer(!isDrawer), [isDrawer]);
  const handleCloseDrawer = useCallback(() => setIsDrawer(false), [isDrawer]);

  return (
    <>
      <AppBar width={1200}>
        <Row align="center" height="100%" crossAlign="space-between" padding={{ horizontal: 20 }}>
          <Link href="/" css={theme.logo as Interpolation<Theme>}>
            <LogoIcon alt="서비스명" width="100%" height="100%" />
          </Link>

          <Items
            direction="horizontal"
            width="auto"
            gap={30}
            align="center"
            crossAlign="center"
            css={{ [MQ[1]]: { display: 'none' } }}
          >
            {menus.map((item, i) => {
              return (
                <Item key={i} width="auto" align="center" crossAlign="center">
                  <Link href={item.path} css={theme.linkItem as Interpolation<Theme>}>
                    {item.name}
                  </Link>
                </Item>
              );
            })}
          </Items>

          <Wrap
            width="auto"
            height="100%"
            align="center"
            crossAlign="center"
            css={{ display: 'none', [MQ[1]]: { display: 'flex' } }}
          >
            <IconTab onClick={handleActiveDrawer} iconSize={24}>
              <ToastIcon fill="#555" width="100%" height="100%" />
            </IconTab>
          </Wrap>
        </Row>
      </AppBar>

      {/* 드로어 메뉴 */}
      <Drawer isDrawer={isDrawer} handleCloseDrawer={handleCloseDrawer} />
    </>
  );
}

// styled
const theme = {
  logo: {
    width: '100px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [MQ[1]]: {
      width: '84px',
    },
  },

  linkItem: {
    fontSize: fontSize.s15,
    padding: '0.8em',
    '&:hover': {
      backgroundColor: colors.ground100,
      borderRadius: borderRadius.s400,
    },
  },
};