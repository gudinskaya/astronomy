import React, { useState, useEffect } from 'react'
import './Home.css'
import Calendar from 'react-calendar'
import Image from './cosmos.jpg'
import 'react-calendar/dist/Calendar.css'

function Home() {

  const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
  // const url = "http://example.com"
  const todayDate = new Date()
  const firstDay = new Date('1995-06-16')

  useEffect(() => {
    if (localStorage.getItem('date') === null) {
      fetchImage(todayDate)
    } else {
      fetchImage(localStorage.getItem('date'))
    }
  }, [])

  const [image, setImage] = useState(' ')

  const changeState = (clickedDate) => {
    console.log('clicked date ', clickedDate)
    console.log('first date ', firstDay)
    if (clickedDate === firstDay && todayDate.setDate(todayDate.getDate() + 1)) {
      alert("Please, try not to choose dates from the future or earlier 1995 06 16")
    } else {
      localStorage.clear()
      localStorage.setItem('date', clickedDate)
      fetchImage(clickedDate)
    }
  }

  const fetchImage = async (newDate) => {
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
    checkImage(image)
  }

  const [date, setMyDate] = useState(new Date())

  const [isImage, setIsImage] = useState(null)

  const checkImage = (image) => {
    if(image === null) {
      alert("Too many requests ;( \nPlease, try later")
    } else {
      image.url.includes('youtube') ? setIsImage(true) : setIsImage(false)
    }  
  }

  return (
    <div class="card img-card">
      <div class="card-image waves-effect waves-block waves-light">
        {/* <iframe className="video" src={'https://www.youtube.com/embed/X_UOLpUDwpU?rel=0'} /> */}
        {isImage
          ? <iframe className="video" src={image.url} />
          : <img class="activator" src={image.url} />
        }
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
        onChange={date => setMyDate(date)}
        onClickDay={date => changeState(date)}
        value={new Date(localStorage.getItem('date'))}
      />
    </div>
  )
}
export default Home
