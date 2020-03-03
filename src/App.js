import React, {useState, useEffect} from 'react'
import './App.css'

import Movies from './components/Movies/Movies'

const App = () => {

  const [movies, setMovies] = useState([{}])

  const fetchRating = async () => {
    const response = await fetch('http://localhost:3000/movies')
    const data = await response.json()
    console.log(data);
    setMovies(data)
  }

  useEffect(() => {
    fetchRating()
  },[])


  return (
    <>
      <h1>Movies!</h1>
      <Movies movies={movies}/>
    </>
  )
}

export default App;
