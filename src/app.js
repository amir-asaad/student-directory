import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import StudentDirectory from './components/StudentDirectory';

ReactDOM.render(<StudentDirectory />, document.getElementById('app'));