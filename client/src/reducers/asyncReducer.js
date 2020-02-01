// Create a new reducer and import actions from appropriate action file; in this case it's index.js
import { FETCH_TOGGLE, FETCH_SUCCESS } from '../actions';

const initialState = {
  kanyeism: 'I love Redux like Kanye loves Kanye',
  error: '',
  isFetching: false
}

export const asyncReducer = (state = initialState, action) => {
	switch(action.type){
		case FETCH_TOGGLE:
			return {
				...state,
				isFetching: !state.isFetching,
				error: action.payload ? action.payload : ''
			}
		case FETCH_SUCCESS:
			return {
				...state,
				kanyeism: action.payload,
				isFetching: false,
                error: ''
            }
		default:
				return state;
	}
}
	