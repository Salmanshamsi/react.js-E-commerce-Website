import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const ModeHandlerSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    modeHandler:(state, action)=>{
        state.value = action.payload
    }
  },
})

export const { modeHandler } = ModeHandlerSlice.actions

export default ModeHandlerSlice.reducer