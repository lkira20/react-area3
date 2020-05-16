import React from 'react';
import Sinopsis from './Sinopsis'
import Elenco from './Elenco'

const Descripcion = () => {

	return (
		<div className="card mt-3 bg-light shadow bg-dark">
			<div className="row">
				<div className="col-12 col-md-6">
					<Sinopsis/>
				</div>
				<div className="col col-md-6">
					<Elenco/>
				</div>	
			</div>
		</div>
	);
}

export default Descripcion;