import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import CardReaction from './components/CardReaction/CardReaction.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <CardReaction />
      </div>
    );
  }
}

export default App;
