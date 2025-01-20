import React, { useState } from 'react'
import Logo from '../Logo/Logo'
import { perfectShape } from '../../utility';
import { routes } from '../../source';
import ThemeToggle from '../../ThemeToggle/ThemeToggle';
import './Sidebar.css'
import IconWrapper from './IconWrapper';

const Sidebar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <aside  className="sidebar">
      <div className="top">
        <Logo />
      </div>
      <ul className="middle">
        {routes.map((route, key) => (
          <li 
            className={`route ${key === 0 && 'active'}`} 
            key={key}
            onMouseEnter={() => setHoveredIndex(key)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href={route.path}>
              <div 
                className="icon"
                style={{...perfectShape(23, 23)}}
                data-tip={route.name}
              >
                <IconWrapper
                  Icon={route.icon}
                  HoverIcon={route.hoverIcon}
                  isHovered={hoveredIndex === key}
                />
              </div>
                <span className="text">{route.name}</span>
            </a>
          </li>
        ))}
        <ThemeToggle className='theme-toggle' />
      </ul>
    </aside>
  )
}

export default Sidebar