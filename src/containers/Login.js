import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom'
const loginAPI = 'http://localhost:3000/api/v1/login'

export default class Login extends Component {

    state = {
        username: '',
        password: '',
        redirect: false,
    }

    loginSubmit = (e) => {
        e.preventDefault()
        console.log(e);
        let loginIn = {username: e.target.username.value,
                        password: e.target.password.value}
        console.log(loginIn);
        
        fetch(loginAPI,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: {username: e.target.username.value, password: e.target.password.value}  })
        }).then(res => res.json())
        .then(data => {
            console.log(data.token);
            
            localStorage.setItem('token', data.token)
            
            console.log(localStorage);
            this.redirect()
        })
        
    }

    handelInput = (e) => {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

    redirect = () => {
        this.setState({redirect: true})
    }

    componentDidMount(){
        localStorage.removeItem('token')
    }







    render() {
        return (
            
            <div className="ui input">
                {this.state.redirect? <Redirect to='/home'/>:null}
                <form onSubmit={this.loginSubmit}>

                    <Input 
                    name='username'
                    onChange={this.handelInput}
                    value={this.state.username} 
                    focus placeholder='username' />

                    <br/>

                    <Input 
                    name='password' 
                    onChange={this.handelInput} 
                    value={this.state.password}
                    placeholder='Password' />


                    <br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
