import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Theme from './Theme/Theme'

ReactDOM.render(
  <BrowserRouter>
    <Theme>
      <App />
    </Theme>
  </BrowserRouter >,
  document.getElementById('root')
);

serviceWorker.unregister();
