import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL, INotification } from 'types/Server.types'

export const NOTIFICATIONS_PREFIX = 'notifications'

const fetchNotifications = createAsyncThunk(
  'notifications/fetch',
  async () => {
    return fetch(`${BASE_URL}/${NOTIFICATIONS_PREFIX}`).then(r => r.json())
  }
)

const addNotification = createAsyncThunk(
  'notifications/add',
  async (notification: INotification) => {}
)

const deleteNotification = createAsyncThunk(
  'notifications/delete',
  async (id: string) => {}
)

export {
  fetchNotifications,
  addNotification,
  deleteNotification
}
