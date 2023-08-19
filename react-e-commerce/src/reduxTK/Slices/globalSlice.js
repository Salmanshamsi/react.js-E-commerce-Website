import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    cartHandler : (state,action)=>{
          state.value = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { cartHandler } = counterSlice.actions

export default counterSlice.reducer