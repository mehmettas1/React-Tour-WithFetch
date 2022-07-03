import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
 const [loading, setLoading] = useState(true);
 const[tours,setTours] = useState([])

 const fetchTours = async () => {
    setLoading(true)
  try {
    const response = await fetch(url)
    const data = await response.json()
    setLoading(false);
    setTours(data)

  } catch (error) {
    setLoading(false)
    // console.log(error);
  }
  
 }
fetchTours()

useEffect(() => {
  fetchTours()

}, [])


 if (loading) {
  return <main>loading</main>  
 }
  return <main>Tours tours = {tours}</main>
}

export default App
