import type { GetStaticProps } from 'next'
import type { ServicesProps } from '@/lib/queries/services/types'

import Title from '@/components/ui/title'
// import Text from '@/components/ui/text'
import { StructuredText } from 'react-datocms'
import { client } from '@/lib/client'
import ThreeColLayout from '@/components/hoc/threeColLayout'
import { Image } from 'react-datocms'

function Services({ prestationContent }: ServicesProps): JSX.Element {
  return (
    <>
      <Title text={prestationContent.title} />

      {prestationContent.services.map((service) => {
        return (
          <section className="service" key={service.id}>
            <div className="service_img">
              <div className="service_img_wrapper">
                <Image
                  data={service.photo.responsiveImage}
                  explicitWidth={true}
                  lazyLoad={false}
                  style={{
                    width: '100%',
                    border: 'none',
                    overflow: 'hidden',
                    display: 'block',
                  }}
                  pictureStyle={{
                    border: 'none',
                    width: '100%',
                    overflow: 'hidden',
                  }}
                />
              </div>
            </div>
            <ThreeColLayout>
              <div className="service_title">
                <h2>{service.title}</h2>
                <h3>{service.subTitle}</h3>
              </div>
              <div className="service_content">
                <StructuredText data={service.text as any} />
              </div>
              <div className="service_content">
                <StructuredText data={service.infos as any} />
              </div>
            </ThreeColLayout>
          </section>
        )
      })}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prestation = await client.getServices()
  const { layout, site } = await client.getLayout()

  return {
    props: {
      prestationContent: prestation,
      layoutContent: layout,
      siteContent: site,
      SEO: prestation._seoMetaTags,
    },
  }
}

export default Services
