import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '../components'

const RootLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default RootLayout