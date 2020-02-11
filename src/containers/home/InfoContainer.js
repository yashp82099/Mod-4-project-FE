import React from 'react'
import InfoList from './InfoList'
import { Card } from 'semantic-ui-react'

export default function InfoContainer(props) {

    const handleAdded = (place) => {
        let favItem
        favItem = props.favorites.find(fav => fav.place_id === place.id)
        return favItem? true: false
    }

    return (
        <div>
             <Card.Group>
            {/* {props.places.map((place, i) => <InfoList key={i} place={place} />)} */}
            {props.places? props.places.map((place, i) => <InfoList handleAddFav={props.handleAddFav} handleRemoveFav={props.handleRemoveFav} key={i} place={place} added={handleAdded(place)}/> ): <h1>none</h1>  }
            </Card.Group>
        </div>
    )
}
