import { useLocation } from "react-router"
import { PagePath } from "routes"
import { useAppDispatch } from "store"
import { fetchTasks } from "store/kanban/kanban.actions"
import { fetchNotifications } from "store/notifications/notifications.actions"

export const useRefresher = (): [boolean, () => void] => {
  const location = useLocation()
  const dispatch = useAppDispatch()

  const refreshKanbanPage = () => {
    dispatch(fetchTasks())
    console.log('tsks refresh')
  }

  const refreshNotifications = () => {
    dispatch(fetchNotifications())
    console.log('history refresh')
  }

  const canRefresh = () => {
    return location.pathname === PagePath.KANABN ||
    location.pathname === PagePath.HISTORY
  }
  
  switch (location.pathname) {
    case PagePath.KANABN:
      return [canRefresh(), refreshKanbanPage]
    case PagePath.HISTORY:
      return [canRefresh(), refreshNotifications]
    default:
      return [false, () => {}]
  }

}
