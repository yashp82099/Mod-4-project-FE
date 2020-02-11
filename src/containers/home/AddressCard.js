import React from 'react'
import { Card } from 'semantic-ui-react'
export default function AddressCard(props) {
    return (
        <div onClick={() => props.handleLocationChange(props.address.zip,props.address.name)}>
        <div className={props.address.name === props.selected? 'select' : null} >
            <Card>
                <Card.Content>
                    <Card.Header>{props.address.name}</Card.Header>
                    {/* <Card.Meta>Co-Worker</Card.Meta> */}
                    <Card.Description>
                    {props.address.address_1}
                    </Card.Description>
                    <Card.Description>
                    {props.address.address_2}
                    </Card.Description>
                    <Card.Description>
                    {props.address.city} {props.address.state} {props.address.zip}
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    </div>
    )
}
