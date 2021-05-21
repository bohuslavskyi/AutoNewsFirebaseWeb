import React from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';

import Root from './js/Root';

import './css/styles.scss';
import 'antd/dist/antd.css';

const App = () => (
	<Root />
);

ReactDOM.render(<App />, document.getElementById('root'));
