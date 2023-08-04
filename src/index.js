import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

document.body.style.backgroundImage = 'linear-gradient(to right, white, gray)';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.height = '100%';
document.documentElement.style.backgroundImage = 'linear-gradient(to right, white, gray)';
document.documentElement.style.margin = '0';
document.documentElement.style.padding = '0';
document.documentElement.style.height = '100%';
