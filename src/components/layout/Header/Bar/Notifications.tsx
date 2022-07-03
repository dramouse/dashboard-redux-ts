import { faBell, faSpinner } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { UIButton, UIText } from 'components/UI'
import UIIcon from 'components/UI/icon/Icon'
import { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import {
  fetchNotifications,
  NOTIFICATIONS_PREFIX,
} from 'store/notifications/notifications.actions'
import { setNotificationsLoading } from 'store/notifications/notifications.slice'
import { BASE_URL, INotification } from 'types/Server.types'
import { useThemeClassName } from 'utils'
import sass from './Notifications.module.sass'

interface HeaderBarNotificationsProps {
  list: INotification[]
}

const HeaderBarNotifications: FC<HeaderBarNotificationsProps> = ({
  list = [],
}) => {
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])
  const [showNotifications, setShowNotifications] = useState(false)
  const dispatch = useAppDispatch()
  const notificationsLoaded = useAppSelector(
    (state) => state.notificationsReducer.notificationsLoaded
  )
  const notSeenNotificationsCount = useAppSelector(
    (state) => state.notificationsReducer.notSeen
  )

  const toggleNotifications = () => {
    setShowNotifications((state) => !state)
  }

  const handleNotificationApply = (notification: INotification) => {
    dispatch(setNotificationsLoading())
    fetch(`${BASE_URL}/${NOTIFICATIONS_PREFIX}/${notification.id}`, {
      method: 'PUT',
      body: JSON.stringify(notification),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(() => {
        dispatch(fetchNotifications())
      })
      .catch((err) => {
        throw new Error(`Error occured. Message: ${err}`)
      })
  }

  const renderNotifications = (flag: boolean, list: INotification[] = []) => {
    if (!flag) {
      return (
        <div className={sass['notifications__status']}>
          <UIIcon icon={faSpinner} spin active />
        </div>
      )
    }

    const notClosedNotificationsList = list.filter((note) => !note.closed)

    if (!notClosedNotificationsList.length) {
      return (
        <div className={sass['notifications__status']}>
          <UIText>You have no unseen notifications</UIText>
        </div>
      )
    }

    return (
      <>
        {notClosedNotificationsList.map((note) => (
          <div
            key={note.id}
            className={classNames(sass['notifications__item'], themeClasses)}
          >
            <UIText style={{ marginBottom: 5 }}>{note.text}</UIText>
            <UIButton
              onClick={() => handleNotificationApply({ ...note, closed: true })}
              stretch
            >
              {note.applyText || 'ok'}
            </UIButton>
          </div>
        ))}
      </>
    )
  }

  return (
    <div className={sass['notifications']}>
      <button
        className={sass['notifications__btn']}
        onClick={toggleNotifications}
      >
        <UIIcon
          icon={faBell}
          style={{ fontSize: '18px' }}
          active={showNotifications}
        />
      </button>
      <div
        className={classNames(
          sass['notifications__window'],
          themeClasses,
          showNotifications && sass['_show']
        )}
      >
        <div
          className={classNames(sass['notifications__content'], themeClasses)}
        >
          {renderNotifications(notificationsLoaded, list)}
        </div>
      </div>
    </div>
  )
}

export default HeaderBarNotifications
