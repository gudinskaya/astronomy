import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
	return (
		<nav>
			<div className="nav-wrapper teal darken-1 px1">
				<a href="/" className="brand-logo">Asctronomy Picture of the Day</a>
				<ul className="links right hide-on-med-and-down">
					<Link to='/'>Home</Link>
					<Link to='/gallery'>Gallery</Link>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
