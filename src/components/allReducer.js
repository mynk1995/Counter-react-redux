import {combineReducers} from 'redux';
import count from './reducer';
import maxCount from './secondReducer';
const allReducers=combineReducers({
	maxCount,
	count
});
export default allReducers;