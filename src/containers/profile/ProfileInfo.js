import React from 'react'

export default function ProfileInfo(props) {
    return (
        <div className='infoC'>
            <div className='infoC'>
                <div className='roundN'>
                <h1 className='proName'>{props.first_name[0]}{props.last_name[0]}</h1>
            </div>
            <div className='info'>
                <h1>@{props.username}</h1>
                <h1>{props.last_name} {props.first_name}</h1>
            </div>

            </div>
            
        </div>
    )
}

