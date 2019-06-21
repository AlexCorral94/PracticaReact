import {LOGIN} from '../Actions/ALogIn';
import {ERROR} from '../Actions/AError';
import {SET_LOGIN_STATE, IDLE} from '../Actions/ALogInState';

/*
*
*/
const actions = {
    [ERROR]: (state, action) => ({ ...state, ...action.payload }),
    [SET_LOGIN_STATE]: (state, action) => ({ ...state, ...action.payload })
};

/*
*
*/
const initialState = {
    state: IDLE,
    error: null
};

/*
*
*/
export default (state = initialState, action) => {
    if (actions[action.type]) {
        return actions[action.type](state, action);
    }
    
    return state;
};