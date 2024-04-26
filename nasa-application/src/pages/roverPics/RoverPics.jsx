import React from 'react'
import Navbar from '../../components/common/navbar/Navbar'

export default function RoverPics() {
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
        stayDown: false,
        background: true
      }

  return (
    <div className="relative bg-black min-h-screen w-full">
      <Navbar navbarOptions = {navbarOptions} metaData={navbarData}/>
      <div className="top_filler h-16"></div>
      <div className="w-full h-auto min-h-[calc(100vh-64px)] overflow-hidden flex items-center content-center">
        <div className="relative w-fit mx-auto my-20 h-auto rounded-[50%] text-center  px-20 py-20 flex flex-col items-center content-center">
            {/* <img className="absolute z-0 h-[140%] w-[100vh] top-0 -translate-y-[18%] filter blur-[10px] rounded-[50%] opacity-50" src={gradientBack} alt="" /> */}
            <div className="absolute h-full w-full rounded-[50%] top-0 filter blur-[40px] z-0 bg-[linear-gradient(to_right,_#B3491E,_#A56446,_#B98D58,_#D29053)]" filter blur-sm></div>
            <h1 className="relative z-2 max-[400px]:text-4xl text-white text-6xl ">Mars</h1>
            <h1 className="relative z-2 max-[400px]:text-4xl text-[#282828] text-6xl ">Rover</h1>
            <h1 className="relative z-2 max-[400px]:text-4xl text-white text-6xl ">Photos</h1>
        </div>
      </div>
    </div>
  )
}
