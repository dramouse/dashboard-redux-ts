import classNames from 'classnames'
import { CSSProperties, FC, PropsWithChildren } from 'react'
import { UIButtonProps } from './Button.interface'
import sass from './Button.module.sass'
import { useThemeClassName } from '../../../utils/hooks/useThemeClassName.hook'

/**
 * Стандартная кнопка UI библиотеки
 * @param stretch - для растягивания кнопки на всю ширину контейнера
 * @param onClick - пробросить колбэк для события click
 * @param style - можно прокинуть инлайн стили
 */
const UIButton: FC<PropsWithChildren<UIButtonProps>> = ({
  onClick,
  stretch = false,
  style = {},
  children,
}) => {
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])
  const inlineStyles: CSSProperties = { ...style }
  if (stretch) inlineStyles.width = '100%'

  return (
    <button
      onClick={onClick}
      className={classNames(sass['button'], themeClasses)}
      style={inlineStyles}
    >
      {children}
    </button>
  )
}

export default UIButton
