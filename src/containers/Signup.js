import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'
const signInAPI = 'http://localhost:3000/api/v1/signup'

export default class Signup extends Component {

    state={
        username: '',
        password: '',
        password2: '',
        first_name: '',
        last_name: '',
        zip: '',
    }

    handelInput = (e) => {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    
    SignInSubmit = (e) => {
        e.preventDefault()
        let user = {username: this.state.username,
                    password: this.state.password,
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    zip: this.state.zip}
        fetch(signInAPI,{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({user})
        })
        .then(res => res.json())
        .then(console.log)

    }




    render() {
        return (
            <div>
                <form onSubmit={this.SignInSubmit}>
                    <Input onChange={this.handelInput} value={this.state.first_name} name='first_name' focus placeholder='First Name' /><br/>
                    <Input onChange={this.handelInput} value={this.state.last_name} name='last_name' placeholder='Last Name' /><br/>
                    <Input onChange={this.handelInput} value={this.state.username} name='username' placeholder='Username' /><br/>
                    <Input onChange={this.handelInput} value={this.state.password} name='password' placeholder='Password' /><br/>
                    <Input onChange={this.handelInput} value={this.state.password2} name='password2' placeholder='Password Again' /><br/>
                    <Input onChange={this.handelInput} value={this.state.zip} name='zip' placeholder='Zip Code' /><br/>
                    <input type='submit' />

                </form>
            </div>
        )
    }
}
