import React from 'react'
import RegionCard from './RegionCard'

const RegionInfo = ({data}) => {
    console.log("Data------------>",data)
    const {region,office} = data
  return (
    <div className="container border-t-4 border-black max-w-[100%]">
        <p className="font-normal text-black text-xl tracking-widest mb-2 py-4">{region}</p>
        <div className="flex justify-between flex-row   py-2 bg-center bg-cover ">
            <RegionCard data={office} />
        </div>
    </div>
  )
}

export default RegionInfo