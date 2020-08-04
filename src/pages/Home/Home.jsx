import React, { Component, useState, useEffect } from 'react'
import './Home.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Home() {

	const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
	const todayDate = new Date()

	function parser(localDate) {
		console.log(localDate)
		let month = localDate.toString().substring(4, 7)
		const day = localDate.toString().substring(8, 11)
		const year = localDate.toString().substring(10, 15)

		switch (month) {
			case "Jan":
				month = "01"
				break
			case 'Feb':
				month = '02'
				break
			case 'Mar':
				month = '03'
				break
			case 'Apr':
				month = '04'
				break
			case 'May':
				month = '05'
				break
			case 'Jun':
				month = '06'
				break
			case 'Jul':
				month = '07'
				break
			case 'Aug':
				month = '08'
				break
			case 'Sep':
				month = '09'
				break
			case 'Oct':
				month = '10'
			case 'Nov':
				month = '11'
				break
			case 'Dec':
				month = '12'
				break
		}
		console.log(year + '-' + month + '-' + day)
		return (year + '-' + month + '-' + day)
	}

	useEffect(() => {
		fetchImage(todayDate)
	}, [])

	const [image, setImage] = useState(' ')

	const fetchImage = async (newDate) => {
		let data = ''
		if (newDate === todayDate) {
			data = await fetch(url)
		} else {
			const localDate = url + '&date=' + parser(newDate).trim()
			data = await fetch(localDate)
		}
		const image = await data.json()
		console.log(image)
		setImage(image)
	}
	const [date, setDate] = useState(new Date())

	return (
		<div class="card img-card">
			<div class="card-image waves-effect waves-block waves-light">
				<img class="activator" src={image.url} />
			</div>
			<div class="card-content">
				<span class="card-title activator grey-text text-darken-4">{image.title}<i class="material-icons right">more_vert</i></span>
				<p><a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">Go to the NASA page</a></p>
			</div>
			<div class="card-reveal">
				<span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
				<p>Here is some more information about this product that is only revealed once clicked on.</p>
			</div>
			<Calendar
				onChange={date => setDate(date)}
				onClickDay={date => fetchImage(date)}
				value={date}
			/>
		</div>
	)
}
export default Home
