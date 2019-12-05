import React, { Component } from 'react';
import { Route, Router } from 'react-router'
import PropTypes from 'prop-types'
import Home from './views/Home'
import UserDetail from './components/UserDetail'

class App extends Component {
  render() {
    return (
      <Router history= { this.props.history }>
        <div className="App">
          <Route exact path="/" component= { Home }/>
          <Route path="/detail/:usrId" component= { UserDetail }/>
        </div>
      </Router>
    );
  }
}

App.protoTypes = {
  history: PropTypes.any.isRequired
}

export default App;
