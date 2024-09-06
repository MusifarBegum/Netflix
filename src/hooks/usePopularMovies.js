import  { useCallback, useEffect } from 'react'
import { API_OPTIONS } from '../utilis/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utilis/movieSlice';


const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies =useCallback( async ()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/popular?&page=1', API_OPTIONS);
  const json = await data.json();
  dispatch(addPopularMovies(json.results))

  },[dispatch]);
useEffect(()=>{
    getPopularMovies();
},[getPopularMovies])

}

export default usePopularMovies