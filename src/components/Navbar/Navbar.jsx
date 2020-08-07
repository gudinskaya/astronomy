import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <nav className="nawbar">
        <div class="nav-wrapper teal darken-1 px1">
          <a href="/" className="brand-logo left" >APOD</a>
          <ul className="links right">
            <Link to='/'>Home</Link>
            <Link to='/gallery'>Gallery</Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
