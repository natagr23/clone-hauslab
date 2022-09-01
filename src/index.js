import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
// import { HashRouter as Router } from 'react-router-dom';

import 'core-js/es/array';
import 'core-js/es/string';
import 'core-js/es/object';
// import 'core-js/modules/es7.array.includes';
// import 'core-js/modules/es6.array.fill';
// import 'core-js/modules/es6.string.includes';
// import 'core-js/modules/es6.string.trim';
// import 'core-js/modules/es7.object.values';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
