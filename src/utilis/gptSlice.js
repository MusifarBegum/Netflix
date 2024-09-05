import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice ({
    name:"GPT",
    initialState:{
    gptSearch:false,
    },

    reducers:{
        toggleGptSearchView:(state)=>{
           state.gptSearch = !state.gptSearch;
        },
       
        

    }
})


export  const {toggleGptSearchView,toggleShowTrailer} = gptSlice.actions;
export default gptSlice.reducer;
