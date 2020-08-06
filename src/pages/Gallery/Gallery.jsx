import React, { useState, useEffect } from 'react'
import Picture from '../../components/Picture/Picture'
import "./Gallery.css"

function Gallery() {
	function Last9Days() {
		const result = []
		for (let i = 2; i < 11; i++) {
			let d = new Date()
			d.setDate(d.getDate() - i)
			result.push(d.toISOString())
		}

		return (result)
	}
	return (
		<div className='gallery-container'>
			<h1 className="gallery-title">Pictures of the last week</h1>
			<div className="gallery" >
					{Last9Days().map(date => {
						return <Picture date={date.substring(0, 10)} />
					})}
				</div>
			</div>



	)
}
export default Gallery
