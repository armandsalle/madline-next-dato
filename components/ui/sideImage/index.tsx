import { Image } from 'react-datocms'

interface ResponsiveImage {
  image: {
    srcSet: string
    webpSrcSet: string
    sizes: string
    src: string
    width: number
    height: number
    aspectRatio: number
    alt: string
    title: string
    bgColor: string
  }
}

const SideImage = ({ image }: ResponsiveImage): JSX.Element => {
  return (
    <div className="side-image">
      <Image
        data={image}
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
  )
}

export default SideImage
