import React from 'react'

export default function ProfileInfo(props) {
    return (
        <div>
            <h1>{props.username}</h1>
            <h1>{props.first_name}</h1>
            <h1>{props.last_name}</h1>
        </div>
    )
}

