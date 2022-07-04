import PageLoader from 'components/UI/page-loader/PageLoader'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { fetchTasks } from 'store/kanban/kanban.actions'
import { TaskSection } from 'types/Server.types'
import sass from './Kanban.module.sass'
import KanbanSection from './section/KanbanSection'
import KanbanTask from './task/KanbanTask'

const KanbanView: FC = () => {
  const dispatch = useAppDispatch()
  const tasksLoading = useAppSelector(
    (state) => state.kanbanReducer.tasksLoading
  )
  const tasksList = useAppSelector((state) => state.kanbanReducer.list)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  if (tasksLoading) return <PageLoader />

  const backlogTasksList = tasksList.filter(
    (task) => task.section === TaskSection.BACKLOG
  )
  const progressTasksList = tasksList.filter(
    (task) => task.section === TaskSection.PROGRESS
  )
  const doneTasksList = tasksList.filter(
    (task) => task.section === TaskSection.DONE
  )

  return (
    <div className={sass['kanban-desk']}>
      <KanbanSection type={TaskSection.BACKLOG}>
        {backlogTasksList.map((task) => (
          <KanbanTask
            key={task.id}
            id={task.id}
            description={task.description}
            executors={task.executors}
            status={task.status}
            title={task.title}
          />
        ))}
      </KanbanSection>
      <KanbanSection type={TaskSection.PROGRESS} />
      <KanbanSection type={TaskSection.DONE} />
    </div>
  )
}

export default KanbanView
