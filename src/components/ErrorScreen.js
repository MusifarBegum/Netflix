import React from 'react'
import { useSelector } from 'react-redux'
import language from '../utilis/language';

const ErrorScreen = () => {
    const searchValue = useSelector((store)=>store.config?.searchText);
    const showlang = useSelector((store)=>store?.config?.lang);

  return (
    <div className='bg-black text-center h-fixed opacity-85'>
      
        <p className='text-xl font-medium text-white'>{language[showlang].searchText+searchValue+language[showlang].searchText1}</p>
        <p className="mt-4 text-left m-auto  max-w-md text-xl font-medium text-white">{language[showlang].suggestions}</p>
        <ul className='list-disc list-inside text-left ml-auto mr-auto max-w-md text-sm font-light text-white py-4'>
            <li>{language[showlang].list1}</li>
            <li>{language[showlang].list2}</li>
            <li>{language[showlang].list3}</li>
            <li>{language[showlang].list4}</li>
        </ul>
      
       
        
    </div>
  )
}

export default ErrorScreen