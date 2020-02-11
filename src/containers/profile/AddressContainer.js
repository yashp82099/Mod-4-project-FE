import React from 'react'
import AddressCard from './AddressCard'

export default function AddressContainer(props) {
    return (
        <div>
            {props.addresses.map(address => <AddressCard address={address} />)}
        </div>
    )
}
