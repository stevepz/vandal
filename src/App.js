import React from 'react';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Restaurant from './components/Restaurant';
import Nightclub from './components/Nightclub';


class App extends React.Component {












  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Welcome />
        )} />


        <Route path='/restaurant' render={() => (
          <Restaurant />
        )} />

        <Route path='/nightclub' render={() => (
          <Nightclub />
        )} />



      </div>
    );
  }
}
export default App;
