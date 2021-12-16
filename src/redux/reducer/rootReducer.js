import {combineReducers} from 'redux';
import DataReducer from './DataReducer';

const ReducersList=combineReducers({
    DataAll:DataReducer
})
export default ReducersList;