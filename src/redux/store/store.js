import {createStore} from "redux";
import ReducersList from "../reducer/rootReducer";

const store=createStore(ReducersList);

export default store;