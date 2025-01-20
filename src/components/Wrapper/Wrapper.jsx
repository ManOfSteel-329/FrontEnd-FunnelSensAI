import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Wrapper = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>
        <div className="children">{children}</div>
      </main>
    </div>
  )
}

export default Wrapper