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
  const response = await fetch(url)
  const tours = await response.json()
  console.log(tours);
 }
fetchTours()

useEffect(() => {
  fetchTours()

}, [])


 if (loading) {
  return <main>loading</main>  
 }
  return <main>Tours</main>
}

export default App
