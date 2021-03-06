import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { doSearch } from '../../actions/search_actions';

const Search = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [query, setQuery] = useState('');
  const update = (e) => setQuery(e.target.value);
    
  const handleClick = (e) => {
    e.preventDefault();
    const newSearch = query.split(' ');
    const fixedSearch = newSearch.length ? newSearch.map(ele => ele[0].toUpperCase() + ele.slice(1).toLowerCase()) : [];
    const newQuery = fixedSearch.join(' ');
    dispatch(doSearch({ query: newQuery }));
    history.push('/search');
    setQuery('');
  }

  return (
    <form className="search-box" onSubmit={handleClick}>
      <div className="nav-search">
        <input 
            type="text" 
            className="search"
            placeholder="Where are you going?" 
            value={query}
            onChange={e => update(e)}
            />
        <label>LOCATION</label>
        <button className="search-button" onClick={(e) => handleClick(e)}><i className="fas fa-search"></i>Search</button>
      </div>
    </form>
  )
}

export default Search;