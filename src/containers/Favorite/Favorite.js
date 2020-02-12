import React, { Component } from 'react'
import FavList from './FavList'
import { YELP } from '../../key'
import Nav from '../NavBar'
import { Menu, Icon } from 'semantic-ui-react'

export default class Favorite extends Component {

    state = {
        favorites: [],
        favObject: [],
        index: 0
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

    handleIndex = (e) => {
        console.log(e);
        let newIndex = this.state.index + 5
        if(this.state.favorites.length + 5 > newIndex){
            let newPlace = this.fetchPlace(newIndex)
            console.log(newPlace);
            
            this.setState({
                index: newIndex
            })
        }else{
            this.setState({
                index: 0
            })
        }
        
    }


    fetchPlace = (index = this.state.index) => {
        let fav = [...this.state.favorites].slice(index, index+5)
        // debugger
        fav.forEach(fav => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${fav.place_id}`,{
                        method: 'GET',
                        headers: {
                            'Authorization': YELP // <------- YELP API KEY
                        }
                    }).then(res => res.json())
                    .then(data => {
                        let newArray
                        if(this.state.favObject.length > 4){
                            console.log('new');
                            
                            newArray = [data,...this.state.favObject].splice(0,5)
                        }else{
                            console.log('start');
                            newArray = [data,...this.state.favObject]
                        }
                        this.setState({favObject: newArray})

                        })
                    })       
    }



    



    render() {
        return (
            <div className="fav">
                <Nav/>
                <Menu secondary>
                    <Menu.Menu position='right'>
                    <Menu.Item>
                        <Icon onClick={this.handleIndex} size='big' name='arrow alternate circle right'/>
                    </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <FavList fav={this.state.favObject} />
                
            </div>
        )
    }
}
