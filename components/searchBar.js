import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';

const SearchBar = ({ onSearch = () => {} }) => {
  const [query, setQuery] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-gray-100 px-3 py-1 rounded-lg focus-within:bg-gray-200 focus-within:text-black focus-within:shadow-inner hover:shadow-inner"
    >
      <input
        type="search"
        name="q"
        id="q"
        placeholder="Search..."
        onChange={e => setQuery(e.target.value)}
      />
      <button>
        <Icon type="search" disableBackground size="small" />
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
