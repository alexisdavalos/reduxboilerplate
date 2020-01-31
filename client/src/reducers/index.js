import { combineReducers } from 'redux';
import asyncReducer from './asyncReducer'
import syncReducer from './syncReducer'
// You'll also need to import any other necessary custom reducers.

export default combineReducers({
    asyncReducer,
    syncReducer
	// Include any other reducers required by your application.
});	