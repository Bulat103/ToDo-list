import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from './App';
import store from './components/redux/store';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
