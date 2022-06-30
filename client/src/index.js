import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk';
import App from './App';
import "./styles/style.css";

const store = createStore(reducers, compose(applyMiddleware(thunk)))
// console.log(store)
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

// ReactDOM.render(<App />, document.getElementById('root'));


