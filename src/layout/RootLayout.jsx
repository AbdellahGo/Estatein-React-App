import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '../components'
import { ThemeContext } from '../contextApi'
import { container } from '../classes'
import { bigGroupLines } from '../assets'
import Alert from '../components/alert/Alert'

const RootLayout = () => {
  const [alert, setAlert] = useState(false)
  const [navBarHeight, setNavBarHeight] = useState(null)
  return (
    <ThemeContext.Provider value={{ navBarHeight }}>
      <div>
        {alert && <Alert content='Email was sent successfully' navBarHeight={navBarHeight}/>}
        <NavBar setNavBarHeight={setNavBarHeight} />
        <Outlet />
        <Footer setAlert={setAlert} />
      </div>
    </ThemeContext.Provider>
  )
}

export default RootLayout