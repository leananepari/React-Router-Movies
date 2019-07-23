import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = (movie, id) => {
    let movieItem = [movie, id]
    setSavedList( [...savedList, movieItem] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path='/' exact component={MovieList}/>
      <Route path='/movies/:id' component={(props) => <Movie {...props} addToSavedList={addToSavedList}/> }/>
    </div>
  );
};

export default App;
