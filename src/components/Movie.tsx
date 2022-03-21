import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import thumbnail from '../assets/images/thumbnail.jpg';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import MovieModal from './MovieModal';

function Movie(props: {details: any, setRatedMovies: Function, ratedMoviesList: Object[]}) {
    const [isOpen, setIsOpen] = useState(false);   

    return ( 
        <div className='movie-item-wrapper'>
            <div className="movie-item" onClick={() => setIsOpen(true)}>
                <img src={props.details['img']} alt="thumnail" className='movie-item-img'/>
                <span className='movie-item-year'>Prod: {props.details['date']} </span>
                <h4 className='movie-item-title'>{props.details['title']}</h4>
                <div className="more-information">
                    <div className="genre">{props.details['genreId']}</div>
                    <div className="rating"><div></div><span>{props.details['rating']}</span><FontAwesomeIcon icon={faStar} /></div>
                </div>
            </div>
            
            {isOpen && <MovieModal setIsOpen={setIsOpen} details={props.details} setRatedMovies={props.setRatedMovies} ratedMoviesList={props.ratedMoviesList}/>}
        </div>
    );
      
}

export default Movie;
