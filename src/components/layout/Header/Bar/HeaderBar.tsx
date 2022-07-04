import { faCircleInfo, faMoon } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import UIIcon from 'components/UI/icon/Icon'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { addNotification, fetchNotifications } from 'store/notifications/notifications.actions'
import { toggleTheme } from 'store/theme/theme.slice'
import { AppTheme } from 'types/AppTheme.types'
import { useAppTheme, useThemeClassName } from 'utils'
import sass from './HeaderBar.module.sass'
import HeaderBarNotifications from './Notifications'

const HeaderBar: FC = () => {
  const theme = useAppTheme()
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])
  const dispatch = useAppDispatch()

  const notificationsList = useAppSelector(
    (state) => state.notificationsReducer.list
  )

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  useEffect(() => {
    dispatch(fetchNotifications())
  }, [dispatch])

  return (
    <div className={classNames(sass['header-bar'], themeClasses)}>
      <HeaderBarNotifications list={notificationsList} />
      <button className={sass['header-bar__btn']} onClick={handleThemeToggle}>
        <UIIcon
          icon={faMoon}
          style={{ fontSize: '18px' }}
          active={theme === AppTheme.DARK}
        />
      </button>
      {/* <button onClick={addNote} className={sass['header-bar__btn']}>
        <UIIcon
          icon={faCircleInfo}
          style={{ fontSize: '18px' }}
          active={false}
        />
      </button> */}
    </div>
  )
}

export default HeaderBar
