import React from 'react'
import { Card, Icon, Image ,Button, Header, Modal } from 'semantic-ui-react'


export default function FavItem(props) {



    return (
        <Modal trigger={
        <Card>
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
                <p>
                {props.fav.display_phone}
                </p>
                <p>Is it okay to use this photo?</p>
            </Modal.Description>
            </Modal.Content>
        </Modal>
        
    )
}
