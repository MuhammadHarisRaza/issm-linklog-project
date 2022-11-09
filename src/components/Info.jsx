import React from 'react'
import info from "../assets/info.jpg"
import { INFO_ANSWER, INFO_DESCRIPTION, INFO_QUESTION, INFO_TITLE } from '../constants'

const Info = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse overflow-hidden relative mx-5 md:my-10 my-0">
      <div className="flex-1 flex-col pt-2 px-10 relative border-2 rounded-tl-[100px] border-golden">
        <p className=" pl-[6rem] pt-20 font-poppins font-semibold text-3xl">{INFO_TITLE}</p>
        <p className=" pl-[6rem] pt-10 justify-start font-poppin">{INFO_DESCRIPTION}</p>
        <p className=" pl-[6rem] pt-2 font-poppins font-semibold text-lg">{INFO_QUESTION}</p>
        <p className=" pl-[6rem] pt-1 justify-start">{INFO_ANSWER}</p>
      </div>
      <div className={`flex-1 flex  justify-center items-center  relative border-2 rounded-br-[100px]  border-golden`}>
        <img src={info} alt="billing" className="w-[100%] h-[100%] relative z-[5]  rounded-br-[100px] " />
      </div>
    </div>
  )
}

export default Info