import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import NasaLogo from '../../../assets/images/NASALogo.png'

export default function Navbar({navbarOptions, metaData}) {
  const {stayDown, background} = metaData;
  // const [stayDown, setStayDown] = useState(false)
  return (
    <nav 
    className={`w-full h-14 ${!background && 'bg-transparent'} fixed top-0 left-0 z-10 flex justify-end`}>
      <img src={NasaLogo} alt="logo image" className={`absolute ${!stayDown ? 'h-[28px] top-2/4' : 'h-[90px] top-[calc(50vh-100px)]'} left-2/4 -translate-x-1/2 -translate-y-1/2 filter invert transition-all duration-1000`}/>
      <div className="h-full w-fit px-3 flex items-center">
        {
        navbarOptions.map((data)=> (
          <Link className="text-white text-sm mx-2.5 opacity-60 hover:opacity-100 duration-200" to={`${data.navTo}`}>{data.optName}</Link>
        ))
        }
      </div>
    </nav>
  )
}
