import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Signin() {
    const [disMessage, setDisMessage] = useState(null)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate()

    const postUrl = `http://localhost:8070/signup/add`

    const handleForm = (e) => {
      e.preventDefault();
      if(username == '' || password == ''){
          setDisMessage('Fill the required fields to sign in')
      }
      else{
        const userData = {
          username,
          password,
          name,
        }
        axios.post(postUrl, userData).then((res) => {
          navigate('/')
          console.log(res.data);
      }).catch((err) => {
          if(err.response.status === 400){
            setDisMessage('Username already exist!')
          }
          else if(err.response.status === 500){
            setDisMessage('Server error! Please try again later')
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
            <input onChange={(e)=> {setUsername(e.target.value)}} name={'username'} placeholder='Username' className='bg-[rgba(255,255,255,0.4)] h-[42px] text-sm w-full rounded-md my-2 box-border px-4 focus:outline-none focus:bg-[rgba(255,255,255,1)] transition-all duration-300' type="text" />
            <input onChange={(e)=> {setPassword(e.target.value)}} name={'password'} placeholder='Password' className='bg-[rgba(255,255,255,0.4)] h-[42px] text-sm w-full rounded-md my-2 box-border px-4 focus:outline-none focus:bg-[rgba(255,255,255,1)] transition-all duration-300' type="password" />
            <input onChange={(e)=> {setName(e.target.value)}} name={'email'} placeholder='Nick Name' className='bg-[rgba(255,255,255,0.4)] h-[42px] text-sm w-full rounded-md my-2 box-border px-4 focus:outline-none focus:bg-[rgba(255,255,255,1)] transition-all duration-300' type="text" />
            <button
            type='submit'
            className='w-full h-[42px] bg-black text-white rounded-md my-2 text-sm'>Sign In</button>
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
