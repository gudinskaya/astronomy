import React from 'react'
import Picture from '../../components/Picture/Picture'
import "./Gallery.css"

function Gallery() {
  function Last9Days() {
    const result = []
    for (let i = 0; i < 9; i++) {
      let d = new Date()
      d.setDate(d.getDate() - i)
      result.push(d.toISOString())
    }

    return (result)
  }
  return (
    <div className='gallery-container'>
      <h1 className="gallery-title">Pictures of the last days</h1>
      <div className="gallery">
        {Last9Days().map(date => {
          return <Picture key={`potld-${date}`} date={date.substring(0, 10)} />
        })}
      </div>
    </div>
  )
}
export default Gallery
