import React from 'react'
import video from "../assets/home.mp4"
import { HOME, HOME_2, HOME_BUTTON_TEXT } from '../constants'
import Button from './Button'

const Hero = () => {
  return (
    <div className="h-[70vh] overflow-hidden mx-5 rounded-bl-3xl relative">
        <video src={video} autoPlay loop muted className="w-[100%] object-cover" />
        <div className="absolute w-[100%] h-[100%] top-40 left-20 pt-20 flex flex-col justify-start items-baseline pl-20">
            <p className="font-poppins font-normal text-5xl text-white">{HOME}</p>
            <p className="font-poppins font-normal text-5xl text-white">{HOME_2}</p>
            <div className="mt-3">
                <Button text={HOME_BUTTON_TEXT} buttonStyle="rounded-tr-3xl" />
            </div>
        </div>
    </div>
  )
}

export default Hero