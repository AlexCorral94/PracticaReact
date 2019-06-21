import { put, select, takeLatest } from "redux-saga/effects";
import { LOGIN } from "../Actions/ALogIn";
import ALogInState, {  FETCHING, SUCCESS, ERROR, IDLE } from '../Actions/ALogInState';
import AError from '../Actions/AError';
import axios from 'axios';
import { push } from 'react-router-redux';

function* SLogIn (action) {
    yield put(ALogInState(FETCHING));
    yield put(AError(null));

    try {
        const username = action.payload.username;
        const password = action.payload.password;

        const credentialBase64 = btoa(`${username}:${password}`);

        yield axios.get(`https://localhost:3000/authenticate`,{
            headers: {
                Authorization: `Basic ${credentialBase64}=`
            }
        })

        localStorage.setItem('token', credentialBase64);

        yield put(ALogInState(SUCCESS));
        yield put(push('/home'));

    } catch (error) {
        console.log(error);
        yield put(ALogInState(ERROR));
        yield put(AError(
            error.response.data.error.name
        ));
    }

    yield put(ALogInState(IDLE));

}

export default function* () {
    yield takeLatest(LOGIN, SLogIn);
}