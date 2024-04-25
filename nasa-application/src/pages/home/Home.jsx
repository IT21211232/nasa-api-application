import React, { useState } from 'react'
import Navbar from '../../components/common/navbar/Navbar'

import backDropStars from '../../assets/images/backdropImageComp.png'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
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
  return (
    <div className="h-auto w-full min-h-screen bg-transparent">
      <div className="bg-black h-screen w-full fixed top-0 left-0 z-0">
        <img src="" alt="" />
      </div>
      <Navbar navbarOptions = {navbarOptions}/>
      <div className="h-screen w-full relative bg-black"></div>
      <div className="h-screen w-full relative bg-black"></div>
    </div>
  )
}