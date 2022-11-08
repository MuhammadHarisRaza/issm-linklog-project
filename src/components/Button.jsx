import React from 'react'

const Button = ({text}) => {
  return (
    <button class=" bg-firered hover:bg-carrot text-black tracking-wider rounded-tr-3xl font-medium py-4 px-10 rounded">
        {text}
    </button>
  )
}

export default Button