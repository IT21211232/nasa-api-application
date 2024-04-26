import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/navbar/Navbar';

import starBack from '../../assets/images/starrySkyFew.svg'

export default function Apod() {
    const [fetchedData, setFetchedData] = useState({});
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
          optName: 'Rover',
          navTo: '/rover'
        },
      ]
      
      const navbarData = {
        stayDown: false,
        background: false
      }

      useEffect(()=> {
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
      
        //   fetchAPIData();
      }, [])

      console.log(fetchedData);
  return (
    <div className="relative bg-black min-h-screen w-full">
      {/* <img src={starBack}  className="w-full min-h-screen" alt="" /> */}
      <Navbar navbarOptions = {navbarOptions} metaData={navbarData}/>
      <div className="top_filler h-16"></div>
      <div className="w-full h-auto min-h-[calc(100vh-64px)]">
        <div className="h-auto w-fit mx-auto text-center my-8">
            <h1 className="text-white text-6xl">Astronomy</h1>
            <h1 className="text-[#282828] text-6xl">Picture</h1>
            <h1 className="text-[#a1a1a1] text-6xl">of the</h1>
            <h1 className="text-[#282828] text-6xl">Day</h1>
        </div>
      </div>
    </div>
  )
}
