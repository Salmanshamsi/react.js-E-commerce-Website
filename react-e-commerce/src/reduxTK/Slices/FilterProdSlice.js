import { createSlice } from '@reduxjs/toolkit'
import { shirts,hoodies,pants } from '../../assets/ModelData/ModelData';

const initialState = {
  data: shirts,
  form: "visible",
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
        FilterMenuHandler:(state,action)=>{          
              
            if(action.payload == "Shirts"){
                state.data = shirts;
            }else if(action.payload == "Hoodies"){
              state.data = hoodies;
            }else if(action.payload == "Pants"){
              state.data = pants;
            }   
        },
        formHandler:(state,action)=>{          
              state.form = action.payload   
      }
  },
})

// Action creators are generated for each case reducer function
export const { FilterMenuHandler, formHandler } = productSlice.actions

export default productSlice.reducer;