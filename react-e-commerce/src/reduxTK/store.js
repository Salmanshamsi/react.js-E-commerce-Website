import { configureStore } from '@reduxjs/toolkit'
import ModesHandler from './slices/ModesHandler'
import CartDisplay from './slices/CartDisplay'
import Login from './slices/Login'

export const store = configureStore({
  reducer: {
    ModesHandler,
    CartDisplay,
    Login
  },
})