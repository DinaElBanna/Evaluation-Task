import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux"

import {reducer} from './reducer'

  ReactDOM.render(
    <React.StrictMode>
 
        <App/>

    </React.StrictMode>,
    document.getElementById('root')
  );

  reportWebVitals();
