import React from 'react'
import FavItem from './FavItem'
import { Card } from 'semantic-ui-react'

export default function FavList(props) {
    return (
        <div className='favC' >
            <div className='center'>
                <Card.Group itemsPerRow={5}>
                    {props.fav.map((fav,i) => <FavItem handleSelect={props.handleSelect} key={i} fav={fav}/>)}
                </Card.Group>
            </div>
        </div>
    )
}
