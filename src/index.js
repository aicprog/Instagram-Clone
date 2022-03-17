import React from 'react';
import ReactDOM from 'react-dom';
import { fireBase, FieldValue, auth } from './lib/firebase';
import FirebaseContext from './context/firebase';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import './styles.css';

ReactDOM.render(
	<FirebaseContext.Provider value={{ fireBase, FieldValue, auth }}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</FirebaseContext.Provider>,
	document.getElementById('root')
);
