import React from 'react'
import { Button, Image, Card,Icon} from 'semantic-ui-react'


export default function InfoList(props) {













    return (
        <div>
            <Card.Group>
            <Card>
                <div className='cardCenter'>
                    <Image width='200' height='200' src={props.place.image_url} circular/>
                </div>
                <Card.Content>
                <Card.Header>{props.place.name}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.place.phone}</span>
                </Card.Meta>
                <Card.Description>
                    {!props.added? <Button onClick={()=> props.handleAddFav(props.place.id, props.place.name)} >Add to favorite</Button> : <Button onClick={() => props.handleRemoveFav(props.place.id, props.place.name)}>Remove from Favorites</Button>}
                    
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    {props.place.price}
                </Card.Content>
            </Card> 
            </Card.Group>           
        </div>
    )
}
