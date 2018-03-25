import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <nav className='navbar navbar-default'>
    <div className='navbar-header'>
      <a className='navbar-brand' href='../index.html'>CS Flash Cards</a>

      <ul className='nav navbar-nav navbar-right'>

        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/memorize'>Memorize</Link></li>
        <li><Link to='/list'>List</Link></li>
        <li><Link to='/form/create'>Add</Link></li>
        <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
        <li><Link to='/signup'>Sign up</Link></li>
        <li><Link to='/logout'>Log out</Link></li>

      </ul>
    </div>
  </nav>
)

export default Nav
