import { UITitle } from 'components/UI'
import { FC } from 'react'
import { useLocation } from 'react-router-dom'
import { routes } from 'routes'
import { AppTitleOrder, AppTitleSize } from 'types/AppTheme.types'
import HeaderBar from './Bar/HeaderBar'
import sass from './Header.module.sass'

const Header: FC = () => {
  const location = useLocation()
  const relatedRoute = routes.find(item => item.path === location.pathname)
  return (
    <header className={sass['header']}>
      <UITitle size={AppTitleSize.L} order={AppTitleOrder.H1} style={{display: 'flex', alignItems: 'center'}}>
        {relatedRoute?.caption || 'Not found'}
      </UITitle>
      <HeaderBar/>
    </header>
  )
}

export default Header