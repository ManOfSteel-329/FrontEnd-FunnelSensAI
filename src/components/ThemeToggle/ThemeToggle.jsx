import React, { useEffect, useState } from 'react'
import { MdSunny } from "react-icons/md";
import {useMediaQuery} from 'react-responsive'
import { PiMoonStarsFill } from 'react-icons/pi';
import './ThemeToggle.css'

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

  const toggleTheme = () => {
    setIsDark(!isDark)
};

  return (
    <div className='slider-container' onClick={()=>toggleTheme()}>
      <div className={`slider-track ${isDark ? 'dark': 'light'}`}>
        <div className="icon-container">
          <MdSunny className='icon track-sun' />
          <PiMoonStarsFill className='icon track-moon' />
        </div>
        <div className={`slider-thumb ${isDark ? 'dark': 'light'}`}>
          {isDark ? (
            <PiMoonStarsFill className='icon dark' />
          ) : (
            <MdSunny className='icon light' />
          )}
        </div>
      </div>
    </div>
  )
}

export default ThemeToggle