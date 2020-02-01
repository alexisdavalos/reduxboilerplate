// If application requires Asyncronous actions
import axios from 'axios';
export const ACTION_NAME = "ACTION_NAME";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_TOGGLE = "FETCH_TOGGLE";

// This is an async action creator.
export const fetchKanye = () => dispatch => {
	dispatch({ type: FETCH_TOGGLE });
	axios.get('https://api.kanye.rest/')
		.then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data.quote }))
		.catch(err => dispatch({ type: FETCH_TOGGLE, payload: err }))
};

// This is a sync action creator
export const actionName = payload => ({
	type: ACTION_NAME,
	payload: payload
});