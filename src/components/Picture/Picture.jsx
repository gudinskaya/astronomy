import React, { useState, useEffect } from 'react'
import "./Picture.css"

function Picture({ date }) {

  const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
  
  const [image, setImage] = useState(' ')
  
  const fetchImage = async (newDate) => {
    const data = await fetch(url + '&date=' + newDate.trim())
    const image = await data.json()
    setImage(image)
    checkImage(image)
  }
  
  useEffect(() => {
    fetchImage(date)
  }, [date])

  const [isImage, setIsImage] = useState(null)

  const checkImage = (image) => {
    setIsImage(!image.url.includes('youtube'))
  }

  const ImgComp = isImage ? 'img' : 'iframe'

  return (
    <div className='pic-container'>
      <ImgComp className="pic" src={image.url} allowFullScreen />
    </div>
  )
}
export default Picture
