import * as React from 'react';

import { Provider } from 'mobx-react';
import AppState from './mobx';
import Home from './components/home';

const store = {
  AppState,
};

export default class App extends React.Component<any, any> {

  render() {
    return (
      <Provider {...store}>
        <Home />
      </Provider>
    );
  }
}
