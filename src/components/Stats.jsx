import React from 'react'
import { STATS } from '../constants'

const Stats = () => {
  return (
    <div className="grid  md:grid-cols-4 grid-cols-1 gap-[10px] items-center ">
        {
            STATS.map((stat)=>(
                <div className={`flex flex-col py-2 px-10 text-center ${stat.style}`}>
                    <p className=" font-poppins font-thin text-6xl tracking-wider ">{stat.stat}</p>
                    <p className=" font-poppins font-thin text-lg pt-3 ">{stat.description}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Stats