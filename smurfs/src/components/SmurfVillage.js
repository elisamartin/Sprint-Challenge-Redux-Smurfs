import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';
import Smurf from './Smurf';

class SmurfVillage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		return <div>{this.props.smurfs.map((smurf) => <Smurf smurf={smurf} key={smurf.name} />)}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		loading: state.loading
	};
};

export default connect(mapStateToProps, { getSmurfs })(SmurfVillage);
