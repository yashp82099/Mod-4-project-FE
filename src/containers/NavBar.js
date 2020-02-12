import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {Link, Redirect} from 'react-router-dom'

export default class NavBar extends Component {

    state = {activeItem: 'Home'}

    // handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleItemClick = (e) => {
      return <Redirect to='/favorites' />
    }

    render() {
        const { activeItem } = this.state

    return (
      <Menu secondary>
      <Link to='/home'><Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={this.handleItemClick}
      /></Link>
      
      <Link to='/favorites'><Menu.Item
        name='favorites'
        active={activeItem === 'favorites'}
        onClick={this.handleItemClick}
      /></Link>

      <Menu.Menu position='right'>

        <Link to='/profile'><Menu.Item
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        /></Link>

        <Link to='/'> <Menu.Item
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
        /></Link>
       
      </Menu.Menu>
    </Menu>
    )
    }
}
