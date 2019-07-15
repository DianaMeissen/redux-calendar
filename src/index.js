import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/Store';
import App from './mainApp/App';

ReactDOM.render(
    <Provider store={store}>
        <App todayDate={store.todayDate} />
    </Provider>,
    document.getElementById('root')
);
