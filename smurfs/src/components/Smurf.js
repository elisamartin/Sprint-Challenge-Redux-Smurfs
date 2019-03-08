import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/index';

const Smurf = ({ smurf, deleteSmurf }) => {
	const deleteButton = () => {
		deleteSmurf(smurf.id);
	};
	return (
		<div>
			<button onClick={deleteButton}>X</button>
			<h2>{smurf.name}</h2>
			<p>Age:{smurf.age}</p>
			<p>Height:{smurf.height}</p>
		</div>
	);
};

export default connect(null, { deleteSmurf })(Smurf);
