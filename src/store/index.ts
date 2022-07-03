import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import themeReducer from './theme/theme.slice'
import notificationsReducer from './notifications/notifications.slice'

export const store = configureStore({
  reducer: { themeReducer, notificationsReducer },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (defMW) => defMW(),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
