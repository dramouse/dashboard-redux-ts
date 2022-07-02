import classNames from 'classnames'
import { FC } from 'react'
import UIButton from './components/UI/button/Button'
import { useAppDispatch } from './store'
import { toggleTheme } from './store/theme/theme.slice'
import sass from './App.module.sass'
import { useThemeClassName } from './utils/hooks/useThemeClassName.hook'
import { UIText, UITitle } from './components/UI'

const App: FC = () => {
  const dispatch = useAppDispatch()
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])

  const changeTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className={classNames(sass['app'], themeClasses)}>
      <UIButton onClick={changeTheme}>Привет</UIButton>
      <UIText size={16}>Какой-то текст</UIText>
      <UITitle order={1}>Какой-то заголовок первого порядка</UITitle>
      <UITitle order={2}>Какой-то заголовой второго порядка</UITitle>
      <UITitle>А тут по дефолту 3 ордер</UITitle>
    </div>
  )
}

export default App
