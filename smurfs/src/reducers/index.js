/*
  Be sure to import in all of the action types from `../actions`
*/

import { LOADING, GET_SMURFS, ERROR, ADD_SMURF, DELETE_SMURF, UPDATE_SMURF } from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/

const initState = {
	smurfs: [],
	loading: false,
	fetchingSmurfs: false,
	addingSmurf: false,
	updatingSmurf: false,
	deletingSmurf: false,
	error: null
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const smurfReducer = (state = initState, action) => {
	switch (action.type) {
		case LOADING:
			return { ...state, loading: true };
		case GET_SMURFS:
			return { ...state, smurfs: action.payload, loading: false };
		case ERROR:
			return { ...state, error: action.payload, loading: false };
		case ADD_SMURF:
			return { ...state, smurfs: action.payload, addingSmurf: true, loading: false };
		case DELETE_SMURF:
			return { ...state, smurfs: action.payload, deletingSmurf: true, loading: false };
		case UPDATE_SMURF:
			return { ...state, smurfs: action.payload, updatingSmurf: true, loading: false };
		default:
			return state;
	}
};

export default smurfReducer;
