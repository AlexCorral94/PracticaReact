import { applyMiddleware, createStore } from "redux";
import CombinedReducers from "./Reducers";
import { sagasMiddlewareInstance, run } from './Sagas/index'
import { routerMiddleware } from 'react-router-redux'

export default (history) => {
  
    const store = createStore(
        CombinedReducers,
        applyMiddleware(
            sagasMiddlewareInstance,
            routerMiddleware(history)
        ),
    );

    run();

    return store;
}
