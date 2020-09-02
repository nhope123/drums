import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as drums from './drums.js';

ReactDOM.render(
  <drums.Drums/>,
  document.getElementById('drum-machine')
);
