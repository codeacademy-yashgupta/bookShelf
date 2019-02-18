import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import BookShelf from './components/BookShelf/BookShelf.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <BookShelf />
      </div>
    );
  }
}

export default App;
