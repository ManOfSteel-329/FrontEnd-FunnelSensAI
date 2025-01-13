import React from 'react'
import { IoMdFunnel } from "react-icons/io";
import './Logo.css'
import funnelSmlLogo from '../../assets/funnelSmlLogo.png'

// Logo is a constant variable
// let Logo= 
// const Logo 

const Logo = () => { // Logo is a referrence to the function
  return (
    <div className='logo'>
        {/* <IoMdFunnel className='logo-icon' /> */}
        <img src={funnelSmlLogo} alt=""/>
        <h2>unnel SenseAI</h2>
    </div>
  )
}


// function Logo() {
//     return (
//       <div className='logo'>
//         <img src={FunnelLrgLogo} alt="" />
//         <h2>FunnelSensAI</h2>
//       </div>
//     )
//   }
  

export default Logo
 