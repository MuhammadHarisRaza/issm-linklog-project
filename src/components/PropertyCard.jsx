import React from 'react'

const PropertyCard = ({data}) => {
    const {image,region,area,total} =data
  return (
    <div className="flex justify-between flex-col mx-10 px-1  py-12 bg-center bg-cover rounded-[20px]   max-w-[370px] ">
        <div className="max-w-full rounded overflow-hidden  bg-black border-2 border-golden">
            <img className="w-full h-[200px] " src={image} alt="Sunset in the mountains" />
            <div className="px-2 py-4">
                <div className="font-bold text-white tracking-widest text-xl mb-2">{region}</div>
                <p className="text-white text-xl">
                    {area} <span className="text-sm">Total SF</span>
                </p>
            </div>
            <div className="px-2 pt-4 pb-2 mb-3 flex flex-row justify-between ">
                <p className="text-white text-xl">
                    {total} <span className="text-sm">Properties</span>
                </p>
                <button className="text-white background-transparent border-b-2 hover:border-black font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    MEET THE TEAM         
                </button>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard