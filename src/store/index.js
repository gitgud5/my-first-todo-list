import { configureStore } from '@reduxjs/toolkit'
import { MenuReducer, ModalReducer, TaskReducer } from './slices'



export const store = configureStore({
  reducer: {
    menu:MenuReducer,
    modal: ModalReducer,
    tasks: TaskReducer
  },
})