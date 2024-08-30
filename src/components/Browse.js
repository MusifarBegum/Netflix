import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
const Browse = () => {

  useNowPlayingMovies();
  return (
    <div >
      <Header/>
      <MainContainer/>

      {/* {
        MainContainer 
         -videoTitle
         -VideoBackground
        
         Secondary Container
          movies cards*n 
      
      } */}
    </div>
  )
}

export default Browse