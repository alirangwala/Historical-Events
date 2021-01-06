import React from 'react';

const SearchBar = ({ searchInput, handleClick, handleChange }) => {

  return (
    <form>
      <label>Take a look through history!</label>
      <input type='text' onChange={e => handleChange(e)} placeholder='Search...'></input>
      <button type='submit' onClick={e => handleClick(e)}>Submit</button>
    </form>
  );
}

export default SearchBar;