import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Feeds from './screens/feeds/feeds';


class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <Feeds />
      </Provider>
    );
  }
}


// const Root = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// )

export default Root;
