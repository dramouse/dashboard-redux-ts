import classNames from 'classnames'
import { CSSProperties, FC, PropsWithChildren } from 'react'
import { UITextProps } from './Text.interface'
import sass from './Text.module.sass'
import { useThemeClassName } from '../../../utils/hooks/useThemeClassName.hook'
import { TEXT_FONT_SIZE } from '../../../utils/constants/style.constants'

/**
 * Стандартный текст UI библиотеки
 * @param {number} size - font-size текста (16px по умолчанию)
 * @param {number} weight - font-weight текст (400 по умолчанию)
 * @param {CSSProperties} style - возможно прокинуть любые css стили
 * @returns
 */
const UIText: FC<PropsWithChildren<UITextProps>> = ({
  size = TEXT_FONT_SIZE,
  style = {},
  children,
}) => {
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])
  const inlineStyles: CSSProperties = {
    ...style,
    fontSize: `${size}px`,
  }

  return (
    <p className={classNames(sass['text'], themeClasses)} style={inlineStyles}>
      {children}
    </p>
  )
}

export default UIText
