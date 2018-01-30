import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'mobx-react';

import { AppState } from './mobx';

const store = {
  AppState,
};

ReactDOM.render(
  <Provider {...store}>
    <App /> 
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
