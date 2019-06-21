import createSagaMiddleware from "redux-saga";
import Saga from './Saga';
import SLogIn from './SLogIn';

export const sagasMiddlewareInstance = createSagaMiddleware();
export const run = function () {
	sagasMiddlewareInstance.run(Saga);
	sagasMiddlewareInstance.run(SLogIn);
}