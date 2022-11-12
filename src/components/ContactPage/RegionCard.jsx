import React from 'react'

const RegionCard = ({data}) => {
    console.log("office---------->",data)
    //const {name, streetAddress, postalAddress} = data
  return (
    <div className="grid grid-cols-3 gap-[100px]">
        {
            data.map((data)=>(
                <div className="w-[100%]  py-4 ">
                    <p className="text-black leading-[25px] mb-5 font-normal text-xl">
                        {data.name}
                    </p>
                    <p className="text-black leading-[15px] font-normal text-xl">
                        {data.streetAddress}
                    </p>
                    <p className="text-black leading-[35px] font-normal text-xl">
                        {data.postalAddress}
                    </p>
                </div>
            ))
        }
    </div>
    
  )
}

export default RegionCard