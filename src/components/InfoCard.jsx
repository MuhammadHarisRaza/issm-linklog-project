import React from 'react'

const InfoCard = ({card}) => {
    const {img,title,description} = card
  return (
    <div className="flex justify-between flex-col mx-10 px-1  py-12 bg-center bg-cover rounded-[20px]  max-w-[370px] ">
        <div className="max-w-sm rounded overflow-hidden  bg-black border border-golden">
            <img className="w-full h-[300px] " src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-white text-xl mb-2">{title}</div>
                <p className="text-white text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2 flex flex-row-reverse ">
                <button className="text-white background-transparent border-b-2 hover:border-black font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                    Read more          
                </button>
            </div>
        </div>
    </div>
    
  )
}

export default InfoCard