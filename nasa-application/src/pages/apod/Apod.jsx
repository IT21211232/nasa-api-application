import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../components/common/navbar/Navbar';

import { LoginRegisterContext } from '../../context/LoginRegisterContext';

import gradientBack from '../../assets/images/starrySkyFew.svg'
import backImage from '../../assets/images/starrySky.svg'
import { useNavigate } from 'react-router-dom';

export default function Apod() {
    const {isLogged} = useContext(LoginRegisterContext)
    const [fetchedData, setFetchedData] = useState({});
    const NASA_API = process.env.React_App_NASA_API_KEY;

    const navigate = useNavigate()

    const navbarOptions = [
        {
          optName: 'Home',
          navTo: '/home'
        },
        {
          optName: 'APOD',
          navTo: '/apod'
        },
        {
          optName: 'Rover Pics',
          navTo: '/rover'
        },
      ]
      
      const navbarData = {
        stayDown: false,
        background: true
      }

      useEffect(()=> {
        window.scrollTo(0,0)
        async function fetchAPIData(){
            const url = 'https://api.nasa.gov/planetary/apod'+ `?api_key=${NASA_API}`
            try {
              const res = await fetch(url);
              const data = await res.json();
              setFetchedData(data)
            } catch (error) {
              console.log(error.message);
            }
          }
      
          fetchAPIData();
        if(!isLogged()){
          navigate('/')
        }
      }, [])

      console.log(fetchedData);

  return (
    <div className="relative bg-black min-h-screen w-full">
      {
        isLogged() &&
        <div className='h-auto w-full'>

        {/* <img src={gradientBack}  className="w-full min-h-screen" alt="" /> */}
        <Navbar navbarOptions = {navbarOptions} metaData={navbarData}/>
        <div className="top_filler h-16"></div>
        {/* contains the content of the page */}
        <div className="w-full h-auto min-h-[calc(100vh-64px)] overflow-hidden">
          {/* title container - contains the title of the page */}
          <div className="title_main h-[calc(100vh-64px)] flex items-center justify-center bg-black">
              <div className="relative w-fit mx-auto my-20 h-auto rounded-[50%] text-center">
                  <img className="absolute z-0 h-[140%] w-[100vh] top-0 -translate-y-[18%] filter blur-[10px] rounded-[50%] opacity-50" src={gradientBack} alt="" />
                  <h1 className="max-[400px]:text-4xl text-white text-6xl">Astronomy</h1>
                  <h1 className="max-[400px]:text-4xl text-[#282828] text-6xl">Picture</h1>
                  <h1 className="max-[400px]:text-4xl text-white text-6xl">of the</h1>
                  <h1 className="max-[400px]:text-4xl text-[#282828] text-6xl">Day</h1>
              </div>
          </div>

          {/* contains the fetched data including image and explanation */}
          <div className="h-auto w-full relative overflow-hidden">
              <img src={backImage} alt="" className="absolute z-0 w-full h-full "/>
              <div className="text_con relative z-1">
                  <h1 className="relative z-1 text-white text-wrap max-w-[500px] text-5xl text-center mx-auto mt-8 mb-6">{fetchedData ? fetchedData.title : 'The follwing image has not title!'}</h1>
                  <div className="desc_con w-[90%] mx-auto">
                      <p className="text-[#a1a1a1] mb-10">{fetchedData ? fetchedData.explanation : null}</p>
                  </div>
              </div>
              <div className="image_con mb-10">
                  <img 
                  className="relative mx-auto rounded-lg z-2 border-l-[10px] border-l-[solid] border-l-[#212121] border-t-[10px] border-t-[solid] border-t-[#212121]" 
                  src={fetchedData ? fetchedData.url : null} 
                  alt="" />
              </div>
          </div>
        </div>

        </div>
      }
      
      
    </div>
  )
}
