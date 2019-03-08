import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';

class SmurfVillage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		return (
			<div>
				{this.props.smurfs.map((smurf) => {
					return <div key={smurf.name}>{smurf.name}</div>;
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		smurfs: state.smurfs,
		loading: state.loading
	};
};

export default connect(mapStateToProps, { getSmurfs })(SmurfVillage);
