import React from 'react';
import ReactDOM from 'react-dom';

import Posts from './containers/Posts/Posts';

import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
	<React.StrictMode>
		
			<Posts />
		
	</React.StrictMode>,
	document.getElementById('root')
);