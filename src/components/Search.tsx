import React from 'react';
import getMovies from '../api/getMovies'

function Search(props: { setSearchValue: Function, setSearchMovies: Function }) {

  const requestMovies = async (title: string) => {
    getMovies(title)
    .then( result => {
      props.setSearchMovies({code: 200, movies: result["data"]["results"]})
      console.log(result)

    }).catch( (error: Error) => {
      console.log(error)
      props.setSearchMovies({code: 422, movies: []})
    });
  }
 
  return (
    <div className="search">
        <input
            type="text"
            placeholder="What are we watching today?"
            onChange={ event => { requestMovies(event.target.value) }}
        />
    </div>
  );
}

export default Search;
