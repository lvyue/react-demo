import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import IndexPage from './pages/index/index';
import AuthPage from './pages/auth/index';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/auth" component={AuthPage} />
            </Switch>
        );
    }
}

export default App;
