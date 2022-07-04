export enum TaskStatus {
  PENDING = 'pending',
  UPDATES = 'updates',
  ERRORS = 'errors',
  DONE = 'done'
}
export enum TaskSection {
  BACKLOG = 'backlog',
  PROGRESS = 'progress',
  DONE = 'done'
}

export const BASE_URL = 'http://localhost:3001'

/**
 * Задача доски kanban
 */
export interface IKanbanTask {
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
export interface IUser {
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

/**
 * Уведомление
 */
export interface INotification {
  id: string
  text: string
  closed: boolean
  applyText?: string
  date: string
}
