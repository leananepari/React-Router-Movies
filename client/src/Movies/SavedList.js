import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie, index) => (
      <Link to={`/movies/${movie[1]}`} exact="true" key={index}><span className="saved-movie">{movie[0].title}</span></Link>
    ))}
    <Link to='/' style={{color: 'black', textDecoration: 'none'}}><div className="home-button">Home</div></Link>
  </div>
);

export default SavedList;
