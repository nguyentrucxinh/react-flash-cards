import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Footer from './Footer/Footer'
import Nav from './Nav/Nav'
import Login from './Login/Login'
import Message from './Message/Message'
import Header from './Header/Header'
import Home from '../Home/Home'
import Form from '../Form/Form'
import List from '../List/List'
import Memorize from '../Memorize/Memorize'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>

            <br />

            <Header />

            <Nav />

            <Message />

            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            {/* <Route path='/logout' component={Logout} /> */}
            <Route path='/list' component={List} />
            <Route path='/memorize' component={Memorize} />
            <Route path='/form' component={Form} />

            <Footer />

          </div>
        </div>
      </div>
    )
  }
}

export default App
