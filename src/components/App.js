import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Login from './Login';
import Logout from './Logout';
import Memorize from './Memorize';
import Card from './Card/Card';
import Edit from './Card/Edit';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">

              <br />
              <nav className="navbar navbar-default">
                <div className="navbar-header">
                  <a className="navbar-brand" href="../index.html">CS Flash Cards</a>

                  <ul className="nav navbar-nav navbar-right">

                    <li><Link to="/login">Login</Link></li>

                    <li><Link to="/card">Card</Link></li>
                    <li><Link to="/memorize">Memorize</Link></li>
                    <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                    <li><Link to="/logout">Log out</Link></li>

                    <li><Link to="/edit">Edit</Link></li>

                  </ul>
                </div>
              </nav>


              <div className="alert alert-success" role="alert"> message </div>

              <Route exact path="/login" component={Login} />
              <Route path="/card" component={Card}/>
              <Route path="/memorize" component={Memorize}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/edit" component={Edit}/>

            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
