import { createSlice } from '@reduxjs/toolkit'
import { sedan, suv, hashBack } from '../../assets/ModelData/ModelData';

const initialState = {
  data: suv,
  form: "visible",
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
        FilterMenuHandler:(state,action)=>{          
              
            if(action.payload == "suv"){
                state.data = suv;
            }else if(action.payload == "sedan"){
              state.data = sedan;
            }else if(action.payload == "hash-back"){
              state.data = hashBack;
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