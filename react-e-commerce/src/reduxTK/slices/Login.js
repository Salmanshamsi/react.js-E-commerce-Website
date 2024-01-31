import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

export const LoginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    LoginDiplayHandler:(state, action)=>{
        state.isOpen = action.payload
    }
  },
})

export const { LoginDiplayHandler } = LoginSlice.actions

export default LoginSlice.reducer