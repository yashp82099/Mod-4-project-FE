import React from 'react'
import AddressCard from './AddressCard'
import { Card } from 'semantic-ui-react'

export default function AddressContainer(props) {
    return (
        <div className='cardDiv'>
            <Card.Group>
            {props.addresses? props.addresses.map(address => <AddressCard handleEdit={props.handleEdit} handleDeleteAddress={props.handleDeleteAddress} address={address} />):<h1>ADD ADDRESSES</h1>}
            </Card.Group>
        </div>
    )
}
