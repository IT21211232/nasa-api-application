import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import NasaLogo from '../../../assets/images/NASALogo.png'

export default function Navbar({navbarOptions}) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div 
    onClick={()=> setLoaded(!loaded)}
    className={`w-full h-14 bg-red-400 fixed top-0 left-0 z-10 flex justify-end `}>
      <img src={NasaLogo} alt="logo image" className={`absolute ${loaded ? 'h-7 top-2/4' : 'h-50 top-[50vh]'} left-2/4 -translate-x-1/2 -translate-y-1/2 filter invert transition-all duration-500`}/>
      <div className="h-full w-fit px-3 flex items-center">
        {
        navbarOptions.map((data)=> (
          <Link className="text-white mx-3 hover:text-[#262626] duration-200" to={`${data.navTo}`}>{data.optName}</Link>
        ))
        }
      </div>
    </div>
  )
}
