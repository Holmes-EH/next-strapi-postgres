export interface Section {
  id: number
  __component: string
  sectionComponents: SectionComponents
}

interface SectionComponents {
  id: number
  title: string
  description: string
  dominantColor: string
}
