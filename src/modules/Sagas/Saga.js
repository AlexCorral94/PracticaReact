import { put, select, takeLatest } from "redux-saga/effects";
import { ACTION } from "../Actions/Action";

function* Saga (action) {

}

export default function* () {
    yield takeLatest(ACTION, Saga);
}