
import Movie from './Movie';


function MovieList(props: {movieList: Object[], rated: Boolean}) {

    return ( 
        <div className="movie-list">
            <div className="movie-list-center">
                {props.movieList.map(function(object, index){
                    return <Movie details={object} />;
                })}
            </div>
        </div> 
  );
}

export default MovieList;
