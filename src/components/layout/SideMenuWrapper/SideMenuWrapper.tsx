import { FC, PropsWithChildren } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import SideMenu from './Menu/SideMenu'
import sass from './SideMenuWrapper.module.sass'

const SideMenuWrapper: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={sass['side-wrapper']}>
      <SideMenu />
      <div className={sass['side-wrapper__page-content']}>
       <Header />
        <div className={sass['side-wrapper__page-body']}>
          {children}
        </div>
         <Footer/>
      </div>
    </div>
  )
}

export default SideMenuWrapper
