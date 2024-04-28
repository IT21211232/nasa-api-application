import React, { useEffect, useState } from 'react'

import Navbar from '../../components/common/navbar/Navbar'
import ImageWithBlur from '../../components/common/imageWithBlur/ImageWithBlur';

import roverIcon from '../../assets/images/icons/roverIcon.svg'
import cameraIcon from '../../assets/images/icons/cameraIcon.svg'

export default function RoverPics() {
    // const [fetchedData, setFetchedData] = useState([
    //     {
    //         "id": 102685,
    //         "sol": 1004,
    //         "camera": {
    //             "id": 20,
    //             "name": "FHAZ",
    //             "rover_id": 5,
    //             "full_name": "Front Hazard Avoidance Camera"
    //         },
    //         "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FLB_486615455EDR_F0481570FHAZ00323M_.JPG",
    //         "earth_date": "2015-06-03",
    //         "rover": {
    //             "id": 5,
    //             "name": "Curiosity",
    //             "landing_date": "2012-08-06",
    //             "launch_date": "2011-11-26",
    //             "status": "active",
    //             "max_sol": 4102,
    //             "max_date": "2024-02-19",
    //             "total_photos": 695670,
    //             "cameras": [
    //                 {
    //                     "name": "FHAZ",
    //                     "full_name": "Front Hazard Avoidance Camera"
    //                 },
    //                 {
    //                     "name": "NAVCAM",
    //                     "full_name": "Navigation Camera"
    //                 },
    //                 {
    //                     "name": "MAST",
    //                     "full_name": "Mast Camera"
    //                 },
    //                 {
    //                     "name": "CHEMCAM",
    //                     "full_name": "Chemistry and Camera Complex"
    //                 },
    //                 {
    //                     "name": "MAHLI",
    //                     "full_name": "Mars Hand Lens Imager"
    //                 },
    //                 {
    //                     "name": "MARDI",
    //                     "full_name": "Mars Descent Imager"
    //                 },
    //                 {
    //                     "name": "RHAZ",
    //                     "full_name": "Rear Hazard Avoidance Camera"
    //                 }
    //             ]
    //         }
    //     },
    //     {
    //         "id": 102686,
    //         "sol": 1004,
    //         "camera": {
    //             "id": 20,
    //             "name": "FHAZ",
    //             "rover_id": 5,
    //             "full_name": "Front Hazard Avoidance Camera"
    //         },
    //         "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/fcam/FRB_486615455EDR_F0481570FHAZ00323M_.JPG",
    //         "earth_date": "2015-06-03",
    //         "rover": {
    //             "id": 5,
    //             "name": "Curiosity",
    //             "landing_date": "2012-08-06",
    //             "launch_date": "2011-11-26",
    //             "status": "active",
    //             "max_sol": 4102,
    //             "max_date": "2024-02-19",
    //             "total_photos": 695670,
    //             "cameras": [
    //                 {
    //                     "name": "FHAZ",
    //                     "full_name": "Front Hazard Avoidance Camera"
    //                 },
    //                 {
    //                     "name": "NAVCAM",
    //                     "full_name": "Navigation Camera"
    //                 },
    //                 {
    //                     "name": "MAST",
    //                     "full_name": "Mast Camera"
    //                 },
    //                 {
    //                     "name": "CHEMCAM",
    //                     "full_name": "Chemistry and Camera Complex"
    //                 },
    //                 {
    //                     "name": "MAHLI",
    //                     "full_name": "Mars Hand Lens Imager"
    //                 },
    //                 {
    //                     "name": "MARDI",
    //                     "full_name": "Mars Descent Imager"
    //                 },
    //                 {
    //                     "name": "RHAZ",
    //                     "full_name": "Rear Hazard Avoidance Camera"
    //                 }
    //             ]
    //         }
    //     },
    //     {
    //         "id": 102842,
    //         "sol": 1004,
    //         "camera": {
    //             "id": 21,
    //             "name": "RHAZ",
    //             "rover_id": 5,
    //             "full_name": "Rear Hazard Avoidance Camera"
    //         },
    //         "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RLB_486615482EDR_F0481570RHAZ00323M_.JPG",
    //         "earth_date": "2015-06-03",
    //         "rover": {
    //             "id": 5,
    //             "name": "Curiosity",
    //             "landing_date": "2012-08-06",
    //             "launch_date": "2011-11-26",
    //             "status": "active",
    //             "max_sol": 4102,
    //             "max_date": "2024-02-19",
    //             "total_photos": 695670,
    //             "cameras": [
    //                 {
    //                     "name": "FHAZ",
    //                     "full_name": "Front Hazard Avoidance Camera"
    //                 },
    //                 {
    //                     "name": "NAVCAM",
    //                     "full_name": "Navigation Camera"
    //                 },
    //                 {
    //                     "name": "MAST",
    //                     "full_name": "Mast Camera"
    //                 },
    //                 {
    //                     "name": "CHEMCAM",
    //                     "full_name": "Chemistry and Camera Complex"
    //                 },
    //                 {
    //                     "name": "MAHLI",
    //                     "full_name": "Mars Hand Lens Imager"
    //                 },
    //                 {
    //                     "name": "MARDI",
    //                     "full_name": "Mars Descent Imager"
    //                 },
    //                 {
    //                     "name": "RHAZ",
    //                     "full_name": "Rear Hazard Avoidance Camera"
    //                 }
    //             ]
    //         }
    //     },
    //     {
    //         "id": 102843,
    //         "sol": 1004,
    //         "camera": {
    //             "id": 21,
    //             "name": "RHAZ",
    //             "rover_id": 5,
    //             "full_name": "Rear Hazard Avoidance Camera"
    //         },
    //         "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01004/opgs/edr/rcam/RRB_486615482EDR_F0481570RHAZ00323M_.JPG",
    //         "earth_date": "2015-06-03",
    //         "rover": {
    //             "id": 5,
    //             "name": "Curiosity",
    //             "landing_date": "2012-08-06",
    //             "launch_date": "2011-11-26",
    //             "status": "active",
    //             "max_sol": 4102,
    //             "max_date": "2024-02-19",
    //             "total_photos": 695670,
    //             "cameras": [
    //                 {
    //                     "name": "FHAZ",
    //                     "full_name": "Front Hazard Avoidance Camera"
    //                 },
    //                 {
    //                     "name": "NAVCAM",
    //                     "full_name": "Navigation Camera"
    //                 },
    //                 {
    //                     "name": "MAST",
    //                     "full_name": "Mast Camera"
    //                 },
    //                 {
    //                     "name": "CHEMCAM",
    //                     "full_name": "Chemistry and Camera Complex"
    //                 },
    //                 {
    //                     "name": "MAHLI",
    //                     "full_name": "Mars Hand Lens Imager"
    //                 },
    //                 {
    //                     "name": "MARDI",
    //                     "full_name": "Mars Descent Imager"
    //                 },
    //                 {
    //                     "name": "RHAZ",
    //                     "full_name": "Rear Hazard Avoidance Camera"
    //                 }
    //             ]
    //         }
    //     }
    // ]);
    
    const [fetchedData, setFetchedData] = useState(null)
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
        const NASA_API = process.env.React_App_NASA_API_KEY;
        
        async function fetchAPIData(){
            const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${NASA_API}`;
            try {
              const res = await fetch(url);
              const data = await res.json();
              setFetchedData(data.photos)
            } catch (error) {
              console.log(error.message);
            }
          }
      
          fetchAPIData();
      }, [])

      console.log(fetchedData);

  return (
    <div className="relative bg-black min-h-screen w-full">
      <Navbar navbarOptions = {navbarOptions} metaData={navbarData}/>
      <div className="top_filler h-16"></div>
      <div className="w-full h-auto min-h-[calc(100vh-64px)] overflow-hidden flex items-center content-center">
        <div className="relative w-fit mx-auto my-20 h-auto rounded-[50%] text-center  px-20 py-20 flex flex-col items-center content-center">
            {/* <img className="absolute z-0 h-[140%] w-[100vh] top-0 -translate-y-[18%] filter blur-[10px] rounded-[50%] opacity-50" src={gradientBack} alt="" /> */}
            <div className="absolute h-full w-full rounded-[50%] top-0 filter blur-[40px] z-0 bg-[linear-gradient(to_right,_#B3491E,_#A56446,_#B98D58,_#D29053)]"></div>
            <h1 className="relative z-2 max-[400px]:text-4xl text-white text-6xl ">Mars</h1>
            <h1 className="relative z-2 max-[400px]:text-4xl text-[#282828] text-6xl ">Rover</h1>
            <h1 className="relative z-2 max-[400px]:text-4xl text-white text-6xl ">Photos</h1>
        </div>
      </div>
      {
        fetchedData &&
            <div className='grid grid-cols-2 md:grid-cols-3 max-[500px]:grid-cols-1 gap-4 h-auto mx-auto w-[calc(100%-20px)]'>
            {
                fetchedData.map((data)=> (
                    <ImageWithBlur
                    image={data.img_src}
                    displayText={[
                        {textName:'Rover name',
                        textVal:data.rover.name,
                        icon: roverIcon
                        },
                        {textName:'Camera name',
                        textVal:data.camera.name,
                        icon: cameraIcon
                        },
                    ]}
                    />
                ))
            }
            </div>
      }
    </div>
  )
}
