import  { useCallback, useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import {  addUpcomingMovies } from '../utilis/movieSlice';

const useUpComingMovies = () => {
      const dispatch = useDispatch();
    
      const getTopRatedMovies =useCallback( async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results))
    
      },[dispatch]);
    useEffect(()=>{
        getTopRatedMovies();
    },[getTopRatedMovies])
    
    }
    

export default useUpComingMovies


