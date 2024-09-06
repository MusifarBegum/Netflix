import React from 'react'
import useTrailerVideo from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux';
const VideoBackground = ({movieId}) => {
    
    const trailerVideo = useSelector((store)=> store.movies?.trailorVideo)
    

    useTrailerVideo(movieId);
  return (
    <div className='w-screen pt-[7%] md:pt-0 bg-black  md:bg-transparent'>
        <iframe className='w-screen aspect-video'  src={"https://www.youtube.com/embed/" + trailerVideo?.key +"?autoplay=1&mute=1"}
         title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" >
        </iframe>
    </div>
  )
}


export default VideoBackground