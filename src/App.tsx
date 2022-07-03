import classNames from 'classnames'
import { FC } from 'react'
import sass from './App.module.sass'
import { useThemeClassName } from './utils/'
import SideMenuWrapper from './components/layout/SideMenuWrapper/SideMenuWrapper'
import { Route, Routes } from 'react-router-dom'
import { UITitle } from './components/UI'

const App: FC = () => {
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])

  return (
    <div className={classNames(sass['app'], themeClasses)}>
      <SideMenuWrapper>
        <Routes>
          <Route path='/kanban' element={<UITitle>kanban</UITitle>} />
          <Route path='/dashboard' element={<UITitle>dashboard</UITitle>} />
          <Route path='*' element={<UITitle>404</UITitle>} />
        </Routes>
      </SideMenuWrapper>
    </div>
  )
}

export default App
