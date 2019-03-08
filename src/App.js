import React, { Component } from 'react';
import './App.css';
import Timer from './Components/Timer';

class App extends Component {
  render() {
const currentDate = new Date()
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    return (
      <div className="mainContainer">
        <h1>Zeit bis zum Abi:</h1>
        <Timer date={`${year}-05-03T00:00:00`} />
      </div>
    );
  }
}

export default App;
