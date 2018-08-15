import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './request';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux'
import configureStore from './configureStore'
const store = configureStore()

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
