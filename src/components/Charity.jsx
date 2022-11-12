import React from 'react'
import { CHARITY } from '../constants'
import Button from './Button'

const Charity = () => {
    const {image,Title,Description,ButtonText,imageStyle,flexStyle,buttonStyle} = CHARITY
  return (
    <div className="flex flex-col justify-center w-[99%] py-5 px-40 pt-10">
        <div className={`flex flex-1 ${flexStyle} w-full my-2 justify-around overflow-hidden relative`}>
            <div className={`flex-1 flex shrink  h-[40%]  justify-center items-center  relative border-2 ${imageStyle}  border-golden`}>
                <img src={image} alt="billing" className={`relative z-[5]  ${imageStyle} `} />
            </div>
            <div className="flex-1 flex-col bg-oceanicblue pt-8 pl-10 w-1/3 relative border-2 rounded-tr-[100px]">
                <p className="mt-5 font-poppins font-semibold text-charcoal text-3xl">{Title}</p>
                <p className="mt-10 justify-start font-poppin text-charcoal">{Description}</p>
                <div className="mt-8">
                    <Button text={ButtonText} buttonStyle={buttonStyle} />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Charity