import React from 'react'
import Button from './Button'

const AboutUs = ({data}) => {
    const {image,Title,Description,ButtonText,imageStyle,flexStyle,buttonStyle,textStyle, buttonFlex} =data
  return (
    <div className={`flex flex-1 ${flexStyle} my-7 justify-around overflow-hidden relative`}>
        <div className={`flex-1 flex w-[100%] h-[40%]  justify-center items-center  relative border-2 ${imageStyle}  border-golden`}>
            <img src={image} alt="billing" className={`relative z-[5]  ${imageStyle} `} />
        </div>
        <div className="flex-1 flex-col pt-2 mx-6 relative">
            <p className={`mt-5 font-poppins font-semibold text-golden text-3xl ${textStyle}`}>{Title}</p>
            <p className={`mt-10 justify-start font-poppin text-golden ${textStyle}`}>{Description}</p>
            <div className={`mt-4 flex ${buttonFlex} `}>
                <Button text={ButtonText} buttonStyle={buttonStyle} />
            </div>
        </div>
    </div>
  )
}

export default AboutUs