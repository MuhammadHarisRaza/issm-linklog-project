import React from 'react'
import info from "../assets/info.jpg"
import { INFO_ANSWER, INFO_DESCRIPTION, INFO_QUESTION, INFO_TITLE } from '../constants'

const Info = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse overflow-hidden relative mx-5 md:my-10 my-10">
      <div className="flex-1 flex-col px-5 md:px-10 py-5 md:py-0 relative border-2 md:rounded-tl-[100px] rounded-br-[100px] border-golden">
        <p className="pl-[0rem] md:pl-[6rem] pt-4 md:pt-10 font-poppins font-semibold text-md md:text-3xl">{INFO_TITLE}</p>
        <p className="pl-[0rem] md:pl-[6rem] pt-4 md:pt-10 justify-start font-poppin">{INFO_DESCRIPTION}</p>
        <p className="pl-[0rem] md:pl-[6rem] pt-1 md:pt-2 font-poppins font-semibold text-lg">{INFO_QUESTION}</p>
        <p className="pl-[0rem] md:pl-[6rem] pt-1 justify-start">{INFO_ANSWER}</p>
      </div>
      <div className={`flex-1 flex  justify-center items-center  relative border-2 rounded-tl-[100px]  md:rounded-br-[100px]   border-golden`}>
        <img src={info} alt="billing" className=" bg-cover relative z-[5] rounded-tl-[100px]  md:rounded-br-[100px] " />
      </div>
    </div>
  )
}

export default Info