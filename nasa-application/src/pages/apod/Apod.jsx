import React, { useEffect, useState } from 'react'
import Navbar from '../../components/common/navbar/Navbar';

import gradientBack from '../../assets/images/starrySkyFew.svg'
import backImage from '../../assets/images/starrySky.svg'

export default function Apod() {
    const [fetchedData, setFetchedData] = useState({
        "copyright": "Markus Horn",
        "date": "2024-04-26",
        "explanation": "In northern hemisphere spring, bright star Regulus is easy to spot above the eastern horizon. The alpha star of the constellation Leo, Regulus is the spiky star centered in this telescopic field of view. A mere 79 light-years distant, Regulus is a hot, rapidly spinning star that is known to be part of a multiple star system. Not quite lost in the glare, the fuzzy patch just below Regulus is diffuse starlight from small galaxy Leo I. Leo I is a dwarf spheroidal galaxy, a member of the Local Group of galaxies dominated by our Milky Way Galaxy and the Andromeda Galaxy (M31). About 800 thousand light-years away, Leo I is thought to be the most distant of the known small satellite galaxies orbiting the Milky Way. But dwarf galaxy Leo I has shown evidence of a supermassive black hole at its center, comparable in mass to the black hole at the center of the Milky Way.",
        "hdurl": "https://apod.nasa.gov/apod/image/2404/Regulus_Dwarf_by_Markus_Horn2048.png",
        "media_type": "image",
        "service_version": "v1",
        "title": "Regulus and the Dwarf Galaxy",
        "url": "https://apod.nasa.gov/apod/image/2404/Regulus_Dwarf_by_Markus_Horn1024.png"
    });
    const NASA_API = process.env.React_App_NASA_API_KEY;

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
          console.log(`I'm here`);
      }, [])

      console.log(fetchedData);

  return (
    <div className="relative bg-black min-h-screen w-full">
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
  )
}
