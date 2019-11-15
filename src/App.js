import React from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';

class App extends React.Component() {












  render() {
    return (
      <div className="app">
        <Header />
        <Welcome />

        
        <Route path='/resteraunt' render={() => (
          <Resteraunt />
        )} />

        <Route path='/nightclub' render={() => (
          <Nightclub />
        )} />

       

      </div>
    );
  }
}
export default App;
