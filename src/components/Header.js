import React, { useEffect, useState } from 'react'
import { auth } from '../utilis/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utilis/userSlice';

const Header = () => {

  const [isOpen, setIsOpen]= useState(false);
  const Navigate = useNavigate();
  const user= useSelector((store)=>store.user)
  const navigate = useNavigate();
  const dispatch= useDispatch();


  const toggleDropdown=()=>{
  setIsOpen(!isOpen);
 }
 const handleSignOut= ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    Navigate("/")

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
},[])
  return (
    <div className='absolute w-screen bg-gradient-to-b from-black z-30 flex justify-between' >
        <img className=' w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='header'/>
    {user && (<div className='flex p-2'>
   <img className='w-12 h-12' src="https://occ-0-2086-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4" alt='profile-icon'></img>
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