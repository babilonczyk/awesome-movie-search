import React, { useState } from 'react';
import './assets/css/index.css'
import Header from './components/Header'; 
import Loader from './components/Loader'; 
import MovieList from './components/MovieList';
import Search from './components/Search';
import SearchMessage from './components/SearchMessage';
 
function App() {

  const [ratedMovies, setRatedMovies] = useState([{}]);

  return ( 
    <div className="App"> 
      <Header />
      <Search /> 

      <h2>Result:</h2>
      
      <MovieList movieList={ratedMovies} rated={false} /> 
      <SearchMessage message='No movie found under this title :('/>
      <Loader/>

      <hr />
      <h2>Recently Rated:</h2>
      <MovieList movieList={ratedMovies} rated={true} /> 
    </div>
  );
}

export default App;
 