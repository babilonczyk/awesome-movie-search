import React from 'react';
import gif from '../assets/images/loader.gif'

function Loader() {
  return (
    <div className="loader"> 
      <div className="loader-center"> 
        <img src={gif} alt="loader" />
      </div>
    </div>
  );
}

export default Loader;

  