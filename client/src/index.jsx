import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from './App';
import store from './components/redux/store';

axios.defaults.baseURL = 'http://localhost:3001';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
