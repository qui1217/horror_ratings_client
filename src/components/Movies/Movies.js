import React from 'react';
import './Movies.css'

const Movies = (props) => {

  return (
    <div className="movie-container">
      {props.movies.map((movie, index) => (
        <div key={index} className="movie">
          <h2>{movie.title}</h2>
          <img src={movie.image_url}/>
          <h3>Scare Factor: {movie.rating}/10</h3>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Movies;
