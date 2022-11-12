import React from 'react'

const OfficeInfo = ({data}) => {
    console.log("Data-------->",data)
    const {title, description,phoneNumber,fax} = data
  return (
    <div className="flex justify-between flex-row mx-1 bg-gray px-1  py-12 bg-center bg-cover rounded-[20px] max-w-[500px] ">
        <div className="max-w-sm rounded overflow-hidden  border-t-4 border-black p-5">
            <div className="px-6 py-4">
                <div className=" font-normal text-black text-xl tracking-widest mb-2">{title}</div>
                <p className="text-black leading-[25px] mb-5 font-normal text-base">
                    {description}
                </p>
                <p className="text-black leading-[15px] font-normal text-base">
                    {phoneNumber}
                </p>
                <p className="text-black leading-[35px] font-normal text-base">
                    {fax}
                </p>
            </div>
        </div>
    </div>
  )
}

export default OfficeInfo