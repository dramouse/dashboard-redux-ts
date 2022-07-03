import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import { FC } from 'react'
import { useThemeClassName } from 'utils'
import sass from './Icon.module.sass'

interface UIIConProps {
  active: boolean
}

/**
 * Стандартная иконка UI библиотеки
 * @param active - маркер активности иконки
 * @returns 
 */
const UIIcon: FC<FontAwesomeIconProps & UIIConProps> = (props) => {
  // Для иконки из fontAwesome отсавляем только ее классические пропы,
  // убирая active
  const regularIconProps = {...props} as any
  delete regularIconProps.active

  // Сам проп active используем для определения css класса
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])
  const activeStateClasses = props.active ? sass['_active'] : sass['_disabled']
  // И пихаем это все в исходный массив классов
  const iconClassNames = classNames(
    sass['icon'],
    props.className,
    themeClasses,
    activeStateClasses
  )

  return (
    <FontAwesomeIcon
      {...regularIconProps}
      className={iconClassNames}
    />
  )
}

export default UIIcon
