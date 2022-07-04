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
import { AppTitleOrder, AppTitleSize } from 'types/AppTheme.types'
import { TaskStatus } from 'types/Server.types'
import { useThemeClassName } from 'utils'
import sass from './KanbanTask.module.sass'

interface KanbanTaskProps {
  id: string
  title: string
  description?: string
  executors?: string[]
  status: TaskStatus
}

const KanbanTask: FC<KanbanTaskProps> = ({
  id,
  title,
  description = 'heeeeh',
  executors = [],
  status,
}) => {
  const themeCLasses = useThemeClassName(sass['_light'], sass['_dark'])

  return (
    <div className={classNames(sass['task'], themeCLasses)}>
      <div className={sass['task__header']}>
        <UITitle
          size={AppTitleSize.S}
          order={AppTitleOrder.H3}
        >
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
          <button className={sass['task__control-btn']}>
            <UIIcon icon={faTrashCan} active />
          </button>
          <button className={sass['task__control-btn']}>
            <UIIcon icon={faLeftLong} active />
          </button>
          <button className={sass['task__control-btn']}>
            <UIIcon icon={faRightLong} active />
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
