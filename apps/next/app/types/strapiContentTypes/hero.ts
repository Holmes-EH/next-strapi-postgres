export interface HeroAttributes {
  id: number
  mainTitle: string
  heroImage: HeroImageData
  subTitle: string
}

interface HeroImageData {
  data: ImageDataFromApI
}

interface ImageDataFromApI {
  id: number
  attributes: ImageData
}

export interface ImageData {
  name: string
  alternativeText?: string
  caption?: string
  width: number
  height: number
  formats: ImageFormats[]
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl?: string
  createdAt: '2023-04-01T19:08:39.415Z'
  updatedAt: '2023-04-01T19:08:39.415Z'
}

interface ImageFormats {
  large: ImageFormatData
  small: ImageFormatData
  medium: ImageFormatData
  thumbnail: ImageFormatData
}

interface ImageFormatData {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path?: string
  size: number
  width: number
  height: number
}
