import { useEffect, useState } from "react";
import thumbnail from '../assets/images/thumbnail.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import _ from 'lodash';
import average from "../utils/average";
import getCast from '../api/getCast'

function MovieModal(props: { setIsOpen: Function , details: any, setRatedMovies: Function, ratedMoviesList: Object[]}) {

  const [cast, setCast] = useState([]);    
  const [rating, setRating] = useState(1);    

  const requestCast = async (id: number) => {
    getCast(id)
    .then( result => {
      setCast(result["data"]["cast"])
    }).catch( (error: Error) => {
      console.log(error)
    });
  }

  let rateMovie = () => {
    let currentMovie: any = props.details;;
    let ratedMovies = [];
    let onTheList: boolean = false;

    let newRating: number = average( [rating, (currentMovie['rating'] * currentMovie['vote_count'])], currentMovie['vote_count'] + 1);
    currentMovie['vote_count'] = currentMovie['vote_count'] + 1;

    if(!_.isEmpty(props.ratedMoviesList[0])){
      props.ratedMoviesList.forEach((element:any) => {
        if( element['movieId'] === props.details['movieId']){
          currentMovie['rating'] = newRating;
          ratedMovies.push(currentMovie);
          onTheList = true;
        } else {
          ratedMovies.push(element);
        }
      });

      if( onTheList === false) { 
        currentMovie['rating'] = newRating;
        ratedMovies.push(currentMovie);
      }
    } else {
      currentMovie['rating'] = newRating;
      ratedMovies.push(currentMovie);
    }

    props.setRatedMovies(ratedMovies);
    props.setIsOpen(false)
  }

  useEffect(() => {
    requestCast(props.details['movieId'])
  });

  return (
    <div className="modal">
      <div className="modal-outer-layer" onClick={() => props.setIsOpen(false)}></div>
      
      <div className="modal-content">

        <div className="modal-content-top">
          <img className="modal-content-img" src={props.details['img']} alt="thumbnail" />
          <Tabs>
            <TabList>
              <Tab><h5>Description</h5></Tab>
              <Tab><h5>Cast</h5></Tab>
            </TabList>
            <TabPanel>
              <div className="modal-content-description">
                <p>
                  {props.details['description']}
                </p>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="modal-content-actors">
                <ul>
                  {cast.map(function(object, index){
                      let item = JSON.parse(JSON.stringify(object));
                      return <li key={index}>{item.name}</li>
                  })}
                </ul>              
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="modal-content-bottom">
             
        </div>
        <div className="select-stars">
          <span>I give this movie</span>
          <select name="cars" id="cars" defaultValue={rating} onChange={ event => { setRating( +event.target.value ) }}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select> 
          <span>stars.</span>
          <button onClick={rateMovie}>SUBMIT</button>
        </div>
        <button onClick={() => props.setIsOpen(false)}>EXIT</button>
      </div>
    </div>
  );
};

export default MovieModal;   