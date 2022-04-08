// icons
import { VscGithub } from "react-icons/vsc"

// dependencies
import HimanalQRcode from "../puplic/HimanalQRcode.svg"

import React from 'react'

const About = () => {
  return (
    <div className=" flex flex-col justify-center items-center   ">
        <h1 className='text-4xl pb-11 text-amber-500  '> Github Users Finder</h1>
        <h2 className='text-l text-amber-300 w-[40%] text-center '> It's React app that made by Brad traversy to finding users are have github profile and this app has been copy by me ( himanal) as home practice</h2>
        <p className='text-amber-500 mt-8  flex  '> <VscGithub className="text-2xl" /> :<a href='https://github.com/himanal' className=""> himanal  </a></p>    
        <img src={HimanalQRcode} alt=""  className="w-16 h-16 mt-4"/>
    </div>
  )
}

export default About

