import { createAsyncThunk, nanoid } from '@reduxjs/toolkit'
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
  async (notification: {text: string, applyText: string} = {text: '', applyText: ''}) => {
    const note = {
      text: notification.text,
      applyText: notification.applyText,
      id: nanoid(),
      closed: false,
      date: new Date(Date.now()).toLocaleString(),
    }
    
    return fetch(`${BASE_URL}/${NOTIFICATIONS_PREFIX}`, {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then((r) => r.json())
  }
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
