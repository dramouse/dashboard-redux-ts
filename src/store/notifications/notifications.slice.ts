import { createSlice } from '@reduxjs/toolkit'
import { INotification } from 'types/Server.types'
import { addNotification, fetchNotifications } from './notifications.actions'

interface NotificationsState {
  notSeen: number
  list: INotification[]
  notificationsLoading: boolean
}

const initialState: NotificationsState = {
  notSeen: 0,
  list: [],
  notificationsLoading: false,
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotificationsLoading: (state) => {
      state.notificationsLoading = true
    },
    setNotificationsLoaded: (state) => {
      state.notificationsLoading = false
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNotifications.fulfilled, (state, action) => {
        state.list = action.payload
        const notSeenList = action.payload.filter(
          (note: INotification) => !note.closed
        )
        state.notSeen = notSeenList.length
        state.notificationsLoading = false
      })
      .addCase(fetchNotifications.rejected, (state) => {
        state.notificationsLoading = false
        throw new Error('Something went wrong while fetching notifications')
      })
      .addCase(fetchNotifications.pending, (state) => {
        state.notificationsLoading = true
      })
      .addCase(addNotification.fulfilled, (state, action) => {
        state.list.push(action.payload)
        state.notSeen++
      })
      .addCase(addNotification.rejected, (state, action) => {
        throw new Error(`Error occured while creating notification. Message: ${action.payload}`)
      })
  },
})

const { actions, reducer: notificationsReducer } = notificationsSlice
export const { setNotificationsLoaded, setNotificationsLoading } = actions
export default notificationsReducer
