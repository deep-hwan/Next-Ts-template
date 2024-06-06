//libs
import { V, Spacing } from '@/_ui/index'
import { screenSize } from '@/libs/themes'

//components
import SEO from '@/seo.config'
import Comp1 from '@/libs/components/home/Comp1'
import Comp2 from '@/libs/components/home/Comp2'
import Comp3 from '@/libs/components/home/Comp3'
import Comp4 from '@/libs/components/home/Comp4'
import Comp5 from '@/libs/components/home/Comp5'

//
export default function Index() {
    return (
        <>
            <SEO />

            <V.Section>
                <V.Container flex={1} maxWidth={screenSize[3]} padding={{ top: 30, bottom: 70, horizontal: 20 }}>
                    <Comp1 />
                    <Spacing size={12} />
                    <Comp2 />
                    <Spacing size={54} />
                    <Comp3 />
                    <Spacing size={44} />
                    <Comp4 />
                    <Spacing size={44} />
                    <Comp5 />
                </V.Container>
            </V.Section>
        </>
    )
}
