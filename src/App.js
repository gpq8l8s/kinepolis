import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
// import logo from './logo.png'
import './App.css';
import './index.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainVideo/>
      </div>
    );
  }
}

export default App;
