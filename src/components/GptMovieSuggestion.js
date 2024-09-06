import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
import ErrorScreen from './ErrorScreen';

const GptMovieSuggestion = () => {

    const searchResults = useSelector((store)=>store.movies?.searchResults);
    const searchValue = useSelector((store)=>store.config?.searchText)


    
    // If both searchResults and searchText are null, return null
    if (searchResults === null && searchValue === null) {
      return null;
  }

  // If searchResults is an empty array and searchText is present, return ErrorScreen
  if (searchResults?.length === 0 && searchValue) {
      return <ErrorScreen />;
  }
      
   return (
<div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {searchResults && (
          <MovieList
            title="Search Results"
            movies={searchResults}
          />
        )}
      </div>
    </div>
  )
}

export default GptMovieSuggestion