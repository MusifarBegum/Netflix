import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryCointainer = () => {
const movies= useSelector(store=>store.movies);

  return (
    
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20"> 
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
      <MovieList title={"Top Rated Movies "} movies={movies?.topMovies}/>
      <MovieList title={"Up Coming Movies"} movies={movies?.upcomingMovies}/>
      </div>
        
    </div>
  )
}

export default SecondaryCointainer