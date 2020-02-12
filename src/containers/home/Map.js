import React, { Component} from 'react'
// import React, {  } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Icon } from 'semantic-ui-react'
import { MAP } from '../../key'


export default class Map extends Component {

    state = {
        latitude: 0,
        longitude: 0,
        width: "70vw",
        height: "70vh",
        zoom: 11,
        selected: null
    }
    
    

    handleMarkers = (place) => {
        // console.log(place.coordinates.latitude);
        // console.log(place.coordinates.longitude);
        
        return <Marker key={place.id} latitude={place.coordinates.latitude} longitude={place.coordinates.longitude}>
          
            <Icon onClick={e => {this.setState({selected: place})}} color='violet' name='food' />
          
        </Marker>
    }
    handelPopup = (selected) => {
        return <Popup
        latitude={selected.coordinates.latitude}
        longitude={selected.coordinates.longitude}
        onClose={() => {
          this.setState({selected: null})
        }}
      >
        <div>
          <h2>{selected.name}</h2>
          {/* <p>{selectedPark.properties.DESCRIPTIO}</p> */}
        </div>
      </Popup>
    }


    handleMapChange = (viewport) => {
        console.log(viewport);
        this.setState({
            longitude: viewport.longitude,
            latitude: viewport.latitude,
            zoom: viewport.zoom
        })
    }
   


    render() {
        let places = this.props.places
        if(this.props.region && this.state.latitude !== this.props.region.center.latitude  ){
            // console.log(this.props.region.center)
            this.setState({
                latitude: this.props.region.center.latitude,
                longitude: this.props.region.center.longitude
            })
        }
        return (
            <div>
                <ReactMapGL
                    
                    latitude={this.state.latitude} longitude={this.state.longitude} width={this.state.width} height={this.state.height} zoom={this.state.zoom}
                    mapboxApiAccessToken={MAP}
                    onViewportChange={viewport => this.handleMapChange(viewport) }
                >
                {places? this.props.places.map(place => this.handleMarkers(place)) : null }
                {this.state.selected? this.handelPopup(this.state.selected) : null}
                </ReactMapGL>

            </div>
        )
    }
}
