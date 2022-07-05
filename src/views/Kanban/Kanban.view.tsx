import PageLoader from 'components/UI/page-loader/PageLoader'
import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'store'
import { changeTask, fetchTasks } from 'store/kanban/kanban.actions'
import { IKanbanTask, TaskSection } from 'types/Server.types'
import { getNextTaskSection, getPrevTaskSection } from 'utils'
import sass from './Kanban.module.sass'
import KanbanSection from './section/KanbanSection'
import KanbanTask, { ChangeSectionRoute } from './task/KanbanTask'

const KanbanView: FC = () => {
  const dispatch = useAppDispatch()
  const tasksLoading = useAppSelector(
    (state) => state.kanbanReducer.tasksLoading
  )
  const tasksList = useAppSelector((state) => state.kanbanReducer.list)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  const changeTaskSection = (route: ChangeSectionRoute, id: string): void => {
    const task = tasksList.find((task) => task.id === id) as IKanbanTask
    let taskWithNewStatus = {} as IKanbanTask

    switch (route) {
      case 'next':
        taskWithNewStatus = {
          ...task,
          section: getNextTaskSection(task.section),
        }
        break
      case 'prev':
        taskWithNewStatus = {
          ...task,
          section: getPrevTaskSection(task.section),
        }
        break
    }

    dispatch(changeTask(taskWithNewStatus))
  }

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
            section={task.section}
            onSectionChange={changeTaskSection}
          />
        ))}
      </KanbanSection>
      <KanbanSection type={TaskSection.PROGRESS}>
        {progressTasksList.map((task) => (
          <KanbanTask
            key={task.id}
            id={task.id}
            description={task.description}
            executors={task.executors}
            status={task.status}
            title={task.title}
            section={task.section}
            onSectionChange={changeTaskSection}
          />
        ))}
      </KanbanSection>
      <KanbanSection type={TaskSection.DONE}>
        {doneTasksList.map((task) => (
          <KanbanTask
            key={task.id}
            id={task.id}
            description={task.description}
            executors={task.executors}
            status={task.status}
            title={task.title}
            section={task.section}
            onSectionChange={changeTaskSection}
          />
        ))}
      </KanbanSection>
    </div>
  )
}

export default KanbanView
