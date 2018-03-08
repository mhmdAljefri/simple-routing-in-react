// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
// Router is the core of every react router component
<BrowserRouter>
  <App />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
