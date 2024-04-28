import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import NasaLogo from '../../../assets/images/NASALogo.png'

export default function Navbar({navbarOptions, metaData}) {
  const {stayDown, background} = metaData;
  // const [stayDown, setStayDown] = useState(false)
  return (
    <nav 
    className={`w-full h-14 ${!background ? 'bg-transparent' : 'backdrop-filter backdrop-blur-md bg-[rgba(0,0,0,0.6)]'} fixed top-0 left-0 z-10 flex justify-end transition-all duration-700`}>
      <img  src={NasaLogo} alt="logo image" className={`absolute  left-2/4 -translate-x-1/2 -translate-y-1/2 filter invert transition-all duration-[2000ms] ${!stayDown ? 'h-[28px] top-2/4' : 'h-[90px] max-sm:h-[70px] top-[calc(50vh-100px)]'}`}/>
      <div className="h-full w-fit px-3 flex items-center opacity-100 max-sm:opacity-0 duration-200">
        {
        navbarOptions.map((data)=> (
          <Link className="text-white text-sm mx-2.5 opacity-60 hover:opacity-100 duration-200" to={`${data.navTo}`}>{data.optName}</Link>
        ))
        }
      </div>
    </nav>
  )
}
