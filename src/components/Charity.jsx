import React from 'react'
import { CHARITY } from '../constants'
import Button from './Button'

const Charity = () => {
    const {image,Title,Description,ButtonText,imageStyle,flexStyle,buttonStyle} = CHARITY
  return (
    <div className=" justify-center w-[99%] py-5 px-40 pt-10">
        <div className={`flex flex-1 md:flex-row flex-column w-full my-2 justify-around overflow-hidden relative`}>
            <div className={`md:flex-1 md:flex shrink  md:h-[40%] h-full border-2  justify-center items-center  relative ${imageStyle}  border-golden`}>
                <img src={image} alt="billing" className={`relative z-[5]  ${imageStyle} `} />
            </div>
            <div className="flex-1 flex-col bg-oceanicblue pt-8 pl-10 w-1/3 relative border-2 border-golden rounded-tr-[100px]">
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