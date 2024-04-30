import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
    const [disMessage, setDisMessage] = useState(null)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const postUrl = `http://localhost:8070/signin/login`


    const handleForm = (e) => {
        e.preventDefault();
        if(username == '' || password == ''){
            setDisMessage('Fill the required fields to sign in')
        }
        else{
          const loginData = {
            username,
            password
          }
          axios.post(postUrl, loginData).then((res) => {
            navigate('/home')
        }).catch((err) => {
            setDisMessage('Invalid username or password!')
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
            <button
            type='submit'
            className='w-full h-[42px] bg-black text-white rounded-md my-2 text-sm'>Sign In</button>
            {
                disMessage &&
                <h3 className='text-red-500 mt-1 text-sm'>{disMessage}</h3>
            }
            <Link to={'/signup'} className='text-blue-500 mt-4 text-sm'>Do not have an account?</Link>
        </form>
      </div>
    </div>
  )
}
