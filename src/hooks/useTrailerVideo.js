import { useCallback, useEffect } from 'react'

import { API_OPTIONS } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { addTrailorVideo } from '../utilis/movieSlice';


const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
  
    const getMovieBackground =useCallback( async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
    const json = await data.json();
    const filterData = json.results.filter((video)=> video.type === "Trailer");
    const trailer = filterData.length?filterData[0]:json.results[0];
    dispatch(addTrailorVideo(trailer));
    },[dispatch,movieId]);
useEffect(()=>{
    getMovieBackground()
},[getMovieBackground])

}

export default useTrailerVideo