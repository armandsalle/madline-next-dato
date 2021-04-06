export interface Photo {
  responsiveImage: ResponsiveImage
}

export interface ResponsiveImage {
  srcSet: string
  webpSrcSet: string
  sizes: Sizes
  src: string
  width: number
  height: number
  aspectRatio: number
  alt: string
  title: string
  bgColor: string
}

export enum Sizes {
  MaxWidth840Px100Vw840Px = '(max-width: 840px) 100vw, 840px',
}
