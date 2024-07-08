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

                <address id="address" css={{ fontStyle: 'normal', fontSize: 13, color: '#888' }}>
                    <Txt as="strong" size={14} weight="medium" color={colors.grey[500]}>
                        딥팩토리 디자인
                    </Txt>
                    <Spacing size={14} />
                    <V.Row gap={8}>
                        <a href="mailto:deep@deepcomu.com" css={{ color: '#888' }}>
                            이메일 : deep@deepcomu.com
                        </a>
                        <span>|</span>
                        <a href="tel:07040077561" css={{ color: '#888' }}>
                            연락처 : 070-4007-7561
                        </a>
                    </V.Row>
                    <Spacing size={4} />
                    주소 : 서울특별시 동작구 시흥대로 606 오피스동 354호
                </address>
            </V.Column>
        </footer>
    )
}
