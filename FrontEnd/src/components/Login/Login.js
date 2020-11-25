import React, { Component } from 'react'
import Head from '../header/head'
import './login.css'

export class Login extends Component {
    render() {
        return (
            <div id="overall">
                <div class="container-fluid">

                
                <center><div id="login">
                    
                        <form>
                                <div class="form-group">
                                    <h1 id="text">LOGIN</h1>
                                    <br></br>
                                    
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                                </div>
                                
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                </div></center>
                </div>
                
            </div>
        )
    }
}

export default Login
