import { createSlice } from '@reduxjs/toolkit'
import { IKanbanTask } from 'types/Server.types'
import { changeTask, fetchTasks } from './kanban.actions'

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
  reducers: {
    setTasksLoading: (state) => {
      state.tasksLoading = true
    },
    setTasksLoaded: (state) => {
      state.tasksLoading = false
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.tasksLoading = true
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.list = action.payload
        state.tasksLoading = false
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.tasksLoading = false
        throw new Error(`Error occured while fetching tasks`)
      })
      .addCase(changeTask.pending, (state) => {
        state.tasksLoading = true
      })
      .addCase(changeTask.fulfilled, (state, action) => {
        const newTask = action.payload
        const newTaskList = state.list.filter(task => task.id !== newTask.id)
        newTaskList.push(newTask)
        state.list = newTaskList
        state.tasksLoading = false
      })
      .addCase(changeTask.rejected, (state) => {
        state.tasksLoading = false
        throw new Error('Error occured while fetching tasks')
      })
  },
})

const { actions, reducer: kanbanReducer } = kanbanSlice

export const { setTasksLoaded, setTasksLoading } = actions
export default kanbanReducer
