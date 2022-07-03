import classNames from 'classnames'
import { CSSProperties, FC, PropsWithChildren } from 'react'
import { TITLE_FONT_SIZE } from 'utils/constants/style.constants'
import { useThemeClassName } from 'utils'
import { TitleOrder, UITitleProps } from './Title.interface'
import sass from './Title.module.sass'

/**
 * Стандартный заголовок UI библиотеки
 * @param {number} order - порядок заголовка
 * @param {number} size - размер заголовка в пикселях
 * @param {CSSProperties} style - свои css свойства
 */
const UITitle: FC<PropsWithChildren<UITitleProps>> = ({
  order = 3,
  style = {},
  size = TITLE_FONT_SIZE,
  className = '',
  children,
}) => {
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])
  const inlineStyles: CSSProperties = {
    ...style,
    fontSize: `${size}px`,
  }

  const renderTitle = (order: TitleOrder): JSX.Element => {
    switch (order) {
      case 1:
        return (
          <h1
            className={classNames(sass['title'], themeClasses, className)}
            style={inlineStyles}
          >
            {children}
          </h1>
        )
      case 2:
        return (
          <h2
            className={classNames(sass['title'], themeClasses, className)}
            style={inlineStyles}
          >
            {children}
          </h2>
        )
      case 3:
        return (
          <h3
            className={classNames(sass['title'], themeClasses, className)}
            style={inlineStyles}
          >
            {children}
          </h3>
        )
    }
  }

  return renderTitle(order)
}

export default UITitle
