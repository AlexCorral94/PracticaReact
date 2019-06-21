// Copia
export const SET_LOGIN_STATE = '@@react/SET_LOGIN_STATE';
export const IDLE = 0;
export const FETCHING = 1;
export const SUCCESS = 2;
export const ERROR = 3;

export default (state) => ({
    payload: {state},
    type: SET_LOGIN_STATE
})