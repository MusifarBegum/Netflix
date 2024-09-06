import { useCallback, useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import {  addTopRatedMovies } from '../utilis/movieSlice';

const useTopRatingMovies = () => {
      const dispatch = useDispatch();
    
      const getTopRatedMovies =useCallback( async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results))
    
      },[dispatch])
    useEffect(()=>{
        getTopRatedMovies();
    },[getTopRatedMovies])
    
    }
    

export default useTopRatingMovies