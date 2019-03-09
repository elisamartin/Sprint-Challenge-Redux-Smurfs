import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/index';
// import { Link } from 'react-router-dom';

const Smurf = ({ smurf, deleteSmurf }) => {
	const deleteButton = () => {
		deleteSmurf(smurf.id);
	};
	return (
		<div className="smurf">
			<div className="img">
				<img src="https://bit.ly/2TxrbGn" alt="Smurfy" />
			</div>
			<div className="smurf-info">
				<h2>{smurf.name}</h2>
				<p>Age: {smurf.age} years-old</p>
				<p>Height: {smurf.height} tall</p>
				<button onClick={deleteButton}>Delete</button>
			</div>
		</div>
	);
};

export default connect(null, { deleteSmurf })(Smurf);
