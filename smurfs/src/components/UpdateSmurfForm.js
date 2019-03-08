import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions/index';

class UpdateSmurfForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			age: '',
			height: '',
			name: ''
		};
	}

	inputHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.props.updateSmurf(this.state);
	};

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<input
					type="text"
					name="name"
					value={this.state.name}
					onChange={this.inputHandler}
					placeholder="Smurf Name"
				/>
				<input
					type="number"
					name="age"
					value={this.state.age}
					onChange={this.inputHandler}
					placeholder="Smurf Age"
				/>
				<input
					type="text"
					name="height"
					value={this.state.height}
					onChange={this.inputHandler}
					placeholder="Smurf Height"
				/>
				<button type="submit">Update Smurf</button>
			</form>
		);
	}
}

export default connect(null, { updateSmurf })(UpdateSmurfForm);
