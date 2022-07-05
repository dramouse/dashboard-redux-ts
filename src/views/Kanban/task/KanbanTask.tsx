import {
  faLeftLong,
  faPen,
  faRightLong,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { UIText, UITitle } from 'components/UI'
import UIIcon from 'components/UI/icon/Icon'
import { FC } from 'react'
import { useAppDispatch } from 'store'
import { AppTitleOrder, AppTitleSize } from 'types/AppTheme.types'
import { BASE_URL, TaskSection, TaskStatus } from 'types/Server.types'
import { useThemeClassName } from 'utils'
import {
  fetchTasks,
  KANBAN_PREFIX,
} from 'store/kanban/kanban.actions'
import sass from './KanbanTask.module.sass'
import { setTasksLoaded, setTasksLoading } from 'store/kanban/kanban.slice'

export type ChangeSectionRoute = 'next' | 'prev'
interface KanbanTaskProps {
  id: string
  title: string
  description?: string
  executors?: string[]
  status: TaskStatus
  section: TaskSection
  onSectionChange(route: ChangeSectionRoute, id: string): void
}

const KanbanTask: FC<KanbanTaskProps> = ({
  id,
  title,
  description = 'heeeeh',
  executors = [],
  status,
  section,
  onSectionChange,
}) => {
  const themeCLasses = useThemeClassName(sass['_light'], sass['_dark'])
  const dispatch = useAppDispatch()

  const handleTaskDelete = (id: string) => {
    dispatch(setTasksLoading())
    fetch(`${BASE_URL}/${KANBAN_PREFIX}/${id}`, {
      method: 'DELETE',
    })
      .then(() => dispatch(fetchTasks()))
      .catch((e) => {
        dispatch(setTasksLoaded())
        throw new Error('Error occured while fetching tasks')
      })
  }

  return (
    <div className={classNames(sass['task'], themeCLasses)}>
      <div className={sass['task__header']}>
        <UITitle size={AppTitleSize.S} order={AppTitleOrder.H3}>
          {title}
        </UITitle>
        <button className={sass['task__edit-btn']}>
          <UIIcon icon={faPen} active={false} />
        </button>
      </div>
      <div className={sass['task__description']}>
        <UIText>{description}</UIText>
      </div>
      <div className={sass['task__controls']}>
        <div>{executors}</div>
        <div>
          <button
            onClick={() => handleTaskDelete(id)}
            className={sass['task__control-btn']}
          >
            <UIIcon icon={faTrashCan} active />
          </button>
          <button
            onClick={() => onSectionChange('prev', id)}
            className={sass['task__control-btn']}
            disabled={section === TaskSection.BACKLOG}
          >
            <UIIcon
              icon={faLeftLong}
              active={section !== TaskSection.BACKLOG}
            />
          </button>
          <button
            onClick={() => onSectionChange('next', id)}
            className={sass['task__control-btn']}
            disabled={section === TaskSection.DONE}
          >
            <UIIcon icon={faRightLong} active={section !== TaskSection.DONE} />
          </button>
        </div>
        <div
          className={classNames(
            sass['task__status-bar'],
            themeCLasses,
            sass[`_${status}`]
          )}
        >
          {status.toUpperCase()}
        </div>
      </div>
    </div>
  )
}

export default KanbanTask
