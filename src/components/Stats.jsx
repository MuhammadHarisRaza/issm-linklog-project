import React from 'react'
import { STATS } from '../constants'

const Stats = () => {
  return (
    <div className="flex flex-row ">
        {
            STATS.map((stat)=>(
                <div className={`flex flex-col py-2 px-10 ${stat.style}`}>
                    <p className=" font-poppins font-extralight text-6xl tracking-wider ">{stat.stat}</p>
                    <p className=" font-poppins font-thin text-lg pt-3 justify-self-center">{stat.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Stats