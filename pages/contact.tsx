import type { GetStaticProps } from 'next'
import type { ContactProps } from '@/queries/contact/types'

import SideImage from '@/components/ui/sideImage'
import Title from '@/components/ui/title'
import Text from '@/components/ui/text'
import { client } from '@/lib/client'
import ThreeColLayout from '@/components/hoc/threeColLayout'

function Contact({ contactContent }: ContactProps): JSX.Element {
  return (
    <>
      <Title text={contactContent.title} />

      <ThreeColLayout>
        <SideImage image={contactContent.photo.responsiveImage} />
        <Text>{contactContent.text}</Text>
      </ThreeColLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const contact = await client.getContact()
  const { layout, site } = await client.getLayout()

  return {
    props: {
      contactContent: contact,
      layoutContent: layout,
      siteContent: site,
      SEO: contact._seoMetaTags,
    },
  }
}

export default Contact
