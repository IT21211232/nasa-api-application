import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/navbar/Navbar'

import backDropStars from '../../assets/images/starrySky.svg'
import EarthImage from '../../assets/images/earthEdit.png'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [stayDown, setStayDown] = useState(true)
  const navbarOptions = [
    {
      optName: 'Home',
      navTo: '/'
    },
    {
      optName: 'Rover',
      navTo: '/rover'
    },
  ]

  const navbarData = {
    stayDown,
    background: false
  }

  useEffect(()=> {
    let loadTimer1;
    loadTimer1 = setTimeout(() => {
      setStayDown(false)
      setLoaded(true)
    }, 1000);
  }, [])
  return (
    <div className="h-auto w-full min-h-screen bg-transparent">
      <div className="bg-black h-screen w-full fixed top-0 left-0 z-0">
        <img src={backDropStars} alt="" className={`absolute opacity-80 w-full h-[160vh] object-cover ${loaded ? '-translate-y-[60vh]' : 'translate-y-0'} transition-transform duration-[2000ms] z-2`}/>
        <img src={EarthImage} alt="" className={`absolute top-[40%] left-[50%] w-[80%] -translate-x-[50%] max-sm:w-[120vw] max-sm:scale-[1.3] ${loaded ? 'top-[30%] max-sm:top-[40%]' : 'top-[60%]' } duration-[2000ms]`}/>
      </div>
      <Navbar navbarOptions = {navbarOptions} metaData={navbarData}/>
      <div 
      onClick={()=> {setLoaded(!loaded)}}
      className="h-[80vh] w-full relative bg-transparent max-sm:h-[70vh]"></div>
      <div className="h-screen w-full relative bg-[#141414]"></div>
    </div>
  )
}