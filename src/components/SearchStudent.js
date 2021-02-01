import React from 'react';

const SearchStudent = ({ handleSearchStudent, error }) => (
  <div className="search">
    {
      error && <p className="search__error">{error}</p>
    }
    <form className="search--form" onSubmit={handleSearchStudent}>
      <input className="form--input" name="search" type="text" placeholder="Search by name" required />
      <button>Search</button>
    </form>
  </div>
);

export default SearchStudent;