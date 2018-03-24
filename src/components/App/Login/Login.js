import React from 'react'

const Login = () => (
  <div className='container back'>
    <div className='row text-center pad-top'>
      <div className='col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3'>
        <img src='http://placehold.it/250x50' alt='' />
        <br /><br />
      </div>
    </div>

    <div className='row '>
      <div className='col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3'>
        <div className='panel panel-success panel-set'>
          <div className='panel-heading'>
            Enter Details to Login
        </div>
          <div className='panel-body'>
            <label>Enter Your Email</label>
            <input type='text' className='form-control' />
            <label>Enter Password </label>
            <input type='password' className='form-control' />
            <hr />
            <a href='#' className='btn btn-success'>Let Me Login ! </a>
            <hr />
            Please fill all above fields carefully to login . New here ? than move <a href='#'>here</a>
          </div>
        </div>
      </div>
    </div>

  </div>
)

export default Login
