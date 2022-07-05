import classNames from 'classnames'
import { CSSProperties, FC, PropsWithChildren } from 'react'
import { UIButtonProps } from './Button.interface'
import sass from './Button.module.sass'
import { useThemeClassName } from 'utils'

/**
 * Стандартная кнопка UI библиотеки
 * @param {boolean} stretch - для растягивания кнопки на всю ширину контейнера
 * @param {Function} onClick - пробросить колбэк для события click
 * @param {CSSProperties} style - можно прокинуть инлайн стили
 * @param {boolean} grey - кнопка серого стиля (как "добавить" в канбан доске)
 * @param {number} paddingX - можно задать свой паддинг по X
 */
const UIButton: FC<PropsWithChildren<UIButtonProps>> = ({
  onClick,
  stretch = false,
  style = {},
  children,
  grey,
  paddingX,
}) => {
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])
  const greyStyle = grey ? sass['_grey'] : ''
  const inlineStyles: CSSProperties = { ...style }
  if (paddingX) inlineStyles.padding = `5px ${paddingX}px`
  if (stretch) inlineStyles.width = '100%'

  return (
    <button
      onClick={onClick}
      className={classNames(sass['button'], themeClasses, greyStyle)}
      style={inlineStyles}
    >
      {children}
    </button>
  )
}

export default UIButton
