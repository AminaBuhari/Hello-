import React from "react"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from "react-redux";

import Hello from './Hello'
import store from '../redux/configureStore'


class App extends React.Component {
  render () {
    return (
       <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" render={() => <Hello/>} />
      </Routes>
      </BrowserRouter>
      </Provider>
     
    );
  }
}

export default App
