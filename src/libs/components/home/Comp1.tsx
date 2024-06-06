//libs
import { Txt, V, Avatar } from '@/_ui'
import { colors } from '@/libs/themes'

//
export default function Comp2() {
    return (
        <V.Container
            padding={{ all: 14 }}
            shadow={{ x: 0, y: 2, blur: 20, color: 'rgba(0,0,0,0.1)' }}
            borderRadius={16}
        >
            <V.Row gap={12} align="center">
                <Avatar
                    source="https://imagedelivery.net/vJSpkH6oHM7zquolzolo7A/77550435-1cc9-4b42-4519-3cd83f149b00/public"
                    alt="템플릿"
                    size={40}
                />
                <V.Column gap={3} align="start">
                    <Txt as="strong" size={17}>
                        위젯 템플릿
                    </Txt>
                    <Txt size={13} color={colors.grey[300]}>
                        위젯으로 빠른 개발을 경험해봐요 🥰
                    </Txt>
                </V.Column>
            </V.Row>
        </V.Container>
    )
}
