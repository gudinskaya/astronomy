import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
	const baseURL = process.env.BASE_URL || '/astronomy'
	console.log(baseURL)

  return (
    <>
      <nav className="nawbar">
        <div className="nav-wrapper teal darken-1 px1">
          <a href={baseURL} className="brand-logo logo-mobile left" >APOD</a>
          <a href={baseURL} className="brand-logo logo-decktop left" >Astronomy Picture of the Day</a>
          <ul className="links right">
            <Link to={baseURL}>Home</Link>
            <Link to={`${baseURL}/gallery`}>Gallery</Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
