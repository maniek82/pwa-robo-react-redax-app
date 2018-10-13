
import React from 'react';
import {whyDidYouUpdate} from 'why-did-you-update';


import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import './index.css';
import App from './containers/App';
import 'tachyons';

import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
// const logger = createLogger();
const rootReducer = combineReducers({
    search: searchRobots,
    request: requestRobots
})

if (process.env.NODE_ENV !== 'production') {
  
  whyDidYouUpdate(React);
}



const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();