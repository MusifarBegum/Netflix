import React from 'react'
import { NETFLIX_BG } from '../utilis/constants'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
   <div>
    <div className='absolute -z-10' >
   <img src={NETFLIX_BG} alt='SearchBg'/>
   </div>
    <GptSearchBar/>   
   </div>
  )
}

export default GptSearch