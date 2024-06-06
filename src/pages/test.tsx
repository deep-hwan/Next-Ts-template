import { Input, V } from '@/_ui'
import { ChatField } from '@/_ui/Input/ChatField'
import React, { useRef, useState } from 'react'

export default function Test() {
    const [isValuse, setIsValue] = useState('')
    const ref = useRef(null)

    return (
        <V.Column padding={{ all: 40 }}>
            {/* <Input label="asdsad" labelColor="#000" important="asdad">
                <Input.TextField
                    value={isValuse}
                    onChange={(e) => setIsValue(e.target.value)}
                    placeholder="asd"
                    error={{ error: false, message: 'asadasdasd' }}
                    tolTip={{ description: 'asdasdasdad', size: 13, color: '#797979' }}
                    tab={{ name: '저장', onClick: () => {}, color: 'red', size: 10 }}
                    themes={{
                        focus: { backgroundColor: 'none' },
                    }}
                />
            </Input>

            <Input.SearchField placeholder="asd" tab={{ name: '검색' }} /> */}

            <ChatField
                ref={ref}
                placeholder="채팅입력 ..."
                value={isValuse}
                onChange={(e) => setIsValue(e.target.value)}
                uploadTab={{
                    loading: false,
                    onClick: () => alert('a'),
                }}
                fileTab={{
                    loading: false,
                    onChange: (e) => {
                        console.log(e.target.value)
                    },
                }}
            />
        </V.Column>
    )
}
