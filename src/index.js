import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import allReducers from './components/allReducer';
import logger from 'redux-logger';
import {applyMiddleware} from 'redux';
import App from './App';
import {Provider} from 'react-redux';

const store=createStore(allReducers,applyMiddleware(logger)); 

ReactDOM.render(
	<Provider store={store}>
	<App/>
	</Provider>
	,document.getElementById('root'));
