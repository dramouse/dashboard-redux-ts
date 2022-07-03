import { CSSProperties } from "react"

export type TitleOrder = 1 | 2 | 3

export interface UITitleProps {
  order?: TitleOrder
  size?: number
  style?: CSSProperties
  className?: string
}