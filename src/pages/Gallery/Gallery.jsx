import React, { useState, useEffect } from 'react'
import Picture from '../../components/Picture/Picture'

function Gallery() {
	function Last7Days() {
		const result = []
		for (let i = 1; i < 8; i++) {
			let d = new Date()
			d.setDate(d.getDate() - i)
			result.push(d.toISOString())
		}

		return (result)
	}
	return (
		<>
			<h1>Pictures of the last week</h1>
			{Last7Days().map(date => {
				console.log(date.substring(0, 10), "привет со дна")
				return <Picture date={date.substring(0, 10)}/>
			})}
		</>
	)
}
export default Gallery
