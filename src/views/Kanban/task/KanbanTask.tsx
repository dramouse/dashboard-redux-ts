import { UITitle } from 'components/UI'
import { FC } from 'react'
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
  status
}) => {
  return (
    <div>
      <UITitle size={18}>{title}</UITitle>
    </div>
  )
}
