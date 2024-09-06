import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies :null,
        trailorVideo: null,
        popularMovies: null,
        topMovies: null,
        upcomingMovies : null,
        searchResults: null,
    },
    reducers:{
        addnowPlayingMovies:(state,action)=>{
           state.nowPlayingMovies = action.payload;
        },
        addTrailorVideo:(state,action)=>{
           state.trailorVideo = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
         },
         addTopRatedMovies:(state,action)=>{
            state.topMovies = action.payload;
         },
         addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
         },
         addSearchMovies:(state,action)=>{
            state.searchResults = action.payload;
         }
         
       
    }
});

export const {addnowPlayingMovies,addTrailorVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addSearchMovies,addMovieTrailerVideo,addPosterTrailer} =movieSlice.actions;
export default movieSlice.reducer;
