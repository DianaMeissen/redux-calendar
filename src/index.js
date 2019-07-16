import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/Store';
import App from './mainApp/App';

ReactDOM.render(
    <Provider store={store}>
        {console.log(store.getState())}
        <App todayDate={store.todayDate} />
    </Provider>,
    document.getElementById('root')
);
