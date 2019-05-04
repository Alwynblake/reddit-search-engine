import React from 'react';

const SearchForm = ({ handleTopic, handleLimit, handleSubmit, errorExists }) => (
    <form onSubmit={handleSubmit}>
      <input
          className={ errorExists ? 'error' : 'normal'}
          name='textInput'
          placeholder='reddit topic'
          type='text'
          onChange={handleTopic}
      />

      <input
          className={ errorExists ? 'error' : 'normal'}
          name='numberInput'
          placeholder='search limit'
          type='number'
          onChange={handleLimit}
          min='1'
          max='99'/>

      <button type='submit'>Search</button>
    </form>
);

export default SearchForm;

