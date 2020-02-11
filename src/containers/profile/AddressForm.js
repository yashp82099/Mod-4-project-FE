import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export class AddressForm extends Component {

    state = {
        address_1: '',
        address_2: '',
        name: '',
        city: '',
        state: '',
        zip: '',
        user_id: this.props.user_id
    }
    
    handleFormInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/api/v1/address',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({address: {...this.state}})
        }).then(res => res.json())
        .then(data => {
            this.props.fetchUser()
        })
    }
   





    render() {
        return (
            <div onSubmit={this.handleFormSubmit}>
                <form >
                <Input require name='name' onChange={this.handleFormInput} value={this.state.name} placeholder='Name' /><br/>
                <Input require name='address_1' onChange={this.handleFormInput} value={this.state.address_1} placeholder='Address 1' /><br/>
                <Input require name='address_2' onChange={this.handleFormInput} value={this.state.address_2} placeholder='Address 2' /><br/>
                <Input require name='city' onChange={this.handleFormInput} value={this.state.city} placeholder='City' /><br/>
                <Input require name='state' onChange={this.handleFormInput} value={this.state.state} placeholder='State' /><br/>
                <Input name='zip' onChange={this.handleFormInput} value={this.state.zip} require placeholder='Zip Code' /><br/>
                <input type='submit' />

                </form>
            </div>
        )
    }
}

export default AddressForm


