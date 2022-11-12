import React from 'react'

const OfficeInfo = ({data}) => {
    console.log("Data-------->",data)
    const {title, description,phoneNumber,fax} = data
  return (
    <div className="flex justify-between md:flex-row flex-col mx-1 bg-gray px-1  md:py-12 py-1 bg-center bg-cover rounded-[20px] md:max-w-[500px] max-w-[800px] ">
        <div className="md:max-w-sm max-w-full rounded overflow-hidden  md:border-t-4 border-t-2 border-black md:p-5 p-0">
            <div className="md:px-6 px-0 md:py-4 py-2">
                <div className=" font-normal text-black md:text-xl text-[13px] tracking-widest mb-2">{title}</div>
                <p className="text-black md:leading-[25px] leading-3 mb-5 font-normal md:text-base text-[12px]">
                    {description}
                </p>
                <p className="text-black leading-[15px] font-normal md:text-base text-[12px]">
                    {phoneNumber}
                </p>
                <p className="text-black leading-[35px] font-normal md:text-base text-[12px]">
                    {fax}
                </p>
            </div>
        </div>
    </div>
  )
}

export default OfficeInfo