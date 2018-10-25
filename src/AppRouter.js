import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

import Home from './Home/Home'

export default class AppRouter extends Component {
  state = {activeItem: 'home'}

  handleItemClick = (e, { name }) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return(
      <Router>
        <div>
          <Menu pointing secondary>
            <Menu.Item
              as={Link} to='/home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}>
              Home
            </Menu.Item>
          </Menu>
        </div>
      </Router>
    )
  }
}
