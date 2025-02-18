import React from 'react'

interface TitleProps {
    title: string
}
    

const Title = ({ title }: TitleProps) => {
  return (
    <>
    <div className="h-[2rem] bg-[#ff000063]">
        <h1 className="text-4xl font-bold text-center text-white">{title}</h1>
  
    </div>
    </>
  )
}

export default Title