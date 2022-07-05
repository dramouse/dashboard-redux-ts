import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL, IKanbanTask } from 'types/Server.types'

export const KANBAN_PREFIX = 'kanban'

export const fetchTasks = createAsyncThunk('kanban/fetch', async () => {
  return fetch(`${BASE_URL}/${KANBAN_PREFIX}`).then((r) => r.json())
})

export const changeTask = createAsyncThunk(
  'kanban/change',
  async (task: IKanbanTask) => {
    return fetch(`${BASE_URL}/${KANBAN_PREFIX}/${task.id}`, {
      method: 'PUT',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then((r) => r.json())
  }
)
