import React from 'react'

export default function ImageWithBlur({image, displayText}) {
  return (
    <div className='flex flex-col h-auto max-w-full overflow-hidden rounded-md border-[1px] border-[solid] border-[#a1a1a1] my-3 bg-[rgba(0,0,0,0.7)] backdrop-filter backdrop-blur-sm'>
    {/* <div className='flex flex-col h-auto max-w-full overflow-hidden rounded-md bg-[rgba(207,207,207,0.7)] backdrop-filter backdrop-blur-sm'> */}
      <div className="w-full h-5"></div>
      <div className="image_holder w-[90%] h-auto mx-auto  rounded-md overflow-hidden [box-shadow:0px_0px_2px_3px_rgba(0,0,0,1)]">
        <img src={image} alt=""/>
      </div>
      <div className="w-full h-auto py-4">
        {
            displayText &&
            displayText.map((data)=> (
                <div className='flex justify-between items-center w-[90%] mx-auto h-7 rounded-3xl my-1 px-3'>
                    <div className="image_name flex items-center">
                        <img className='h-4' src={data.icon} alt="" />
                        <h2 className='text-[#656565] text-sm ml-2'>{data.textName}</h2>
                    </div>
                    <div className="value">
                        <h2 className='text-white'>{data.textVal}</h2>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}
