import React from 'react'

const RegionCard = ({data}) => {
    console.log("office---------->",data)
    //const {name, streetAddress, postalAddress} = data
  return (
    <div className="flex -mx-2 justify-around flex-row ">
        {
            data.map((data)=>(
                <div className="w-1/2 px-6 py-4 ">
                    <p className="text-black leading-[25px] mb-5 font-normal text-base">
                        {data.name}
                    </p>
                    <p className="text-black leading-[15px] font-normal text-base">
                        {data.streetAddress}
                    </p>
                    <p className="text-black leading-[35px] font-normal text-base">
                        {data.postalAddress}
                    </p>
                </div>
            ))
        }
    </div>
    
  )
}

export default RegionCard