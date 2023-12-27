import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '../components'
import { ThemeContext } from '../contextApi'

const RootLayout = () => {
  const Theme = useContext(ThemeContext)
  const [navBarHeight, setNavBarHeight] = useState(null)
  return (
    <ThemeContext.Provider value={{ navBarHeight }}>
      <div>
        <NavBar setNavBarHeight={setNavBarHeight} />
        <Outlet />
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default RootLayout