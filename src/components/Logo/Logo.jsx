import React from 'react'
import { IoMdFunnel } from "react-icons/io";
import './Logo.css'

const Logo = () => {
  return (
    <div className='logo'>
        <IoMdFunnel className='logo-icon' />
        <h2>Funnel SenseAI</h2>
    </div>
  )
}

export default Logo