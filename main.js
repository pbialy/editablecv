import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

import data from '~/mocks/data.js'

ReactDOM.render(<App data={data} />, document.getElementById('app'));
