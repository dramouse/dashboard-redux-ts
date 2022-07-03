import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useThemeClassName } from '../../../../utils/'
import { UITitle } from '../../../UI'
import UIIcon from '../../../UI/icon/Icon'
import sass from './SideMenuLink.module.sass'

export interface SideMenuLinkProps {
  icon: IconDefinition
  caption: string
  to: string
  active: boolean
}

const SideMenuLink: FC<SideMenuLinkProps> = ({ icon, caption, to, active }) => {
  const classNameByActiveState = active ? sass['_active'] : sass['_disabled']
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])
  return (
    <li className={sass['menu-item']}>
      <Link
        to={to}
        className={classNames(
          sass['menu-link'],
          classNameByActiveState,
          themeClasses
        )}
      >
        <UIIcon icon={icon} style={{ marginRight: '12px' }} active={active} />
        <UITitle size={16}>{caption}</UITitle>
      </Link>
    </li>
  )
}

export default SideMenuLink
