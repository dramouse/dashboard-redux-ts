import classNames from 'classnames'
import { FC } from 'react'
import sass from './App.module.sass'
import { useThemeClassName } from './utils/'
import SideMenuWrapper from 'components/layout/SideMenuWrapper/SideMenuWrapper'
import { Navigate, Route, Routes } from 'react-router-dom'
import { UITitle } from 'components/UI'
import Page404 from 'views/404/404'
import KanbanView from 'views/Kanban/Kanban.view'

const App: FC = () => {
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])

  return (
    <div className={classNames(sass['app'], themeClasses)}>
      <SideMenuWrapper>
        <Routes>
          <Route path='/' element={<Navigate to='/kanban' replace />} />
          <Route path='/kanban' element={<KanbanView/>} />
          <Route path='/dashboard' element={<UITitle>dashboard</UITitle>} />
          <Route path='/history' element={<UITitle>history</UITitle>} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </SideMenuWrapper>
    </div>
  )
}

export default App
