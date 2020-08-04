import React, { Component, useState, useEffect } from 'react'
import './Home.css'
// import Calendar from 'react-calendar'
// import MyCalendar from '../../components/MyCalendar'
// import 'react-calendar/dist/Calendar.css'

function Home() {

	const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

	useEffect(() => {
		fetchItems()
	}, [])

	const [items, setItems] = useState(' ')

	const fetchItems = async () => {
		const data = await fetch(url)
		const items = await data.json()
		console.log(items)
		setItems(items)
	}
	return (
			<div class="card img-card">
				<div class="card-image waves-effect waves-block waves-light">
					<img class="activator" src={items.url} />
				</div>
				<div class="card-content">
					<span class="card-title activator grey-text text-darken-4">{items.title}<i class="material-icons right">more_vert</i></span>
					<p><a href="https://apod.nasa.gov/apod/astropix.html" target="_blank">Go to the NASA page</a></p>
				</div>
				<div class="card-reveal">
					<span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
					<p>Here is some more information about this product that is only revealed once clicked on.</p>
				</div>
				{/* <MyCalendar></MyCalendar> */}
			</div>
	)
}
export default Home