import React, { useState } from 'react';
import { mysql } from '../../Data/mysql';
import Box from '../molecule/Box';
import Button from '../Atoms/Button';
import './BoxSection.css';

function BoxSection() {
  const [peliculas, setPeliculas] = useState([]);

  const handleShowClick = () => {
    const peliculasComponentes = mysql.data.map((pelicula, index) => (
      <Box key={index} name={pelicula.titulo} genre={pelicula.genero} duration={pelicula.duracion} />
    ));
    setPeliculas(peliculasComponentes);
  };

  return (
    <div className="cinema-section">
      <Button onClick={handleShowClick} text="Ver Películas" className="button-margin" />
      <div className="peliculas-list">
        {peliculas}
      </div>
    </div>
  );
}
export default BoxSection
