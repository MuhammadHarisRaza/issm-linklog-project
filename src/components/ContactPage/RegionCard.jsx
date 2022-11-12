import React from 'react'

const RegionCard = ({data}) => {
    console.log("office---------->",data)
    //const {name, streetAddress, postalAddress} = data
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[100px] gap-[10px]">
        {
            data.map((data)=>(
                <div className="w-[100%]  py-4 ">
                    <p className="text-black leading-[25px] mb-5 font-normal md:text-xl text-[13px]">
                        {data.name}
                    </p>
                    <p className="text-black leading-[15px] font-normal md:text-xl text-[13px]">
                        {data.streetAddress}
                    </p>
                    <p className="text-black leading-[35px] font-normal md:text-xl text-[13px]">
                        {data.postalAddress}
                    </p>
                </div>
            ))
        }
    </div>
    
  )
}

export default RegionCard