import { faBell } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { UIButton, UIText, UITitle } from 'components/UI'
import UIIcon from 'components/UI/icon/Icon'
import PageLoader from 'components/UI/page-loader/PageLoader'
import { FC, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import {
  fetchNotifications,
  NOTIFICATIONS_PREFIX,
} from 'store/notifications/notifications.actions'
import {
  setNotificationsLoaded,
  setNotificationsLoading,
} from 'store/notifications/notifications.slice'
import { AppTitleOrder, AppTitleSize } from 'types/AppTheme.types'
import { BASE_URL, INotification } from 'types/Server.types'
import { useThemeClassName } from 'utils'
import sass from './Notifications.module.sass'

interface HeaderBarNotificationsProps {
  list: INotification[]
}

const HeaderBarNotifications: FC<HeaderBarNotificationsProps> = ({
  list = [],
}) => {
  const notificationsWindow = useRef(null)
  const themeClasses = useThemeClassName(sass['_light'], sass['_dark'])
  const [showNotifications, setShowNotifications] = useState(false)
  const notSeenCount = useAppSelector(
    (state) => state.notificationsReducer.notSeen
  )
  const notificationsLoading = useAppSelector(
    (state) => state.notificationsReducer.notificationsLoading
  )

  const dispatch = useAppDispatch()

  const toggleNotifications = () => {
    if (!showNotifications) {
      dispatch(fetchNotifications())
    }
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
        dispatch(setNotificationsLoaded())
        throw new Error(`Error occured. Message: ${err}`)
      })
  }

  const renderNotifications = (flag: boolean, list: INotification[] = []) => {
    if (!flag) return <PageLoader />

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
        {notClosedNotificationsList.reverse().map((note) => (
          <div
            key={note.id}
            className={classNames(sass['notifications__item'], themeClasses)}
          >
            <UIText size={10} style={{ textAlign: 'right' }}>
              {note.date}
            </UIText>
            <UIText style={{ marginBottom: 10 }}>{note.text}</UIText>
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
      {notSeenCount ? (
        <div className={sass['notifications__not-seen']}>
          <UITitle
            size={AppTitleSize.ICONIC}
            order={AppTitleOrder.H3}
            style={{ color: 'white' }}
          >
            {notSeenCount}
          </UITitle>
        </div>
      ) : (
        ''
      )}
      <div
        ref={notificationsWindow}
        className={classNames(
          sass['notifications__window'],
          themeClasses,
          showNotifications && sass['_show']
        )}
      >
        <div
          className={classNames(sass['notifications__content'], themeClasses)}
        >
          {renderNotifications(!notificationsLoading, list)}
        </div>
      </div>
    </div>
  )
}

export default HeaderBarNotifications
