import { FC, PropsWithChildren } from 'react'
import SideMenu from './Menu/SideMenu'
import sass from './SideMenuWrapper.module.sass'

const SideMenuWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={sass['side-wrapper']}>
      <SideMenu />
      <div className={sass['side-wrapper__page-content']}>
        <header>header</header>
        <div className={sass['side-wrapper__page-body']}>
          {children}
        </div>
          <footer>footer</footer>
      </div>
    </div>
  )
}

export default SideMenuWrapper
