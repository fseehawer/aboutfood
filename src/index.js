import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import categoryReducer from './reducers';
import './index.scss';
import App from './app';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';

// Persist state to localStorage
let initState = {
    categories: []
};
const persistedState = localStorage.getItem('reduxState');

if (persistedState) {
    initState = JSON.parse(persistedState)
}

// Create store
const store = createStore(categoryReducer, initState, composeWithDevTools());

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
