import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/navbar/Navbar'

import backDropStars from '../../assets/images/starrySky.svg'
import EarthImage from '../../assets/images/earthEdit1.png'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [stayDown, setStayDown] = useState(true)
  const [opaqueNav, setOpaqueNav] = useState(false)
  console.log(opaqueNav);

  const NASA_API = process.env.React_App_NASA_API_KEY;
  
  const navbarOptions = [
    {
      optName: 'Home',
      navTo: '/'
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
    stayDown,
    background: loaded ? true : false
  }
  
  useEffect(()=> {
    let loadTimer1;
    let scrollTimer;
    loadTimer1 = setTimeout(() => {
      setStayDown(false)
      setLoaded(true)
    }, 1000);

    const calculateScroll = () => {
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        if(window.scrollY > 100){
          setOpaqueNav(true)
        }
        else{
          setOpaqueNav(false)
        }
      }, 100);
    }

    window.addEventListener('scroll', calculateScroll)

    return () => {
      window.removeEventListener('scroll', calculateScroll)
    }
  }, [])
  return (
    <div className="h-auto w-full min-h-screen bg-transparent">
      <div className="bg-black h-screen w-full fixed top-0 left-0 z-0">
        <img src={backDropStars} alt="" className={`absolute opacity-80 w-full h-[160vh] object-cover ${loaded ? '-translate-y-[60vh]' : 'translate-y-0'} transition-transform duration-[2000ms] z-2`}/>
        <img src={EarthImage} alt="" className={`absolute left-[50%] w-[80%] -translate-x-[50%] max-sm:w-[90vw] ${loaded ? 'top-[0] max-md:top-[20%] max-sm:top-[30%]' : 'top-[40%]' } duration-[2000ms]`}/>
      </div>
      <Navbar navbarOptions = {navbarOptions} metaData={navbarData}/>
      <div 
      onClick={()=> {setLoaded(!loaded)}}
      className={`${loaded ? 'h-[80vh]' : 'h-[100vh]'}  w-full relative bg-transparent duration-[2000ms]`}></div>
      {/* <div className="h-screen w-full relative bg-[rgb(0,0,0,0.7)] backdrop-filter backdrop-blur-lg"></div> */}
      <div className="h-screen w-full relative bg-black">
        <div className='min-h-screen w-full'>
          <div className="top_filler w-full h-[64px]"></div>
          <div className="text_con mx-auto w-fit my-5 text-center">
            <h1 className="max-[400px]:text-4xl text-white text-6xl">Astronomy</h1>
            <h1 className="max-[400px]:text-4xl text-[#282828] text-6xl">Picture</h1>
            <h1 className="max-[400px]:text-4xl text-white text-6xl">of the</h1>
            <h1 className="max-[400px]:text-4xl text-[#282828] text-6xl">Day</h1>
          </div>
        </div>
      </div>
    </div>
  )
}