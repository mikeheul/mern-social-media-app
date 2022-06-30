import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import thunk from 'redux-thunk';
import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))
console.log(store)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

ReactDOM.render(<App />, document.getElementById('root'));


