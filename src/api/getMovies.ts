/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY

export default ( _inputValue: string ) => {
    return axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${_inputValue}`)
} 