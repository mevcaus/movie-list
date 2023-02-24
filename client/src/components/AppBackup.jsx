const [queryResults, setQueryResults] = React.useState([]);
  const [movieList, setMovieList] = React.useState(movies);
  // handle search event
  const searchQuery = (query) => {
    setQueryResults(movieList.filter((movie) => {
      return movie.title.toLowerCase().includes(query.toLowerCase())
    }))
  }
  const handleAdd = (movieName) => {
    setMovieList(movieList.concat([{title: movieName, watched: false}]));
  }

  const handleWatched = (movie) => {
    movie.watched = !movie.watched;
  }

  const filterWatched = () => {
    setQueryResults(movieList.filter((movie) => {
      return movie.watched;
    }))
  }

  const filterUnWatched = () => {
    setQueryResults(movieList.filter((movie) => {
      return !movie.watched;
    }))
  }

  return (
    <div>

      <AddMovie handleAdd={handleAdd} />

      <Search handleSearch={searchQuery}/>

      <button onClick={filterWatched}>Watched</button>
      <button onClick={filterUnWatched}>To Watch</button>
      <ul>
        {queryResults.length > 0 ? (
          queryResults.map((movie, index) => {
            return <MovieItem key={index} movieName={movie.title} handleAdd={handleAdd} />
          })
        ) : (
          movieList.map((movie, index) => {
            return <MovieItem key={index} movieName={movie.title} handleAdd={handleAdd} />
          })
        )

        }
      </ul>
    </div>


  )
};

function MovieItem({ movieName, handleWatched }) {
  return <li>
      {movieName}
      <button onClick={handleWatched} >Toggle Watched</button>
    </li>
}

function Search( {handleSearch} ) {
  const [query, setQuery] = React.useState('');

  const searchChange = (event) => {
    setQuery(event.target.value);
  }

  const initiateSearch = () => {
    event.preventDefault();
    handleSearch(query);
  }

  return (
    <form>
      <input onChange={searchChange} value={query} type='text' />
      <button onClick={initiateSearch}>Search</button>
    </form>
  )
}

function AddMovie ( {handleAdd} ) {
  const [movie, setMovie] = React.useState('');

  const movieChange = (event) => {
    setMovie(event.target.value);
  }

  const initiateMovie = () => {
    event.preventDefault();
    handleAdd(movie);
    setMovie('');
  }
  return (
    <form>
      <input value={movie} onChange={movieChange} type='text' />
      <button onClick={initiateMovie} >Add Movie</button>
    </form>
  )