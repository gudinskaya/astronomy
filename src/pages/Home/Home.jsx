import React, { useState, useEffect } from 'react'
import './Home.css'
import Calendar from 'react-calendar'
import Image from './cosmos.jpg'
import 'react-calendar/dist/Calendar.css'

function Home() {

	const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
	// const url = "http://example.com"
	const todayDate = new Date()
	localStorage.setItem('date', todayDate)

	function parser(localDate) {
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
		return (year + '-' + month + '-' + day)
	}

	useEffect(() => {
		console.log(localStorage.getItem('date'))
		console.log(new Date())
		fetchImage(localStorage.getItem('date'))
	}, [])

	const [image, setImage] = useState(' ')

	const changeState = (clickedDate) => {
		console.log('clicked date ', clickedDate)
		localStorage.setItem('date', clickedDate)
		fetchImage(clickedDate)
	}

	const fetchImage = async (newDate) => {
		// localStorage.setItem('date', newDate)
		// console.log(localStorage.getItem('date'), ' <- clicked date in local storage ')
		let data = ''
		if (newDate === todayDate) {
			console.log('ferch today')
			data = await fetch(url)
		} else {
			console.log(newDate)
			const formatDate = new Date(newDate).toISOString().substring(0, 10)
			const localDate = url + '&date=' + formatDate.trim()
			console.log('ferch the other day')
			data = await fetch(localDate)
		}
		const image = await data.json()
		setImage(image)
	}

	const [date, setDate] = useState(new Date())

	return (
		<div class="card img-card">
			<div class="card-image waves-effect waves-block waves-light">
				<img class="activator" src={image.url} />
			</div>
			<div class="card-content">
			
				<span class="card-title activator grey-text text-darken-4">
				{image.title}
				{/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				Excepteur sint occaecat cupidatat non proident,
				sunt in culpa qui officia deserunt mollit anim id est laborum. */}
				<i class="material-icons right">more_vert</i></span>
				<p><a href="https://apod.nasa.gov/apod/astropix.html" rel="noopener noreferrer" target="_blank">Go to the NASA page</a></p>
			</div>
			<div class="card-reveal">
				<span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
				<p>Here is some more information about this product that is only revealed once clicked on.</p>
			</div>
			<Calendar
				className="calendar"
				onChange={date => setDate(date)}
				onClickDay={date => changeState(date)}
				value={date}
			/>
		</div>
	)
}
export default Home
