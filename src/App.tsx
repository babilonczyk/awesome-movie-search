import _ from 'lodash';
import React, { useState } from 'react';
import './assets/css/index.css'
import Header from './components/Header'; 
import Loader from './components/Loader'; 
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import Search from './components/Search';
import SearchMessage from './components/SearchMessage';
 
function App() {

  const [ratedMovies, setRatedMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  const renderMovies: Function = (_movies: any): JSX.Element => { 
    let component: JSX.Element; 

    if(_movies['code'] === 200){
      component = <MovieList movieList={_movies['movies'] } setRatedMovies={setRatedMovies} ratedMoviesList={ratedMovies} />;
    } else if (_movies['code'] === 422) {
      component = <SearchMessage message='Upps something went wrong!'/>;
    } else {
      component = <SearchMessage message='No movies found yet :P'/>;
    } 
    return component;
  }

  const renderRatedMovies: Function = (_movies: Object[]) => {
    if(!_.isEmpty(_movies) ){
      return (
        <div className="movie-list">
          <div className="movie-list-center">
            {_movies.map(function(object: any, index: number){
              return <Movie details={object} setRatedMovies={setRatedMovies} ratedMoviesList={ratedMovies} key={index} />;
            })}
          </div>
        </div>
      )
    } else {
      return  <></>
    }
  }

  return ( 
    <div className="App"> 
      <Header />
      <Search setSearchValue={setSearchText} setSearchMovies={setSearchMovies} /> 
 
      <h2>Result:</h2>
      { renderMovies(searchMovies, false) }

      <h2>Recently Rated:</h2>
      { renderRatedMovies(ratedMovies) }
     
    </div>
  );
}

export default App;
 