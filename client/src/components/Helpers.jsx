import React from 'react';
import MovieList from './MovieList.jsx'
const helpers = {

    BuildMovieList: (arrayOfMovies) => {
        return arrayOfMovies.map((movie, index) => {
            return <MovieList key={index} movie={movie.title} watched={movie.watched}/>
        })
    },

    BuildSubmitForm: (value, onChangeFunc, onClickFunc, buttonName) => (
        <form onSubmit={e => e.preventDefault()}>
            <input value={value} onChange={onChangeFunc} />
            <button type='button' onClick={onClickFunc} >{buttonName}</button>
        </form>
    )
}
export default helpers;