import React, { useState, useEffect } from 'react'
import './Home.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

function Home() {

  const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
  const todayDate = new Date()
  const firstDay = new Date('1995-06-16')

  

  const [image, setImage] = useState(' ')

  const changeState = (clickedDate) => {
    if (clickedDate < firstDay || clickedDate > todayDate) {
      alert("Please, try not to choose dates from the future or earlier 1995 06 16")
    } else {
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
  // const error = () => {
  //   alert("Oops! Choose anouther date or visit site later, because NASA doesn't let us to load this pic\nSorry, dude")
  // }
  useEffect(() => {
    if (localStorage.getItem('date') === null) {
      fetchImage(todayDate)
    } else {
      fetchImage(localStorage.getItem('date'))
    }
  }, [])

  return (
    <div className="card img-card">
      <div className="card-image waves-effect waves-block waves-light">
        {isImage
          ? <iframe className="video" src={image.url} />
          : <img alt="astronomy pic of the day" className="activator" src={image.url} />
        }
      </div>
      <div className="card-content">

        <span className="card-title activator grey-text text-darken-4">
          {image.title}
        </span>
        <p><a href="https://apod.nasa.gov/apod/astropix.html" rel="noopener noreferrer" target="_blank">Go to the NASA page</a></p>
      </div>
      <div className="card-reveal">
        <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
        <p>Here is some more information about this product that is only revealed once clicked on.</p>
      </div>
      <Calendar
        className="calendar"
        onChange={date => setMyDate(date)}
        onClickDay={date => changeState(date)}
        value={localStorage.getItem('date') ? new Date(localStorage.getItem('date')) : todayDate}
      />
    </div>
  )
}
export default Home
