import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/layouts/Navbar'
import UserList from './components/users/UserList'
import Search from './components/users/Search'
import About from './components/pages/About'

import GithubState from './context/github/GithubState'

const App = () => {


  return (
    <GithubState>
      <Router>
        <div className="App">
          <div className="container">
            <NavBar title="Github Finder" />
            <Switch>
              <Route exact path="/" render={() => (
                <Fragment>
                  <Search />
                  <UserList />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
