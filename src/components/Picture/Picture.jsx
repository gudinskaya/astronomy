import React, { useState, useEffect } from 'react'

function Picture({ date }) {

	const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

	useEffect(() => {
		fetchImage(date)
	}, [])

	const [image, setImage] = useState(' ')

	const fetchImage = async (newDate) => {
		console.log(newDate, 'picture date from gallery')
		const data = await fetch(url + '&date=' + newDate.trim())
		const image = await data.json()
		console.log(image, "все КАРТИНКИ")
		setImage(image)
	}

	return (
		<div class="row">
			<div class="col s12 m7">
				<div class="card">
					<div class="card-image">
						<img src={image.url} />
						<span class="card-title">{image.title}</span>
					</div>
					<div class="card-content">
						<p>{image.explanation}</p>
					</div>
					{/* <div class="card-action">
						<a href="#">This is a link</a>
					</div> */}
				</div>
			</div>
		</div>
	)
}
export default Picture
