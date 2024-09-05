import React from 'react'
import { POSTER_CDN_URL } from '../utilis/constants'



const MovieCard = ({poster}) => {
  if (!poster) return null;

 
  return (
    
    <div className="w-36 md:w-48 pr-4 transform transition-transform duration-300 hover:scale-110">
      
      <img className='rounded-lg ' alt="poster" src={POSTER_CDN_URL+poster}/>
        
      </div>
      
    
   
  )
}

export default MovieCard