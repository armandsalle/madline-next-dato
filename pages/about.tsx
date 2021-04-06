import type { GetStaticProps } from 'next'
import type { AboutProps } from '@/queries/about/types'

import SideImage from '@/components/ui/sideImage'
import Quote from '@/components/ui/quote'
import Title from '@/components/ui/title'
import Text from '@/components/ui/text'
import { client } from '@/lib/client'
import ThreeColLayout from '@/components/hoc/threeColLayout'

function About({ aboutContent }: AboutProps): JSX.Element {
  return (
    <>
      <Title text={aboutContent.title} />

      <ThreeColLayout>
        <SideImage image={aboutContent.photo.responsiveImage} />
        <Text>{aboutContent.text1}</Text>
        <Text>{aboutContent.text2}</Text>
      </ThreeColLayout>

      <Quote content={aboutContent.description} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { about } = await client.getAbout()
  const { layout, site } = await client.getLayout()

  return {
    props: {
      aboutContent: about,
      layoutContent: layout,
      siteContent: site,
      SEO: about._seoMetaTags,
    },
  }
}

export default About
