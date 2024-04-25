import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/navbar/Navbar'

import backDropStars from '../../assets/images/backdropImageComp.png'

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
    let timer1;
    timer1 = setTimeout(() => {
      setStayDown(false)
      setLoaded(true)
    }, 1000);
  }, [])
  return (
    <div className="h-auto w-full min-h-screen bg-transparent">
      <div className="bg-black h-screen w-full fixed top-0 left-0 z-0">
        <img src={backDropStars} alt="" className={`home_page_backdrop opacity-0 absolute w-full h-[120vh] object-cover transition-all duration-1000`}/>
      </div>
      <Navbar navbarOptions = {navbarOptions} metaData={navbarData}/>
      <div 
      onClick={()=> {setLoaded(!loaded)}}
      className="h-screen w-full relative bg-transparent"></div>
      <div className="h-screen w-full relative bg-black"></div>
    </div>
  )
}