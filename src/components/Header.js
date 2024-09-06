import React, { useEffect, useState } from 'react'
import { auth } from '../utilis/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utilis/userSlice';
import { toggleGptSearchView } from '../utilis/gptSlice';
import { Supported_Lang } from '../utilis/constants';
import { changeLanguage } from '../utilis/configSlice';

const Header = () => {
  
  const gptSearch= useSelector((store)=>store.gpt?.gptSearch)
  const [isOpen, setIsOpen]= useState(false);
  const user= useSelector((store)=>store.user)
  const navigate = useNavigate();
  const dispatch= useDispatch();


  const toggleDropdown=()=>{
  setIsOpen(!isOpen);
 }
 const handleSignOut= ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate("/")

  }).catch((error) => {
    // An error happened.
  });
 }

 useEffect(()=>{
  const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate("/browse");
      } else {
        // User is signed out
       dispatch(removeUser());
       navigate("/");
      }
    });
     return ()=>unsubscribe();
},[dispatch, navigate])

const showGptSearch = ()=>{
  dispatch(toggleGptSearchView())

}
const changeSuggestedLanguage = (e)=>{
  dispatch(changeLanguage(e.target.value))
}

  return (
    <div className='fixed w-screen bg-gradient-to-b from-black z-30 flex justify-between' >
        <img className=' w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='header'/>
    {user && (<div className='flex p-2'>

      {gptSearch &&(<select onChange={changeSuggestedLanguage} className="p-2 m-2 ">
   {Supported_Lang.map((lang)=><option key={lang.identifier} value={lang.identifier} >{lang.name}</option>)}
   </select>)}
  
  
   <button className='p-2 m-2 px-4 mx-4  bg-gray-500 text-white hover:bg-gray-400 font-bold rounded-sm' onClick={showGptSearch}>{gptSearch?"Home" : "Search"}</button>
   <img className=' w-12 h-12' src="https://occ-0-2086-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4" alt='profile-icon'></img>
    <span className='text-white w- m-2' onClick={toggleDropdown}>▼</span>
    {isOpen && (
          <div className='absolute right-0 mt-14 w-48 bg-white rounded-md shadow-lg z-50'>
            <ul>
              <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Account</li>
              <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>Settings</li>
              <li className='px-4 py-2 hover:bg-gray-200 cursor-pointer' onClick={handleSignOut}>Sign Out</li>
            </ul>
          </div>
        )}
    
    </div>)}
    </div>
  )
}

export default Header