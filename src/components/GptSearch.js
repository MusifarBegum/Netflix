import React from 'react'
import { NETFLIX_BG } from '../utilis/constants'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'

const GptSearch = () => {
  return (
   <div>
    <div className='fixed -z-10' >
   <img src={NETFLIX_BG} alt='SearchBg' className='h-screen w-screen md:w-auto md:h-auto'/>
   </div>
    <GptSearchBar/> 
    <GptMovieSuggestion/>  
   </div>
  )
}

export default GptSearch