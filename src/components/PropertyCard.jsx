import React from 'react'

const PropertyCard = ({data}) => {
    const {image,region,area,total} =data
  return (
    <div className="flex md:mx-5 mx-0 md:px-1 px-0 flex-col  py-12  rounded-[20px]   md:max-w-[500px] max-w-full ">
        <div className="max-w-full rounded overflow-hidden bg-charcoal border-2 border-golden">
            <img className="w-full md:h-[200px] h-[250px] bg-cover bg-center" src={image} alt="Sunset in the mountains" />
            <div className="px-4 py-4">
                <div className="font-bold text-white tracking-widest text-lg mb-2">{region}</div>
                <p className="text-white text-4xl">
                    {area} <span className="text-sm">Total SF</span>
                </p>
            </div>
            <div className="px-4 pt-4 pb-2 mb-3 flex flex-row justify-between ">
                <p className="text-white text-3xl">
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