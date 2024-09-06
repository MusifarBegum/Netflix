import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video md:pt-[20%] lg:pt-[18%] px-12 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='w-1/4 md:text-3xl font-bold py-2'>{title}</h1>
      <p className='md: hidden lg:block md:py-6 text-sm w-1/4'>{overview}</p>
      <div className='pt-2'>
        <button className='px-12  p-4 bg-white text-black rounded-lg text-xl hover:bg-opacity-50'>  ▷  Play</button>
        <button className='mx-2 px-12  p-4 bg-gray-500 text-white rounded-lg text-xl bg-opacity-50 hover:bg-opacity-30'>ⓘ More info</button>
        </div>
    </div>
   
  )
}

export default VideoTitle