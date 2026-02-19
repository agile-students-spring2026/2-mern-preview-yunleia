import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AboutUs = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:5002/aboutus')
      .then(response => {
        setData(response.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  if (!data) return <div>Loading...</div>

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>About Me</h1>
      <img 
        src={data.imageUrl} 
        alt={data.name} 
        style={{ width: '200px', borderRadius: '10px' }} 
      />
      <h2>{data.name}</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {data.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default AboutUs