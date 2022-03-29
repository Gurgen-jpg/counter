import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppWithRedux} from "./AppWithRedux";
import {Provider} from 'react-redux';
import {store} from './Counter/redux/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppWithRedux/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

