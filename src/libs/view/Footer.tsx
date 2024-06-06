//libs
import { V, Spacing, Txt, TxtSpan } from '@/_ui'
import { MQ, colors, fontSize } from '@/libs/themes'
import Link from 'next/link'
//
interface MenuItem {
    name: string
    path: string
}

//
export default function Footer() {
    const menusLust: MenuItem[] = [
        { name: '메뉴1', path: '/404' },
        { name: '메뉴2', path: '/404' },
        { name: '메뉴3', path: '/404' },
        { name: '메뉴4', path: '/404' },
    ]

    return (
        <footer
            css={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: colors.chiffon[100],
                padding: '40px 20px 50px',
            }}
        >
            <V.Column maxWidth={1080}>
                <V.Items direction="horizontal" gap={30} crossGap={16} css={{ [MQ[3]]: { flexDirection: 'column' } }}>
                    {menusLust?.map((item: MenuItem, i: number) => (
                        <V.Item width="auto" padding={{ vertical: 5 }} key={i}>
                            <Link
                                href={item.path}
                                css={{
                                    fontSize: fontSize.s14,
                                    color: colors.grey[500],
                                }}
                            >
                                {item.name}
                            </Link>
                        </V.Item>
                    ))}
                </V.Items>

                <Spacing size={32} />

                <V.Container>
                    <TxtSpan size={14} weight="medium" color={colors.grey[500]}>
                        딥팩토리 디자인
                    </TxtSpan>

                    <Spacing size={14} />

                    <Txt size={13} color={colors.grey[300]}>
                        이메일 : deep@deepcomu.com | 연락처 : 0507-0178-1277
                    </Txt>
                    <Spacing size={4} />

                    <Txt size={13} color={colors.grey[300]}>
                        주소 : 서울특별시 영등포구 영중로 15 타임스퀘어 오피스A동 20층
                    </Txt>
                    <Spacing size={4} />

                    <Txt size={13} color={colors.grey[300]}>
                        사업자등록번호 : 110-412-598896 | 통신판매등록번호 : 2023-서울영등포-0900호
                    </Txt>
                </V.Container>
            </V.Column>
        </footer>
    )
}
