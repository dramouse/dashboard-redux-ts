import { faBars, faHouse, faTableColumns } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from '../../../../store'
import { toggleTheme } from '../../../../store/theme/theme.slice'
import { Pages } from '../../../../types/Pages.types'
import { useThemeClassName } from '../../../../utils/'
import { UITitle } from '../../../UI'
import SideMenuLink from './SideMenuLink'
import sass from './SideMenu.module.sass'

const SideMenu: FC<PropsWithChildren<{}>> = ({ children }) => {
  const location = useLocation()
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])

  return (
    <div className={classNames(sass['side-menu'], themeClasses)}>
      <UITitle order={1} className={sass['side-menu__title']}>
        DASH<span style={{ fontWeight: 400 }}>BOARD</span>
      </UITitle>

      <nav className={sass['side-menu__navbar']}>
        <ul className='side-list'>
          <SideMenuLink
            to='/dashboard'
            icon={faHouse}
            caption={Pages.DASH}
            active={location.pathname === '/dashboard'}
          />
          <SideMenuLink
            to='/kanban'
            icon={faTableColumns}
            caption={Pages.KANBAN}
            active={location.pathname === '/kanban'}
          />
        </ul>
      </nav>
    </div>
  )
}

export default SideMenu
