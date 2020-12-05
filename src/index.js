import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { StateProvider } from './StateProvider';
import {initialState} from '../src/reducer'
import addReducer from '../src/reducer';

ReactDOM.render(
    <Router>
      <StateProvider initialState={initialState} reducer={addReducer}>
    <App />
    </StateProvider>
    </Router>
  ,
document.getElementById('root')
);

