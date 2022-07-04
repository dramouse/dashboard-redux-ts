import PageLoader from 'components/UI/page-loader/PageLoader'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { fetchTasks } from 'store/kanban/kanban.actions'
import { TaskSection } from 'types/Server.types'
import sass from './Kanban.module.sass'
import KanbanSection from './section/KanbanSection'

const KanbanView: FC = () => {
  const dispatch = useAppDispatch()
  const tasksLoading = useAppSelector(state => state.kanbanReducer.tasksLoading)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  if (tasksLoading) return <PageLoader />

  return (
    <div className={sass['kanban-desk']}>
      <KanbanSection type={TaskSection.BACKLOG} />
      <KanbanSection type={TaskSection.PROGRESS} />
      <KanbanSection type={TaskSection.DONE} />
    </div>
  )
}

export default KanbanView
