import React from 'react';
import { Provider } from 'react-redux';

import './App.css';

import createStore from '../modules/index';
import createHistory from 'history/createHashHistory';
import { Switch } from 'react-router-dom';
import { Router, Route } from 'react-router';

import logo from '../logo.svg';

import ReduxActions from '../ReduxActions';

function App() {
    const history = createHistory();
    const store = createStore(history);

    return (
        <div className="App">
            <Provider store={store}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-Redux">
                        <Router history={history}>
                            <Switch>
                                <Route exact path="/" component={ReduxActions} />
                            </Switch>
                        </Router>
                    </div>
                </header>
            </Provider>
        </div>
    );
}

export default App;
