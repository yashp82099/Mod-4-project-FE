import React, { Component } from 'react'
import AddressContainer from './AddressContainer'
import InfoContainer from './InfoContainer'
import { Grid } from 'semantic-ui-react'
// import InfoList from './InfoList'
import Map from './Map'
import { YELP } from '../../key'
// import { logDOM } from '@testing-library/react'

export class Home extends Component {
    

    state = {
        first_name: '',
        last_name: '',
        addresses: [],
        favorites: [],
        searchTerm: 'indian',
        zip: '',
        places: [],
        selected: '',
    }

    componentDidMount(){
        // debugger
        this.fetchUser()
        
    }

    fetchPlaces = () => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.state.searchTerm}&location=${this.state.zip}&radius=10000&limit=20`,{
            method: "GET",
            headers: {
                'Authorization': YELP
            }
        }).then(res => res.json())
            .then(data => {
                
                this.setState({
                    places: data
                })
            })
    }

    fetchUser = () => {
        fetch('http://localhost:3000/api/v1/users/show',{
            method: "GET",
            headers: {
                
                'Content-Type': 'application/json',
                'Access-Token': localStorage.getItem('token')
            }
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.addresses){
               this.setState({
                
                first_name: data.first_name,
                last_name: data.last_name,
                addresses: data.addresses,
                favorites: data.favorites,
                zip: data.addresses[0].zip,
                selected: data.addresses[0].name
            }) 
            }else{
                this.setState({
                
                    first_name: data.first_name,
                    last_name: data.last_name,
                    addresses: data.addresses,
                    zip: data.zip
                }) 
            }
            
            this.fetchPlaces()
        })
    }

    handleLocationChange = (zip,name) => {
        console.log(zip);
        
        this.setState({
            zip: zip,
            selected: name
        })
        this.fetchPlaces()
        
    }

    handelSearch =(e) => {
        this.setState({
            searchTerm: e.target.value
        })
        this.fetchPlaces()
        
    }

    handleAddFav = (place_id, name) => {
        console.log(place_id);
        
        fetch('http://localhost:3000/api/v1/favorite',{
            method: 'POST',
            headers: {'Content-Type':'application/json',
            'Access-Token': localStorage.getItem('token')},
            body: JSON.stringify({favorite:{place_id: place_id, name: name}})
        }).then(res => res.json())
        .then(data => {
            this.setState({favorites: [...this.state.favorites, data]})
        })

    }

    handleRemoveFav = (place_id, name) => {
        console.log(place_id);
        
        fetch('http://localhost:3000/api/v1/remove/fav',{
            method: 'POST',
            headers: {'Content-Type':'application/json',
            'Access-Token': localStorage.getItem('token')},
            body: JSON.stringify({favorite:{place_id: place_id, name: name}})
        }).then(res => res.json())
        .then(data => {
            let newfav = this.state.favorites.filter(place => place.place_id !== data.place_id)
            this.setState({favorites: newfav})
            
        })

    }




    render() {
        return (
            <div>
                home
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <input type='text' name='searchTerm' onChange={this.handelSearch} value={this.state.searchTerm}/>
                            <AddressContainer selected={this.state.selected} addresses={this.state.addresses} handleLocationChange={this.handleLocationChange} />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Map region={this.state.places.region} places={this.state.places.businesses}  />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <InfoContainer handleAddFav={this.handleAddFav} handleRemoveFav={this.handleRemoveFav} favorites={this.state.favorites} places={this.state.places.businesses} />
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Home
