import { CSSProperties } from "react"

export interface UIButtonProps {
  onClick?: () => void
  style?: CSSProperties
  stretch?: boolean
  grey?:boolean
}