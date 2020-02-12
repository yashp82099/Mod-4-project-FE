import React from 'react'
import AddressCard from './AddressCard'


export default function AddressContainer(props) {
    return (
        <div>
            { props.addresses? props.addresses.map((address, i) => <AddressCard key={i} selected={props.selected} handleLocationChange={props.handleLocationChange} location={address.zip} address={address}/>):null}
        </div>
    )
}
