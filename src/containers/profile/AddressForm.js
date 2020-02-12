import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'

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

    handleFormSubmit = (e) => {
        e.preventDefault()
        if(this.props.action === 'edit'){
            this.editAddress(e)
        }else{
            this.fetchNewAddress(e)
        }
    }


    componentDidMount(){
        console.log(this.props.address);
        
        if(this.props.action === 'edit'){
            this.setState({
                address_1: this.props.address.address_1,
                address_2: this.props.address.address_2,
                name: this.props.address.name,
                city: this.props.address.city,
                state: this.props.address.state,
                zip: this.props.address.zip,
                user_id: this.props.address.user_id
            })
        }
    }


    fetchNewAddress = (e) => {
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

    editAddress = (e) => {
        e.preventDefault()
                fetch(`http://localhost:3000/api/v1/address/${this.props.address.id}`,{
                    method: 'PATCH',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({address: {...this.state}})
                }).then(res => res.json())
                .then(data => {
                    this.props.fetchUser()
                })
    }




    
    handleFormInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    



   





    render() {
        return (
            <div >
                <div className='form' >
                    <form onSubmit={this.handleFormSubmit} >
                <Input size='large' required name='name' onChange={this.handleFormInput} value={this.state.name} placeholder='Name' /><br/>
                <Input size='large' required name='address_1' onChange={this.handleFormInput} value={this.state.address_1} placeholder='Address 1' /><br/>
                <Input size='large' required name='address_2' onChange={this.handleFormInput} value={this.state.address_2} placeholder='Address 2' /><br/>
                <Input size='large' required name='city' onChange={this.handleFormInput} value={this.state.city} placeholder='City' /><br/>
                <Input size='large' required name='state' onChange={this.handleFormInput} value={this.state.state} placeholder='State' /><br/>
                <Input size='large' name='zip' onChange={this.handleFormInput} value={this.state.zip} require placeholder='Zip Code' /><br/>
                <Button type='submit' >Submit</Button>

                </form>
                </div>
                
            </div>
        )
    }
}

export default AddressForm


