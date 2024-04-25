import React from 'react'
import Navbar from '../../components/common/navbar/Navbar'

export default function Home() {
  return (
    <div className="h-auto w-full min-h-screen bg-transparent">
      <div className="bg-black h-screen w-full fixed top-0 left-0 z-0"></div>
      <Navbar/>
      <div className="h-screen w-full relative bg-green-300"></div>
      <div className="h-screen w-full relative bg-blue-300"></div>
    </div>
  )
}