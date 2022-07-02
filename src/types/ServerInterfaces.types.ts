type TaskStatus = 'pending' | 'updates' | 'errors' | 'done'
type TaskSection = 'backlog' | 'progress' | 'done'

/**
 * Задача доски kanban
 */
export interface KanbanTask {
  id: string
  title: string
  description?: string
  img?: string
  status: TaskStatus
  section: TaskSection
  created: string
  done: string
  creator: string
  executors: string[]
}

/**
 * Пользователь
 */
export interface User {
  id: string
  name: string
  surname: string
  status: string
  phone: string
  position: string
  department: string
  activity: string
  tasks: string[]
}
