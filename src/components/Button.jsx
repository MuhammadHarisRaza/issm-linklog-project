import React from 'react'

const Button = ({text,buttonStyle}) => {
  return (
    <button className={` bg-firered hover:bg-carrot text-black text-[14px]  ${buttonStyle} font-medium tracking-widest  py-3 px-8 rounded`}>
        {text}
    </button>
  )
}

export default Button