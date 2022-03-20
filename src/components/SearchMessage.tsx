import React from 'react';

function SearchMessage(props: {message: string}) {
  return (
    <div className="search-message">
      <span>{props.message}</span>
    </div>
  );
}

export default SearchMessage;

 