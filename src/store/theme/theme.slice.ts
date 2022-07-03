import { createSlice } from '@reduxjs/toolkit'
import { AppTheme } from '../../types/AppTheme.types'

interface themeState {
  theme: AppTheme
}

const theme = localStorage.getItem('theme') || AppTheme.LIGHT
const initialState = { theme } as themeState

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === AppTheme.LIGHT) {
        state.theme = AppTheme.DARK
      } else {
        state.theme = AppTheme.LIGHT
      }
    },
  },
})

const { reducer: themeReducer, actions } = themeSlice
const { toggleTheme } = actions

export { toggleTheme }
export default themeReducer
