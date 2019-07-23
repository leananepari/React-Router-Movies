import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map((movie, index) => (
      <NavLink to={`/movies/${movie[1]}`} key={index} style={{fontWeight: "bold",
      color: "gray"}}   activeStyle={{color: 'black', textDecoration: 'none'}}><span className="saved-movie">{movie[0].title}</span></NavLink>
    ))}
    <Link to='/' style={{color: 'black', textDecoration: 'none'}}><div className="home-button">Home</div></Link>
  </div>
);

export default SavedList;
