import React from 'react';
import helpers from './Helpers.jsx'
const Search = ( {handleSearch} ) => {
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const initiateSearch = () => {
        event.preventDefault();
        handleSearch(value)
    }

    return (
        helpers.BuildSubmitForm(value, handleChange, initiateSearch, 'Search')
    )
}

export default Search;