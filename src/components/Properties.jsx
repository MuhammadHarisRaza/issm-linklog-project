import React from 'react'
import { PROPERTIES } from '../constants'
import PropertyCard from './PropertyCard'

const Properties = () => {
  return (
    <div className="grid  md:grid-cols-3 grid-cols-1 gap-[1px]  md:w-[80%] w-[90%]  md:mx-40 mx-10 my-3 items-center relative z-[1] sm:justify-start justify-center ">
        {
            PROPERTIES.map((data)=>(
              <PropertyCard data={data} />
            ))
        }
    </div>
  )
}

export default Properties