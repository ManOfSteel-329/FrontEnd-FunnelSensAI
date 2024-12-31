import React from 'react'
import Logo from '../Logo/Logo'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { perfectShape } from '../../utility';
import { routes } from '../../source';
import ThemeToggle from '../../ThemeToggle/ThemeToggle';
import profile from '../../assets/profile.png'
import './Sidebar.css'

const Sidebar = ({open, onClose}) => {
  return (
    <aside className={`sidebar ${open && 'card open'}`}>
      <div className="top">
        <Logo />
        <div 
          className="close-btn"
          onClick={onClose || (() => {})}
          style={{...perfectShape(40, 40)}}
        >
          <IoIosCloseCircleOutline />
        </div>
      </div>
      <ul className="middle">
        {routes.map((route, key) => (
          <li className={`route ${key === 0 && 'active'}`} key={key}>
            <a href={route.path}>
              <div 
                className="icon"
                style={{...perfectShape(30, 30)}}
                data-tip={route.name}
              >
                    <route.icon />
              </div>
                <span className="text">{route.name}</span>
            </a>
          </li>
        ))}
        <ThemeToggle className='theme-toggle' />
      </ul>
      <div className="bottom">
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
      </div>
      
       {/* <h1>Test</h1> */}
    </aside>
  )
}

export default Sidebar