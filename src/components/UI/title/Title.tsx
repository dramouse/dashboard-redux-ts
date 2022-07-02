import classNames from 'classnames'
import { CSSProperties, FC, PropsWithChildren } from 'react'
import { TITLE_FONT_SIZE } from '../../../utils/constants/style.constants'
import { useThemeClassName } from '../../../utils/hooks/useThemeClassName.hook'
import { TitleOrder, UITitleProps } from './Title.interface'
import sass from './Title.module.sass'

const UITitle: FC<PropsWithChildren<UITitleProps>> = ({
  order = 3,
  style = {},
  size = TITLE_FONT_SIZE,
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
            className={classNames(sass['title'], themeClasses)}
            style={inlineStyles}
          >
            {children}
          </h1>
        )
      case 2:
        return (
          <h2
            className={classNames(sass['title'], themeClasses)}
            style={inlineStyles}
          >
            {children}
          </h2>
        )
      case 3:
        return (
          <h3
            className={classNames(sass['title'], themeClasses)}
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
