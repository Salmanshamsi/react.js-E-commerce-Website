import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const CartDiplaySlice = createSlice({
  name: 'CartDiplay',
  initialState,
  reducers: {
    CartDiplayHandler:(state, action)=>{
        state.value = action.payload
    }
  },
})

export const { CartDiplayHandler } = CartDiplaySlice.actions

export default CartDiplaySlice.reducer