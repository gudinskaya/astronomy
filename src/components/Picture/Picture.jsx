import React, { useState, useEffect } from 'react'
import Image from '../../pages/Home/cosmos.jpg'
import "./Picture.css"

function Picture({ date }) {

	const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
	// const url = "http://example.com"
	useEffect(() => {
		fetchImage(date)
	}, [])

	const [image, setImage] = useState(' ')

	const fetchImage = async (newDate) => {
		const data = await fetch(url + '&date=' + newDate.trim())
		const image = await data.json()
		setImage(image)
	}

	return (
		<div className='pic-container'>
			<img className="pic" src={image.url} />
		</div>
	)
}
export default Picture
