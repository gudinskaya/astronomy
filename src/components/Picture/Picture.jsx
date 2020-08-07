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
    checkImage(image)
  }

  const [isImage, setIsImage] = useState(null)

  const checkImage = (image) => {
    image.url.includes('youtube') ? setIsImage(true) : setIsImage(false)
    console.log(isImage, "boolean is image contains")
  }

  return (
    <div className='pic-container'>
      {/* {image.url} */}
      {isImage
          ? <iframe className="pic" src={image.url} />
          : <img className="pic" src={image.url} />
        }
      {/* <img className="pic" src={image.url} /> */}
    </div>
  )
}
export default Picture
