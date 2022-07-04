import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from 'types/Server.types'

const KANBAN_PREFIX = 'kanban'

export const fetchTasks = createAsyncThunk('kanban/fetch', async () => {
  return fetch(`${BASE_URL}/${KANBAN_PREFIX}`).then(r => r.json())
})
