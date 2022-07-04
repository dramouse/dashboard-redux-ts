import classNames from 'classnames'
import { FC, PropsWithChildren } from 'react'
import { useLocation } from 'react-router-dom'
import { useThemeClassName } from 'utils/'
import { UITitle } from 'components/UI'
import SideMenuLink from './SideMenuLink'
import sass from './SideMenu.module.sass'
import { routes } from 'routes'
import UIIcon from 'components/UI/icon/Icon'
import { faCookieBite } from '@fortawesome/free-solid-svg-icons'
import { AppTitleOrder } from 'types/AppTheme.types'

const SideMenu: FC<PropsWithChildren<{}>> = ({ children }) => {
  const location = useLocation()
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])

  return (
    <div className={classNames(sass['side-menu'], themeClasses)}>
      <UITitle order={AppTitleOrder.H1} className={sass['side-menu__title']}>
        <UIIcon icon={faCookieBite} active style={{marginRight: 10}}/>
        MY<span style={{ fontWeight: 400 }}>AGILE</span>
      </UITitle>

      <nav className={sass['side-menu__navbar']}>
        <ul className='side-list'>
          {routes.map((route) => (
            <SideMenuLink
              key={route.path}
              to={route.path}
              icon={route.icon}
              caption={route.caption}
              active={route.path === location.pathname}
            />
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default SideMenu
