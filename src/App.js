import React, { Component } from 'react';
import './App.css';
import Timer from './Components/Timer';

class App extends Component {
  render() {
    const currentDate = new Date()
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

    return (
      <div className="mainContainer">
        <Timer 
          date={`${year}-04-30T00:00:00`} 
          width="90vw"
          titleElement={<h1>Deutsch LK</h1>}
        />
        <Timer 
          date={`${year}-05-03T00:00:00`} 
          width="50vw"
          height={40} 
          style={{marginTop: 50}}
          titleElement={<h3>Mathe LK</h3>}
        />
        <Timer 
          date={`${year}-05-06T00:00:00`} 
          height={40} 
          width="50vw"
          style={{marginTop: 20}}
          titleElement={<h3>Geschichte</h3>}
        />
        <Timer 
          date={`${year}-05-08T00:00:00`} 
          height={40} 
          width="50vw"
          style={{marginTop: 20}}
          titleElement={<h3>Englisch LK</h3>}
        />
        <Timer 
          date={`${year}-05-09T00:00:00`} 
          height={40} 
          width="50vw"
          style={{marginTop: 20}}
          titleElement={<h3>Kunst LK</h3>}
        />
        <Timer 
          date={`${year}-05-10T00:00:00`} 
          height={40} 
          width="50vw"
          style={{marginTop: 20}}
          titleElement={<h3>Französisch LK</h3>}
        />
        <Timer 
          date={`${year}-05-15T00:00:00`} 
          height={40} 
          width="50vw"
          style={{marginTop: 20}}
          titleElement={<h3>Geografie</h3>}
        />
      </div>
    );
  }
}

export default App;
