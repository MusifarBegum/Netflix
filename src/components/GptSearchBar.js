import React, { useRef } from 'react'
import language from '../utilis/language';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

    const searchText = useRef(null);
    console.log(searchText);

const showlang = useSelector((store)=>store?.config?.lang)
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
        className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
      >
        {language[showlang].search}
      </button>
    </form>
  </div>
  )
}

export default GptSearchBar