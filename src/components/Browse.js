import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryCointainer from './SecondaryCointainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatingMovies from '../hooks/useTopRatingMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatingMovies();
  useUpComingMovies();

  const showSearch = useSelector((store) => store?.gpt?.gptSearch);

  console.log(showSearch);
  
  return (
    <div >
      <Header/>
      {showSearch? <GptSearch/> : 
      <> <MainContainer/>
      <SecondaryCointainer/></>
      }
     
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