import React from 'react'

const Button = ({text,buttonStyle}) => {
  return (
    <button className={` bg-firered hover:bg-carrot text-black text-[8px] md:text-[14px]  ${buttonStyle} font-medium tracking-widest md:tracking-widest  py-3 px-4 md:px-8 rounded`}>
        {text}
    </button>
  )
}

export default Button