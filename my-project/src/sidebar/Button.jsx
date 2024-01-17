import React from 'react'

const Button = ({onClick,value,title}) => {
  return (
    <button onClick={onClick} value={value} className={`px-4 py-1 border text-base hover:bg-blue hover:text-white`}>
        {title} 
    </button>
  )
}

export default Button