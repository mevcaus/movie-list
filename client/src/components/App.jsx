import React from 'react';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = () => {
  const [query, setQuery] = React.useState('');
  const [queryResults, setQueryResults] = React.useState([]);

  // handle search event

  return (
    <ul>
      {movies.map((movie, index) => {
        return <MovieItem key={index} movieName={movie.title}/>
      })}
    </ul>
  )
};

function MovieItem({ movieName }) {
  return <li>{movieName}</li>
}

function search() {

}
export default App;

