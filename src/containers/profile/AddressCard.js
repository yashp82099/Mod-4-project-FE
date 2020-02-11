import React from 'react'
import { Button, Card, Icon} from 'semantic-ui-react'

export default function AddressCard(props) {
    return (
        <div>
            <Card>
            <Card.Content>
                <Icon name='location arrow' />
                <Card.Header>{props.address.name}</Card.Header>
                {/* <Card.Meta>Friends of Elliot</Card.Meta> */}
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
            <Card.Content extra>
                <div className='ui one buttons'>
                <Button basic color='red'>
                    Delete
                </Button>
                </div>
            </Card.Content>
            </Card>
        </div>
    )
}
