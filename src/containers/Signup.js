import React, { Component } from 'react'
import { Input, Form, Button, Grid  } from 'semantic-ui-react'
import {Redirect, Link} from 'react-router-dom'
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
        .then(data => {
            console.log(data);
            this.setState({redirect: true})
            
        })

    }




    render() {
        return (
            <div className='loginDiv'>
            <div>
                <div className='ui input'>
                    <Form onSubmit={this.SignInSubmit}>
                    <Form.Field>
                        <Input required onChange={this.handelInput} value={this.state.first_name} name='first_name' focus placeholder='First Name' /><br/>
                    </Form.Field>
                    <Form.Field>
                        <Input required onChange={this.handelInput} value={this.state.last_name} name='last_name' placeholder='Last Name' /><br/>
                    </Form.Field>
                    <Form.Field>
                        <Input required onChange={this.handelInput} value={this.state.username} name='username' placeholder='Username' /><br/>
                    </Form.Field>
                    <Form.Field>
                        <Input required onChange={this.handelInput} value={this.state.password} name='password' placeholder='Password' /><br/>
                    </Form.Field>
                    <Form.Field>
                        <Input required onChange={this.handelInput} value={this.state.password2} name='password2' placeholder='Password Again' /><br/>
                    </Form.Field>
                    <Form.Field>
                        <Input required onChange={this.handelInput} value={this.state.zip} name='zip' placeholder='Zip Code' /><br/>
                    </Form.Field>
                    <Button type='submit'>Submit</Button>
                    <Link to='/'><Button type='submit'>Back</Button></Link>
                </Form>
                </div>
                {this.state.redirect? <Redirect to='/home'/> : null}
                
            </div>
        </div>
        )
    }
}
