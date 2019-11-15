import React from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Resteraunt from './components/Resteraunt';
import Nightclub from './components/Nightclub';


class App extends React.Component {












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
