import React from 'react';

const Pelicula = (props) => {

	const titulo = props.titulo;

	console.log(titulo);

	return (
		<div className="card text-center mt-5 bg-dark text-light shadow"><h1>{titulo}</h1></div>
	);
}

export default Pelicula;