import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/common/navbar/Navbar'

import backDropStars from '../../assets/images/starrySky.svg'
import EarthImage from '../../assets/images/earthEdit1.png'

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { LoginRegisterContext } from '../../context/LoginRegisterContext'

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [stayDown, setStayDown] = useState(true)
  const [opaqueNav, setOpaqueNav] = useState(false)
  const [fetchedData, setFetchedData] = useState({});

  const [searchQuery, setSearchQuery] = useState(null)
  const [searchedData, setSearchedData] = useState([])

  
  
  const {isLogged} = useContext(LoginRegisterContext)
  
  const navigate = useNavigate();
  
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
    stayDown,
    background: loaded ? true : false
  }
  
  const startSearch = async(e) => {
    e.preventDefault();
    const apiUrl = `https://images-api.nasa.gov/search?q=${searchQuery}&page=1&media_type=image&year_start=1920&year_end=2024`
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setSearchedData(data.collection.items)
    } catch (error) {
      console.log(error.message);
    }
  }
  
  
  useEffect(()=> {
    // window.scrollTo(0,0)
    let loadTimer1;
    let scrollTimer;
    loadTimer1 = setTimeout(() => {
      setStayDown(false)
      setLoaded(true)
    }, 1000);

    const calculateScroll = () => {
      clearTimeout(scrollTimer)
      scrollTimer = setTimeout(() => {
        if(window.scrollY > 100){
          setOpaqueNav(true)
        }
        else{
          setOpaqueNav(false)
        }
      }, 100);
    }

    if(!isLogged()){
      navigate('/')
    }

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

    fetchAPIData();

    window.addEventListener('scroll', calculateScroll)

    return () => {
      window.removeEventListener('scroll', calculateScroll)
    }
  }, [])
  return (
    <div className="home_page h-auto w-full min-h-screen bg-transparent">
      {
        isLogged() &&
        <div className='h-auto w-full'>

        <div className="bg-black h-screen w-full fixed top-0 left-0 z-0">
          <img src={backDropStars} alt="" className={`absolute opacity-80 w-full h-[160vh] object-cover ${loaded ? '-translate-y-[60vh]' : 'translate-y-0'} transition-transform duration-[2000ms] z-2`}/>
          <img src={EarthImage} alt="" className={`absolute left-[50%] w-[80%] -translate-x-[50%] max-sm:w-[90vw] ${loaded ? 'top-[0] max-md:top-[20%] max-sm:top-[30%]' : 'top-[40%]' } duration-[2000ms]`}/>
        </div>
        <Navbar navbarOptions = {navbarOptions} metaData={navbarData}/>
        <div 
        className={`${loaded ? 'h-[80vh]' : 'h-[100vh]'}  w-full relative bg-transparent duration-[2000ms]`}></div>
        {/* <div className="h-screen w-full relative bg-[rgb(0,0,0,0.7)] backdrop-filter backdrop-blur-lg"></div> */}
        <div className="min-h-screen w-full relative bg-black">
          <div className='min-h-screen w-full overflow-hidden'>
            <div className="top_filler w-full h-[64px]"></div>
            <div className="text_con mx-auto w-fit my-5 text-center">
              <h1 className="max-[420px]:text-4xl text-white text-6xl">Astronomy</h1>
              <h1 className="max-[420px]:text-4xl text-[#282828] text-6xl">Picture</h1>
              <h1 className="max-[420px]:text-4xl text-white text-6xl">of the</h1>
              <h1 className="max-[420px]:text-4xl text-[#282828] text-6xl">Day</h1>
            </div>
            <div className="image_con">
              <div className="image_layer layers w-full h-full">
                <img className='w-full h-full' src={fetchedData.url} alt="" />
              </div>
            </div>
            <div className="desc_con mx-auto px-3 text-center mb-10 w-[90%]">
              <h2 className='text-[#3b3b3b]'>{fetchedData.explanation}</h2>
            </div>
            <button
            onClick={()=> {navigate('/apod')}}
            className='flex relative items-center text-[#a1a1a1] mx-auto mb-10'>
              <h3 className='text-sm mx-1 border border-[#a1a1a1] px-3 py-1 rounded-[40px]'>View more</h3>
              <ArrowForwardIosRoundedIcon className='absolute right-[-26px]' sx={{fontSize: 20}} />
            </button>
          </div>
        </div>
        <div className="min-h-[20px] w-full relative backdrop-filter backdrop-blur-sm bg-[rgba(255,255,255,0.1)] overflow-hidden">
          
        </div>
        <div className="min-h-screen flex flex-col items-center w-full relative bg-black overflow-hidden">
          <div className="filler_com h-[60px] w-full"></div>
          <div className='text_con mx-auto w-fit text-center mb-2'>
            <h1 className="max-[420px]:text-4xl text-white text-6xl">Nasa</h1>
            <h1 className="max-[420px]:text-4xl text-[#282828] text-6xl">Image</h1>
            <h1 className="max-[420px]:text-4xl text-white text-6xl">Library</h1>
          </div>
          <div className="search_display flex flex-col flex-1 max-h-[70vh] w-[96%]">
            <div className="search w-full h-11">
              <div className="input_con relative w-[96%] h-auto mx-auto mt-1">
                <SearchRoundedIcon sx={{fontSize: 20}} className='absolute top-[50%] left-2 -translate-y-1/2 text-[#a1a1a1]'/>
                <form 
                onSubmit={startSearch}
                action="">
                  <input
                  onChange={(e)=> {setSearchQuery(e.target.value)}}
                   placeholder='Enter to search' type="text" className='h-10 w-full rounded-[100px] border-[1px] border-[solid] border-[#a1a1a1] bg-transparent px-7 text-white focus:outline-none'/>
                </form>
              </div>
            </div>
            <div className="display w-[98%] h-[calc(100%-44px)] grid grid-cols-2 md:grid-cols-3 max-[500px]:grid-cols-1 gap-1 overflow-auto mx-auto scroll-smooth">
              {
                searchedData.map((data)=> (
                  <div className="h-[250px] rounded-md overflow-hidden">
                    <img src={data.links[0].href} className='h-full w-full object-cover' alt="" />
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </div>
      }
      
    </div>
  )
}