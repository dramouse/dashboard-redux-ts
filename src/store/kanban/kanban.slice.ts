import { createSlice } from '@reduxjs/toolkit'
import { IKanbanTask } from 'types/Server.types'
import { fetchTasks } from './kanban.actions'

interface KanbanState {
  list: IKanbanTask[]
  tasksLoading: boolean
}

const initialState: KanbanState = {
  list: [],
  tasksLoading: false,
}

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state, action) => {
        state.tasksLoading = true
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.list = action.payload
        state.tasksLoading = false
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.tasksLoading = false
        throw new Error(`Error occured while fetching tasks`)
      })
  },
})

const { actions, reducer: kanbanReducer } = kanbanSlice

export const {} = actions
export default kanbanReducer
