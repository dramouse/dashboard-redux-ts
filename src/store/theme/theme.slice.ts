import { createSlice } from '@reduxjs/toolkit'

export enum AppTheme {
  LIGHT = 'light',
  DARK = 'dark',
}

interface themeState {
  theme: AppTheme
}

const initialState = {theme: AppTheme.LIGHT} as themeState

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

const {reducer: themeReducer, actions} = themeSlice
const {toggleTheme} = actions

export {toggleTheme}
export default themeReducer
