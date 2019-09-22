import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom' //don't need to specify localhost url in axios http address

import { Provider } from 'react-redux'
import store from './store'

//style
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';




ReactDOM.render(
		
		<BrowserRouter>
        <Provider store={store}>
			<App />
            </Provider>
			</BrowserRouter>,
		
	document.getElementById('root')
)