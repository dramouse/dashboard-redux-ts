import { createSlice } from '@reduxjs/toolkit'
import { INotification } from 'types/Server.types'
import { fetchNotifications } from './notifications.actions'

interface NotificationsState {
  notSeen: number
  list: INotification[]
  notificationsLoaded: boolean
}

const initialState: NotificationsState = {
  notSeen: 0,
  list: [],
  notificationsLoaded: false,
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotificationsLoading: (state) => {
      state.notificationsLoaded = false
    },
    setNotificationsLoaded: (state) => {
      state.notificationsLoaded = true
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
        state.notificationsLoaded = true
      })
      .addCase(fetchNotifications.rejected, (state) => {
        state.notificationsLoaded = true
        throw new Error('Something went wrong while fetching notifications')
      })
      .addCase(fetchNotifications.pending, (state) => {
        state.notificationsLoaded = false
      })
  },
})

const { actions, reducer: notificationsReducer } = notificationsSlice
export const { setNotificationsLoaded, setNotificationsLoading } = actions
export default notificationsReducer
