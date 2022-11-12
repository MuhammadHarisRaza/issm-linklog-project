import React from 'react'

const InfoCard = ({card}) => {
    const {img,title,description} = card
  return (
    <div className="flex md:justify-between flex-col md:mx-5 mx-0 md:px-1 px-0 py-12 bg-center bg-cover rounded-[20px] md:max-w-[500px] max-w-full ">
        <div className=" rounded overflow-hidden  bg-black border-2 border-golden">
            <img className="w-full md:h-[200px] h-[250px] bg-cover bg-center" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-white md:text-xl text-md mb-2">{title}</div>
                <p className="text-white md:text-base text-sm">
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