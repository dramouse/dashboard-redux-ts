import { createSlice } from '@reduxjs/toolkit'
import { ReactNode } from 'react'
import {UITitle} from 'components/UI'
import { useAppDispatch } from 'store'

interface ModalState {
  content: ReactNode
  show: boolean
}

const initialState: ModalState = {
  content: null,
  show: true,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalVisible: (state, action) => {
      if (action.payload) state.show = true
      if (!action.payload) state.show = false
    },
    setModalContent: (state, action) => {
      state.content = action.payload
    },
  },
})

const { actions, reducer: modalReducer } = modalSlice

export const { setModalVisible, setModalContent } = actions
export default modalReducer
