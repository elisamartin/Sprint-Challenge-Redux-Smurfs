import React, { Component } from 'react';
import SmurfVillage from './SmurfVillage';
import AddSmurfForm from './AddSmurfForm';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
// import UpdateSmurfForm from './UpdateSmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<div className="navbar">
					<NavLink to="/">Home</NavLink>
					<NavLink to="/add">Add Smurfs</NavLink>
				</div>
				<Route exat path="/" component={SmurfVillage} />
				<Route path="/add" component={AddSmurfForm} />
			</div>
		);
	}
}

export default App;
