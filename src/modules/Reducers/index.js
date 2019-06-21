import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux';

// Reducers
import LogInReducer from './LogInReducer';

export default combineReducers({
    LogInReducer,
    router: routerReducer
});
