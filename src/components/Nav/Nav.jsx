import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='header-list md:inline hidden'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><Link to='/booking'>Reservations</Link></li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
    </nav>
  )
}

export default Nav