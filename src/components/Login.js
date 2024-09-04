import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateForm } from '../utilis/validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utilis/firebase';
import { addUser } from '../utilis/userSlice';
import { useDispatch } from 'react-redux';
import { NETFLIX_BG } from '../utilis/constants';


const Login = () => {
    const [isSignInForm, setIsSignInForm]= useState(true);
    const [errorMessage,setErrorMessage]= useState();
    const dispatch = useDispatch();

    const  toggleClick = ()=>{
        setIsSignInForm(!isSignInForm);
    }
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const nationality = useRef(null);
       
    const handleButton= ()=>{
        //validate the form validations

       const message = checkValidateForm(email.current.value,password.current.value);
       setErrorMessage(message);
        if (message) return;

        if(!isSignInForm){
             //SIgnUp Form
             createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
             .then((userCredential) => {
               const user = userCredential.user;
               
               updateProfile(user, {
                displayName: name.current.value
              }).then(() => {
                // Profile updated!
                const {uid,email,displayName} = auth.currentUser;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                
               console.log(user);
              }).catch((error) => {
                // An error occurred
                // ...
              });
               
             })
             .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
             });
        }else{
            //SignIn Form
            signInWithEmailAndPassword (auth, email.current.value,password.current.value)
            .then((userCredential) => {
             const user = userCredential.user;
             console.log(user);
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
        }
    }
  return (
    <div >
        <Header/>
        <div className='absolute'>
        <img src={NETFLIX_BG} alt='logo'/>
        </div>
        
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12  bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
        <h1 className='text-3xl font-bold my-2'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && <input ref={name} type='text' placeholder='Full Name ' className='p-2 my-2 w-full rounded-sm bg-gray-800'/> }
         
         <input ref={email} type='text' placeholder='Email or Mobile number' className='p-2 my-2 w-full rounded-sm bg-gray-800'/>
         <input ref={password} type='password' placeholder='Password ' className='p-2 my-2 w-full rounded-sm bg-gray-800'/>
         <p className='font-bold text-red-700'>{errorMessage}</p>
         <button className='bg-red-900 p-2 my-4 w-full rounded-md' onClick={handleButton}>{isSignInForm ? "Sign In" : "Sign Up" }</button>
         
         <p onClick={toggleClick} className='cursor-pointer'>
         {isSignInForm ? "New to Netflix? Sign up now.": "Already a registered user Sign In Now."}
         </p>
        
     </form>
     
    </div>
  )
}

export default Login