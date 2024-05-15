import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'

function MyComponent() {
  //   const [data, setData] = useState([])

  //   useEffect(() => {
  //     // Fetch data from your WebAPI
  //     axios
  //       .get('/api/Books')
  //       .then((response) => setData(response.data))
  //       .catch((error) => console.error('Error fetching data:', error))
  //   }, [])
  const data = useLoaderData()
  return (
    <div>
      {data.map((item) => (
        <p key={item.Id}>{item.Name}</p>
      ))}
    </div>
  )
}

export default MyComponent
