import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import IndexPage from './pages/index/index'
import AuthPage from './pages/auth/index'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={IndexPage}></Route>
          <Route path="/auth/" component={AuthPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
