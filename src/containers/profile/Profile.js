import React, { Component } from 'react'
// import Profile from './ProfileInfo'
import ProfileInfo from './ProfileInfo'
import AddressContainer from './AddressContainer'
import AddressForm from './AddressForm'
import { Button } from 'semantic-ui-react'
import NavBar from '../NavBar'

export default class Profile extends Component {
    state = {
        first_name: '',
        last_name: '',
        username: '',
        addresses: [],
        id: '',
        add: false,
        edit: {},
    }

    componentDidMount(){
      this.fetchUser()
    }

    fetchUser = () => {
        fetch('http://localhost:3000/api/v1/users/show',{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.getItem('token')
            }
        }).then(res => res.json())
        .then(data => {
            this.setState({
                first_name: data.first_name,
                last_name: data.last_name,
                username: data.username,
                addresses: data.addresses,
                id: data.id,
                add: false,
                edit: {}
            })
        })
    }

    handleDeleteAddress = (address_id) => {
        fetch(`http://localhost:3000/api/v1/address/${address_id}`,{
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            let newAddresses = [...this.state.addresses.filter(address => address.id !== data.id  )]
            this.setState({addresses: newAddresses})
        })
    }


    handleFormDisplay = () => {
        this.setState({
            add: !this.state.add
        })}



    handleEdit = (e) => {
        console.log(e);
        if(this.state.edit.id){
            this.setState({edit: {}})
        }else{
            this.setState({edit: e})
        }
       
    }


    render() {
        return (
            <div>
                <NavBar/>
                <ProfileInfo username={this.state.username}
                first_name={this.state.first_name}
                last_name={this.state.last_name} />
                <div className='aCard'>
                    <Button onClick={this.handleFormDisplay}>Add Address</Button>
                    {this.state.add? <AddressForm fetchUser={this.fetchUser} user_id={this.state.id}/> : null }
                    {this.state.edit.id? <AddressForm action='edit' fetchUser={this.fetchUser} address={this.state.edit}/> : null }
                    <AddressContainer handleEdit={this.handleEdit} handleDeleteAddress={this.handleDeleteAddress}  addresses={this.state.addresses} />
                </div>
                
            </div>
        )
    }
}
