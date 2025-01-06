import React, { useEffect, useState } from 'react'
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";
import {useMediaQuery} from 'react-responsive'
import { perfectShape } from '../utility';

const ThemeToggle = () => {
  useMediaQuery(
    {
      query: '(prefers-color-scheme: dark'
    },
    undefined,
    (preferDark) => {
      setIsDark(preferDark);
    }
  )

  const storageKey = 'theme';
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem(storageKey))
  )

  useEffect(() => {
    if (isDark) {
      document.firstElementChild.setAttribute('data-theme', 'dark');
      localStorage.setItem(storageKey, JSON.stringify(true))
    }
    else {
      document.firstElementChild.setAttribute('data-theme', 'light');
      localStorage.setItem(storageKey, JSON.stringify(false))
    }
  }, [isDark])

  return (
    <div className='theme-toggle'>
      <div className='theme-text'>
        <h5>Theme</h5>
        <p className="muted">{isDark ? 'Dark' : 'Light'}</p>
      </div>
      <label>
        <input 
          type='checkbox'
          className='input-checkbox'
          checked = {isDark}
          onChange={(event)=>setIsDark(event.target.checked)}
        />
        <div 
          className="sun"
          style={{ ...perfectShape(25, 25)}}
        >
          <MdSunny />
        </div>
        <div 
          className="moon"
          style={{ ...perfectShape(25, 25)}}
        >
          <FaMoon />
        </div>
      </label>
    </div>
  )
}

export default ThemeToggle