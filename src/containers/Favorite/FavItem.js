import React from 'react'
import { Card, Icon, Image ,Button, Header, Modal } from 'semantic-ui-react'


export default function FavItem(props) {



    return (
        <Modal trigger={
        <Card>
            {console.log(props.fav)}
            <img src={props.fav.photos[0]} />
            <img src={props.fav.photos[1]} />
            <img src={props.fav.photos[2]}  />
            <Card.Content>
                <Card.Header>{props.fav.name}</Card.Header>
            </Card.Content>

        </Card>
             }>
            <Modal.Header>Favorite</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src={props.fav.photos[Math.floor(Math.random() * 3)]} />
            <Modal.Description>
                <Header>{props.fav.name}</Header>
                <hr/>
                <p>

                {props.fav.display_phone}
                </p>
                <hr/>
                <p>rating: {props.fav.rating} ({props.fav.review_count})</p>
                <hr/>
                <p>transaction: {props.fav.transactions[0]}</p>
                <hr/>
                <p>{props.fav.location.address1}</p>
                <p>{props.fav.location.address2}</p>
                <p>{props.fav.location.address3}</p>
                <p>{props.fav.location.city} {props.fav.location.state} {props.fav.location.zip_code}</p>
                
            </Modal.Description>
            </Modal.Content>
        </Modal>
        
    )
}
