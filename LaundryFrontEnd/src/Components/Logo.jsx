import React from 'react'
import logo from './Images/logo2.png'

function Logo() {
  return (
    <div className="p-2 text-center">
     <img src={logo} className="logoStyle"/>
     <h4 className="navbar-brand text-light" href="/">MyLaundry</h4>
    </div>
  )
}

export default Logo
