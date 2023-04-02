import { HeroAttributes } from './hero'
import { Section } from './sectionComponents'
import { SeoAttributes } from './seo'

export interface HomeData {
  hero: HeroAttributes[]
  Sections: Section[]
  Seo: SeoAttributes[]
}
