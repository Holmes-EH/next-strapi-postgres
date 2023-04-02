export interface Section1Attributes {
  title: string
  description: string
  dominantColor: DominantColor
}

interface DominantColor {
  type: string
  regex: string
  customField: string
}
