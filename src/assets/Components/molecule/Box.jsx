import React from 'react';


function Box({ name, genre, duration }) {
  return (
    <div className="box">
      <h3>{name}</h3>
      <p>Género: {genre}</p>
      <p>Duración: {duration}</p>
    </div>
  );
}

export default Box;
