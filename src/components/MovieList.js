import React from 'react'
import MovieCard from './MovieCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from '../utilis/constants';


const MovieList = ({title,movies}) => {


  return (
<div className="px-6">
<h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
<Slider {...settings}>
  {movies?.map((movie) => (
    <MovieCard
      key={movie.id}
      poster={movie.poster_path}
      title={movie.title}
      description={movie.overview}
      id={movie.id}
    />
  ))}
</Slider>
</div>
   
  )
}

export default MovieList