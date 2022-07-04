import { UITitle } from 'components/UI'
import { FC } from 'react'
import { AppTitleOrder, AppTitleSize } from 'types/AppTheme.types'
import { TaskStatus } from 'types/Server.types'

interface KanbanTaskProps {
  id: string
  title: string
  description: string
  executors: string[]
  status: TaskStatus
}

const KanbanTask: FC<KanbanTaskProps> = ({
  id,
  title,
  description,
  executors,
  status,
}) => {
  return (
    <div>
      <UITitle size={AppTitleSize.S} order={AppTitleOrder.H3}>
        {title}
      </UITitle>
    </div>
  )
}
