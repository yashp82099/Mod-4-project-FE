import React, { Component } from 'react'
// import Profile from './ProfileInfo'
import ProfileInfo from './ProfileInfo'
import AddressContainer from './AddressContainer'
import AddressForm from './AddressForm'
import { Button } from 'semantic-ui-react'

export default class Profile extends Component {
    state = {
        first_name: '',
        last_name: '',
        username: '',
        addresses: [],
        id: '',
        add: false
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
                add: false
            })
        })
    }

    handleFormDisplay = () => {
        this.setState({
            add: !this.state.add
        })}


    render() {
        return (
            <div>
                <ProfileInfo username={this.state.username}
                first_name={this.state.first_name}
                last_name={this.state.last_name} />
                <Button onClick={this.handleFormDisplay}>Add Address</Button>
                <AddressContainer addresses={this.state.addresses} />
                {this.state.add? <AddressForm fetchUser={this.fetchUser} user_id={this.state.id}/> : null }
            </div>
        )
    }
}
