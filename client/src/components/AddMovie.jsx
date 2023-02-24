import React from 'react';
import helpers from './Helpers.jsx';

const AddMovie = ( {handleAdd} ) => {
    const [movie, setMovie] = React.useState('');
    const handleChange = (event) => {
        setMovie(event.target.value);
    }
    const moveMovie = () => {
        event.preventDefault();
        handleAdd(movie);
    }
    return (
        helpers.BuildSubmitForm(movie, handleChange, moveMovie, 'Add Movie')
    )
}

export default AddMovie;