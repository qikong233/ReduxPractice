import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './app/store/store'
import Router from './app/router/router'

export default class App extends Component {
 render() {
   return (
      <Provider store={store}>
        <Router />
      </Provider>
   )}
}