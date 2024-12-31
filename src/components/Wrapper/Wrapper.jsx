import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Wrapper.css'
import Navbar from '../Navbar/Navbar'

const Wrapper = ({ children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Sidebar open={open} onClose={()=>setOpen(!open)} />
      {open && (
        <div className="sidebar-overlay" onClick={()=>setOpen(!open)} />
      )}
      <main>
        <Navbar onMenuClick={()=>setOpen(!open)} />
        <div className="children">{children}</div>
      </main>
    </div>
  )
}

export default Wrapper