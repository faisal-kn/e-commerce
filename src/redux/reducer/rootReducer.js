import {combineReducers} from 'redux';
import DataReducer from './DataReducer';

const ReducersList=combineReducers({
    DataStore:DataReducer
})
export default ReducersList;