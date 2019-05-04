import React from 'react';

const SearchResultList = ({ topics }) => (
    <div>
      <h2 className={topics.length ? 'show' : ''}>Reddit Topics:</h2>
      <ul>
      {
        topics.map((topic, index) => (
          <li className='sub-reddit' key={`topic-${index}`}>
            <a href={topic.data.url}><h3>{topic.data.title}</h3></a>
            <p>Up votes: {topic.data.ups}</p>
          </li>
        ))
      }
      </ul>
    </div>
);

export default SearchResultList;