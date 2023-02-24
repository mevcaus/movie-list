import React, { useState } from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import helpers from './Helpers.jsx'
import AddMovie from './AddMovie.jsx'

var movies = [
  {title: 'Mean Girls', watched: false},
  {title: 'Hackers', watched: false},
  {title: 'The Grey', watched: false},
  {title: 'Sunshine', watched: true},
  {title: 'Ex Machina', watched: false},
];

const App = () => {
  const [movieList, setMovieList] = useState(movies);
  const [queryList, setQueryList] = useState([]);
  const handleSearch = (value) => {
    setQueryList(movieList.filter((movie) => {
      return movie.title.toLowerCase().includes(value.toLowerCase());
    }))
  }

  const handleAdd = (movie) => {
    setMovieList(movieList.concat({title: movie, watched: false}))
  }

  const handleWatched = () => {
    setQueryList(movieList.filter((movie) => {
      return movie.watched;
    }))
  }

  const handleToWatch = () => {
    setQueryList(movieList.filter((movie) => {
      return !movie.watched;
    }))
  }

  return (
    <div>
      <h2>Movie List</h2>
      <AddMovie handleAdd={handleAdd}/>
      <Search handleSearch={handleSearch} />
      <button onClick={handleWatched}>Watched</button>
      <button onClick={handleToWatch}>To Watch</button>
      { queryList.length > 0 ?
      helpers.BuildMovieList(queryList) :
      helpers.BuildMovieList(movieList)
      }
    </div>
  )
}


export default App;