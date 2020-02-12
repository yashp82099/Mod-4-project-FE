import React, { Component } from 'react'
import FavList from './FavList'
import { YELP } from '../../key'
import Nav from '../NavBar'

export default class Favorite extends Component {

    state = {
        favorites: [],
        favObject: [],
        index: 1
    }

    componentDidMount(){
        fetch('http://localhost:3000/api/v1/favorite',{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Access-Token': localStorage.getItem('token')
            }
        }).then(res => res.json())
        .then(data => {
                 this.setState({favorites: data})
                 this.fetchPlace() 
        } )
    }


    fetchPlace = () => {
        let fav = [...this.state.favorites].slice(this.state.index, this.state.index+5)
        // debugger
        fav.forEach(fav => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${fav.place_id}`,{
                        method: 'GET',
                        headers: {
                            'Authorization': YELP // <------- YELP API KEY
                        }
                    }).then(res => res.json())
                    .then(data => {
                        this.setState({favObject: [...this.state.favObject,data]})

                        })
                    })       
    }



    



    render() {
        return (
            <div>
                <Nav/>
                <FavList fav={this.state.favObject} />
                
            </div>
        )
    }
}
