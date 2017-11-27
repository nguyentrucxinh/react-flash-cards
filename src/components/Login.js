import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login</h2>
                <div className="alert alert-danger" role="alert">error</div>

                <div className="well">
                    <form action="login" method="post">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-lg btn-primary">Log in</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;