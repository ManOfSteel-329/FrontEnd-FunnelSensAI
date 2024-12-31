import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { perfectShape } from '../../utility';
import profile from '../../assets/profile.png'
import { IoNotificationsOutline } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import './Navbar.css'
import Logo from '../Logo/Logo';

const Navbar = ({onMenuClick}) => {
  const [focus, setFocus] = useState(false)

  return (
    <nav className='blur navbar'>
      <Logo />
      <h2 className="page-title">Page Title</h2>
      <div className={`blur search ${focus && 'active'}`}>
        <FiSearch className='search-icon' />
        <input 
          type="text"
          placeholder='Search'
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
        />
      </div>

      <div className="notification" style={{...perfectShape(40, 40)}}>
        <IoNotificationsOutline />
      </div>

      <div className="user">
        <div 
          className="profile"
          style={{...perfectShape(40, 40)}}
        >
          <img src={profile} alt="" />
        </div>
        <div className="user-info">
          <h4 className="name">
            Jane Doe
          </h4>
          <p className="account-info">
            Administrator
          </p>
        </div>
      </div>
      <div className="menu" onClick={onMenuClick || (()=>{})}>
        <TiThMenu />
      </div>
    </nav>
  )
}

export default Navbar