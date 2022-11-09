import React from 'react'
import { PROPERTIES } from '../constants'
import PropertyCard from './PropertyCard'

const Properties = () => {
  return (
    <div className="flex flex-wrap sm:justify-start justify-center  w-full mx-40 my-3 items-stretch relative z-[1]">
        {
            PROPERTIES.map((data)=>(
              <PropertyCard data={data} />
            ))
        }
    </div>
  )
}

export default Properties