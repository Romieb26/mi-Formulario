import React, { useState } from 'react';
import Field from '../molecule/Field';
import Button from '../Atoms/Button';
import './Section.css';
import { mysql } from '../../Data/mysql';


function CinemaSection() {
    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [duracion, setDuracion] = useState('');

    const pelicula = {
        titulo,
        genero,
        duracion
    };

    const handleButtonClick = async () => {
        try {
            mysql.data.push(pelicula);
            console.log(pelicula);
            alert('Operación Exitosa');
        } catch (error) {
            console.error('Error guardando la película', error);
            alert('Hubo un error al guardar la película');
        }
    };

    return (
        <div id="cinema_section">
            <Field type="text" placeholder="Ej. Inception" text="Título de la Película" value={titulo} onChange={(event) => setTitulo(event.target.value)} />
            <Field type="text" placeholder="Ej. Acción" text="Género de la Película" value={genero} onChange={(event) => setGenero(event.target.value)} />
            <Field type="text" placeholder="Ej. 120 minutos" text="Duración de la Película" value={duracion} onChange={(event) => setDuracion(event.target.value)} />
            <Button onClick={handleButtonClick} text="Guardar Película" />
        </div>
    );
}

export default CinemaSection;
