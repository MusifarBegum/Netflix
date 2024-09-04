import React from 'react'
import { POSTER_CDN_URL } from '../utilis/constants'

const MovieCard = ({poster}) => {
  return (
    <div className="w-36 md:w-48 pr-4">
     <img className='rounded-lg ' alt="poster" src={POSTER_CDN_URL+poster}/>
    </div>
  )
}

export default MovieCard