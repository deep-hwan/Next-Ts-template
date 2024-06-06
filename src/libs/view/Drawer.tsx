/** @jsxImportSource @emotion/react */
import Link from 'next/link'

import { MQ, colors } from '../themes'
import { V, AppDrawer, TouchableOpacity, Txt } from '@/_ui'
import FlatList from 'react-flatlist-ui'

//atoms
import { useRecoilState } from 'recoil'
import { appDrawerAtom } from '../atoms/app-atom'

//
export const DrawerMenus = () => {
    const [isDrawer, setIsDrawer] = useRecoilState<boolean>(appDrawerAtom)

    return (
        <V.Container css={{ display: 'none', [MQ[1]]: { display: 'flex' } }}>
            <AppDrawer open={isDrawer} onCancel={() => setIsDrawer(false)}>
                <FlatList
                    data={[
                        { name: '메뉴1', path: '/404' },
                        { name: '메뉴2', path: '/404' },
                        { name: '메뉴3', path: '/404' },
                        { name: '메뉴4', path: '/404' },
                    ]}
                    keyExtractor={(i) => i}
                    renderItem={(item) => (
                        <Link href={item?.path} css={{ width: '100%' }}>
                            <TouchableOpacity align="center" padding={{ all: 10 }} borderRadius={14}>
                                <Txt>{item.name}</Txt>
                            </TouchableOpacity>
                        </Link>
                    )}
                    itemGap={10}
                    padding={{ top: 10, bottom: 40, horizontal: 10 }}
                />
            </AppDrawer>
        </V.Container>
    )
}
