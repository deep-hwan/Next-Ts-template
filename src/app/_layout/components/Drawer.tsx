/** @jsxImportSource @emotion/react */
import Link from 'next/link'

import { MQ } from '../../../libs/themes'
import { V, AppDrawer, TouchableOpacity, Txt } from '@/_ui'

//atoms
import { useRecoilState } from 'recoil'
import { appDrawerAtom } from '../atoms/app-atom'

//
const Drawer = () => {
    const [isDrawer, setIsDrawer] = useRecoilState<boolean>(appDrawerAtom)

    return (
        <V.Column css={{ display: 'none', [MQ[1]]: { display: 'flex' } }}>
            <AppDrawer open={isDrawer} onCancel={() => setIsDrawer(false)}>
                <V.Items gap={10} padding={{ horizontal: 10 }}>
                    {[
                        { name: '메뉴1', path: '/404' },
                        { name: '메뉴2', path: '/404' },
                        { name: '메뉴3', path: '/404' },
                        { name: '메뉴4', path: '/404' },
                        { name: '메뉴5', path: '/404' },
                        { name: '메뉴6', path: '/404' },
                        { name: '메뉴7', path: '/404' },
                        { name: '메뉴8', path: '/404' },
                    ].map((item) => (
                        <V.Item>
                            <Link href={item?.path} css={{ width: '100%' }}>
                                <TouchableOpacity align="center" padding={{ all: 15 }} borderRadius={14}>
                                    <Txt>{item.name}</Txt>
                                </TouchableOpacity>
                            </Link>
                        </V.Item>
                    ))}
                </V.Items>
            </AppDrawer>
        </V.Column>
    )
}

export default Drawer
