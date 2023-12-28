import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '../components'
import { ThemeContext } from '../contextApi'
import { container } from '../classes'
import { bigGroupLines } from '../assets'

const RootLayout = () => {
  const [alert, setAlert] = useState(false)
  const [navBarHeight, setNavBarHeight] = useState(null)
  return (
    <ThemeContext.Provider value={{ navBarHeight }}>
      <div>
        <NavBar setNavBarHeight={setNavBarHeight} />
        <Outlet />
        <Footer setAlert={setAlert} />
        {alert && (
          <div className={`${container}  p-20 xxl:text-24 md:text-18 text-14 font-semibold bg-grey-10 border-grey-15 border-1 rounded-10 text-white fixed left-[50%] translate-x-[-50%] text-center z-[1000]`}
            style={{ top: `${navBarHeight + 30}px`, backgroundImage:  `url(${bigGroupLines})`, backgroundRepeat: 'no-repeat'}}>
            Email was sent successfully
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  )
}

export default RootLayout