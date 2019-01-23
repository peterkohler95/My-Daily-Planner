import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/dashboard/Dashboard'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
