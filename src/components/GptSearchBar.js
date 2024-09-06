import React, { useRef } from 'react'
import language from '../utilis/language';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utilis/constants';
import { addSearchMovies } from '../utilis/movieSlice';
import { addSearchText } from '../utilis/configSlice';

const GptSearchBar = () => {

    const searchText = useRef(null);
    const showlang = useSelector((store)=>store?.config?.lang);
    const dispatch = useDispatch();


const handleGptSearchClick = async () => {
  const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ searchText.current.value+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
  const json = await data.json();
  console.log (json)
        
  dispatch(addSearchMovies(json?.results))
  dispatch(addSearchText(searchText.current.value))

}

  return (
    <div className="pt-[10%] flex justify-center ">
    <form
      className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
      <input 
        ref={searchText}
        type="text"
        className=" p-4 m-4 col-span-9"
        placeholder={language[showlang].gptPlaceHolderText}
      />
      <button
        className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>
        {language[showlang].search}
      </button>
    </form>
  </div>
  )
}

export default GptSearchBar