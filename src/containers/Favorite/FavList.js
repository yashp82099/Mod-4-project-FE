import React from 'react'
import FavItem from './FavItem'

export default function FavList(props) {
    return (
        <div>
            {props.fav.map(fav => <FavItem fav={fav}/>)}
        </div>
    )
}
