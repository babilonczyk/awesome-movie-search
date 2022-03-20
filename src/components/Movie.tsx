import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import thumbnail from '../assets/images/thumbnail.jpg';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import MovieModal from './MovieModal';

function Movie(props: {details: Object}) {
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <div className='movie-item-wrapper'>
            <div className="movie-item" onClick={() => setIsOpen(true)}>
                <img src={thumbnail} alt="thumnail" className='movie-item-img'/>
                <span className='movie-item-year'>Prod:  20-12-2002</span>
                <h4 className='movie-item-title'>Title</h4>
                <div className="more-information">
                    <div className="genre">ICON</div>
                    <div className="rating"><div></div><span>3,223</span><FontAwesomeIcon icon={faStar} /></div>
                </div>
            </div>
            {isOpen && <MovieModal setIsOpen={setIsOpen} />}
        </div>
    );
      
}

export default Movie;
