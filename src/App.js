import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

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

                  {/* {<li><Link to="/login">Login</Link></li>}

                  <li><Link to="/cards">Cards</Link></li>
                  <li><Link to="/general">General</Link></li>
                  <li><Link to="/code">Code</Link></li>
                  <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
                  {<li><Link to="/logout">Log out</Link></li>} */}
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/topics">Topics</Link></li>

                </ul>
              </div>
            </nav>


            <div className="alert alert-success" role="alert"> message </div>

            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
            {/* <Route exact path="/login" component={Login}/>
            <Route path="/cards" component={Cards}/>
            <Route path="/general" component={General}/>
            <Route path="/code" component={Code}/>
            <Route path="/logout" component={Logout}/> */}

          </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
