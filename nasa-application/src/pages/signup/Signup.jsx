import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Signin() {
    const [disMessage, setDisMessage] = useState(null)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const postUrl = `http://localhost:8070/signup/add`

    const handleForm = (e) => {
      e.preventDefault();
      if(username == '' || password == ''){
          setDisMessage('Fill the required fields to sign in')
      }
      else{
      createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          console.log(userCredential);
          navigate('/')
        }).catch((err)=> {
          if(err.code === 'auth/email-already-in-use'){
            setDisMessage('Email is already taken, please try a different email')
          }
          else if(err.code == 'auth/network-request-failed'){
            setDisMessage('Server error or check you connection and try again later!')
          }
          else{
           setDisMessage('Signing up unsuccessful!') 
          }
        })
      }
  }
  return (
    <div className='flex relative items-center justify-center w-full h-screen bg-[linear-gradient(to_right,_#d6d6d6,_#e1e1e1,_#d6d6d6,_#b1b1b1)]'>
      <div className="image_con flex flex-1 items-center justify-center h-full max-[660px]:absolute">
        <div className="image_con_sub w-[90%] h-[calc(100%-50px)] rounded-md bg-black shadow-xl"></div>
      </div>

      <div className="input_con flex flex-1 items-center justify-center h-full">
        <form 
        onSubmit={handleForm}
        className="input_con_sub flex flex-col items-center h-auto w-[60%] max-[420px]:w-[70%]">
            <h1 className='text-2xl font-semibold mb-2'>Sign Up</h1>
            <p className='text-center text-gray-600'>Enter an email and a password for your account!</p>
            <input onChange={(e)=> {setUsername(e.target.value)}} name={'username'} placeholder='Email' className='bg-[rgba(255,255,255,0.4)] h-[42px] text-sm w-full rounded-md my-2 box-border px-4 focus:outline-none focus:bg-[rgba(255,255,255,1)] transition-all duration-300' type="text" />
            <input onChange={(e)=> {setPassword(e.target.value)}} name={'password'} placeholder='Password' className='bg-[rgba(255,255,255,0.4)] h-[42px] text-sm w-full rounded-md my-2 box-border px-4 focus:outline-none focus:bg-[rgba(255,255,255,1)] transition-all duration-300' type="password" />
            <button
            type='submit'
            className='w-full h-[42px] bg-black text-white rounded-md my-2 text-sm'>Sign Up</button>
            {
                disMessage &&
                <h3 className='text-red-500 mt-1 text-sm'>{disMessage}</h3>
            }
            <Link to={'/'} className='text-blue-500 mt-4 text-sm'>Already have an account?</Link>
        </form>
      </div>
    </div>
  )
}
