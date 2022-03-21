
import Movie from './Movie';

function checkRating(item: any, ratedMoviesList: any): number {
    let rating = item['vote_average'];

    ratedMoviesList.forEach((element:any) => {
        if( element['movieId'] === item['id']){
            rating = element['rating'];
        } 
    });

    return rating;
}

function MovieList(props: {movieList: Object[], setRatedMovies: Function, ratedMoviesList: Object[] }) {

    return ( 
        <div className="movie-list">
            <div className="movie-list-center">
                {props.movieList.map(function(object, index){
                    let item = JSON.parse(JSON.stringify(object));
                    return <Movie details={
                        {
                            movieId: item['id'],
                            title: item['title'], 
                            date: item['release_date'] ,
                            description: item['overview'],
                            genreId: item['genre_ids'][0],
                            img: `https://image.tmdb.org/t/p/w500${item['poster_path']}`,
                            rating: checkRating(item, props.ratedMoviesList),
                            vote_count: item['vote_count']
                        }
                    } setRatedMovies={props.setRatedMovies} ratedMoviesList={props.ratedMoviesList} key={index} />;
                })}
            </div>
        </div> 
  );
}

export default MovieList;
