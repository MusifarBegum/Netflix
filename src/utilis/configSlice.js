import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name:"config",
    initialState:{
      lang:"en",
      searchText : null,
    },

    reducers:{
       changeLanguage:(state,action)=>{
         state.lang= action.payload;
       },
       addSearchText:(state,action)=>{
        state.searchText= action.payload;
      }
    }
})


export const {changeLanguage,addSearchText} = configSlice.actions
export default configSlice.reducer